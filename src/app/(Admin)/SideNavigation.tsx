"use client";

import { useRouter } from "next/navigation";
import { SyntheticEvent } from "react";
import GetToken from "@/utils/GetToken";

export default function SideNavigation() {
  const router = useRouter();

  async function handleLogout(e: SyntheticEvent) {
    e.preventDefault();

    const token = await GetToken();

    await fetch(`http://127.0.0.1:8000/api/Logout`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data:", data);
        router.push("/Dashboard");
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }

  const handleButtonMember = () => {
    router.push("/Member");
  };

  const handleButtonEarly = () => {
    router.push("/EarlyAccessTable");
  };

  return (
    <div className="fixed">
      <button
        title="Side navigation"
        type="button"
        className="fixed z-40 self-center order-10 visible block w-10 h-10 bg-white rounded opacity-100 lg:hidden left-6 top-6"
        aria-haspopup="menu"
        aria-label="Side navigation"
        aria-expanded="false"
        aria-controls="nav-menu-1"
      >
        <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
          ></span>
        </div>
      </button>

      <aside
        id="nav-menu-1"
        aria-label="Side navigation"
        className="fixed top-0 bottom-0 left-0 z-40 flex flex-col transition-transform -translate-x-full bg-white border-r w-72 sm:translate-x-0 border-r-slate-200"
      >
        <div className="flex flex-col items-center gap-4 p-6 border-b border-slate-200">
          <div className="shrink-0">
            <a
              href="#"
              className="relative flex items-center justify-center w-12 h-12 text-white rounded-full"
            >
              <img
                src="https://i.pravatar.cc/40?img=7"
                alt="user name"
                title="user name"
                width="48"
                height="48"
                className="max-w-full rounded-full"
              />
              <span className="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 p-1 text-sm text-white border-2 border-white rounded-full bg-emerald-500">
                <span className="sr-only"> online </span>
              </span>
            </a>
          </div>
          <div className="flex flex-col gap-0 min-h-[2rem] items-start justify-center w-full min-w-0 text-center">
            <h4 className="w-full text-base truncate text-slate-700">
              Luke Skywalker
            </h4>
            <p className="w-full text-sm truncate text-slate-500">
              Jedi warrior
            </p>
          </div>
        </div>
        <nav
          aria-label="side navigation"
          className="flex-1 overflow-auto divide-y divide-slate-100"
        >
          <div>
            <ul className="flex flex-col flex-1 gap-1 py-3">
              <li className="px-3">
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 transition-colors rounded text-slate-700 hover:text-emerald-500 hover:bg-emerald-50 focus:bg-emerald-50 aria-[current=page]:text-emerald-500 aria-[current=page]:bg-emerald-50"
                >
                  <div className="flex items-center self-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                      aria-label="Dashboard icon"
                      role="graphics-symbol"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start justify-center flex-1 w-full gap-0 overflow-hidden text-sm truncate">
                    <button type="button" onClick={handleButtonEarly}>
                      Early Access List
                    </button>
                  </div>
                </a>
              </li>

              <li className="px-3">
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 transition-colors rounded text-slate-700 hover:text-emerald-500 hover:bg-emerald-50 focus:bg-emerald-50 aria-[current=page]:text-emerald-500 aria-[current=page]:bg-emerald-50 "
                >
                  <div className="flex items-center self-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                      aria-label="Dashboard icon"
                      role="graphics-symbol"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start justify-center flex-1 w-full gap-0 overflow-hidden text-sm truncate">
                    <button type="button" onClick={handleButtonMember}>
                      Member List
                    </button>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div></div>
        </nav>

        <footer className="p-3 border-t border-slate-200">
          <a
            href="#"
            className="flex items-center gap-3 p-3 transition-colors rounded text-slate-900 hover:text-emerald-500 "
          >
            <div className="flex items-center self-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                aria-label="Dashboard icon"
                role="graphics-symbol"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div
              onClick={handleLogout}
              className="flex flex-col items-start justify-center flex-1 w-full gap-0 overflow-hidden text-sm font-medium truncate"
            >
              <button>Logout</button>
            </div>
          </a>
        </footer>
      </aside>

      <div className="fixed top-0 bottom-0 left-0 right-0 z-30 transition-colors bg-slate-900/20 sm:hidden"></div>
    </div>
  );
}
