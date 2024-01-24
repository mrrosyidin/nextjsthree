"use client";

import AddUser from "./AddUser";
import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";
import { useState } from "react";

type Data = {
  id: number;
  email: string;
  role: string;
  created_at: string;
};

export default function TableUser(data: Data[]) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = Object.values(data).filter((item) =>
    item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ml-72">
      <div className="flex flex-col h-screen text-gray-700 bg-white shadow-md bg-clip-border">
        <div className="flex items-center justify-between gap-2 mb-1">
          <div>
            <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Members list
            </h5>
            <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              See information about all members
            </p>
          </div>
          <div className="flex flex-col gap-2 shrink-0 sm:flex-row">
            <AddUser />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* search this */}
          <div className="w-full md:w-72">
            <div className="relative h-10 w-full min-w-[200px]">
              <div className="absolute grid top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  ></path>
                </svg>
              </div>
              <input
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Search
              </label>
            </div>
          </div>
          {/* end search */}
        </div>
        <div className="py-10 px-10">
          <div className="py-2"></div>
          {filteredData && Array.isArray(filteredData) ? (
            <table
              className="w-full text-left border border-collapse rounded sm:border-separate border-slate-200"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                  >
                    Id
                  </th>
                  <th
                    scope="col"
                    className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                  >
                    email
                  </th>
                  <th
                    scope="col"
                    className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                  >
                    status
                  </th>
                  <th
                    scope="col"
                    className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                  >
                    tehe
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((user) => (
                  <tr key={user.id}>
                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                      {user.id}
                    </td>
                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                      {user.email}
                    </td>
                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                      {user.role}
                    </td>
                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                      {user.created_at}
                    </td>
                    <td className="flex h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                      <div className="mr-1">
                        <UpdateUser {...user}></UpdateUser>
                      </div>
                      <DeleteUser {...user}></DeleteUser>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
    </div>
  );
}
