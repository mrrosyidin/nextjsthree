"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect ke halaman lain setelah 2 detik

    router.push("/Dashboard");

    // Membersihkan timer jika komponen dibongkar sebelum waktu habis
    return;
  }, []);

  return <div></div>;
}
