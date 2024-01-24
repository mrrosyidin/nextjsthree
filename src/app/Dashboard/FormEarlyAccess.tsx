"use client";

import { SyntheticEvent, useState } from "react";

export default function FormEarlyAccess() {
  const [email, setEmail] = useState("");

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const response = await fetch(`http://127.0.0.1:8000/api/EarlyRegister`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    setEmail("");
    console.log(email, response);
  }
  return (
    <div>
      <form
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="relative">
          <input
            name="email"
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="btn inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Get access
          </button>
        </div>
      </form>
    </div>
  );
}
