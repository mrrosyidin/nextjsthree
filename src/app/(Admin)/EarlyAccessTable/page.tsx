import TableEarlyAccess from "./TableEarlyAccess";
import { cookies } from "next/headers";

interface Data {
  id: number;
  email: string;
  status: string;
  created_at: string;
}

async function getEarlyAccess() {
  const cookieStore = cookies().get("Token")?.value;

  const res = await fetch("http://127.0.0.1:8000/api/EarlyAccess", {
    headers: {
      Authorization: `Bearer ${cookieStore}`,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    console.error(`Error fetching user data. Status: ${res.status}`);
    return null;
  }

  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error parsing response as JSON:", error);
    return null;
  }
}

export default async function EarlyAccessList() {
  const data: Data[] = await getEarlyAccess();

  return <TableEarlyAccess {...data}></TableEarlyAccess>;
}
