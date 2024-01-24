"use client";

import Script from "next/script";

export default function Client() {
  const downloadFile = () => {
    const downloadLink =
      "https://download1647.mediafire.com/6kdk8sw6vzkgC09OeerblWfkhmLP4CB5BZ5bHrd4TFinqhEbaJcX3TZMQiWq8LmK3FNJMccqPimdgCI4Z44gFgmJoPjD_Ngyu0VzgTpqJA5Qg1A7GWovQdlHtBbx4bgyhivk5mmLyi1fWrX5rB2dx6D-7eNem-Zb0143jMdCufn3/40r8gby9llozft6/nextcloudcookbook_34.apk";
    window.open(downloadLink, "_blank");
  };

  return (
    <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        Welcome back!
      </h5>
      <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
        Stay up to date and move work forward with us on Android. Download the
        app today.
      </p>
      <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
        <a
          className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          onClick={() => downloadFile()}
        >
          <svg
            className="me-3 w-7 h-7"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google-play"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
            ></path>
          </svg>
          <div className="text-left rtl:text-right">
            <div className="mb-1 text-xs">Get in on</div>
            <div className="-mt-1 font-sans text-sm font-semibold">.Apk</div>
          </div>
        </a>
      </div>
      <div className="mt-44 max-h-32 max-w-full">
        <div id="disqus_thread"></div>
        <Script id="my-script">
          {`
          var disqus_config = function () {
    this.page.url = document.location.href;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = document.location.href.split(".org")[1]; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };

    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://hentailegends-disqus-com.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
        `}
        </Script>
      </div>
    </div>
  );
}
