import React from 'react';

function NavBar() {
  return (
    <div className="fixed top-0 right-0 left-0 mx-auto max-w-screen-2xl px-10 z-10 transition-colors ease-in-out delay-0">
      <div className="w-full flex items-center justify-between py-2.5 text-primary ">
        <div className="flex items-center gap-x-2">
          <span className="bg-primary rounded-full w-5 h-5 inline-block" />
          <h1 className="font-bold text-lg">Logo</h1>
        </div>
        <div className="lg:hidden w-6 text-primary">
          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" />
          </svg>
        </div>
        <ul className=" hidden lg:flex items-center gap-x-7 list-none text-base">
          <li key="how-it-works" className="font-bold">
            How it works
          </li>
          <li key="community">Our Community</li>
          <li key="about-us">About Us</li>
          <li key="client-review">Client Review</li>
          <li
            key="try-for-free"
            className="border rounded-full px-2.5 gap-x-2 py-2 flex items-center justify-between"
          >
            Try For Free
            <svg
              className="w-6"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              title="ArrowOutward"
            >
              <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
