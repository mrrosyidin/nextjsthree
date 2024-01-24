import TableUser from "./TableUser";
import { cookies } from "next/headers";

type Data = {
  id: number;
  email: string;
  role: string;
  created_at: string;
};

async function getUser() {
  const cookieStore = cookies().get("Token")?.value;
  console.log(cookieStore);

  const res = await fetch("http://127.0.0.1:8000/api/User", {
    method: "get",
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

export default async function page() {
  const data: Data[] = await getUser();

  return <TableUser {...data}></TableUser>;
}
