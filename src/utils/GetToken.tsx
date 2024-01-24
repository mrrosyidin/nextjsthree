"use server";

import { cookies } from "next/headers";

export default async function GetToken() {
  const token = cookies().get("Token")?.value;
  console.log(token);
  return token;
}
