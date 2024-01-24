"use server";

import { cookies } from "next/headers";

async function SetToken(data: string) {
  cookies().set("Token", data);
}

export default SetToken;
