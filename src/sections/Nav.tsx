import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 m-0 h-[12vh] w-full bg-emerald-100">
      <div className="z-50 mx-30 my-4 hidden items-center justify-between transition-all duration-300 ease-in-out max-xl:mx-10 lg:flex">
        <a className="text-2xl font-bold" href="#">
          Design<span className="font-bold text-orange-600">AGENCY</span>
        </a>
        <div className="flex items-center gap-12">
          <a
            className="transition duration-300 ease-in-out hover:scale-110 hover:text-orange-600 hover:underline hover:underline-offset-8"
            href="#services"
          >
            Services
          </a>
          <a
            className="transition duration-300 ease-in-out hover:scale-110 hover:text-orange-600 hover:underline hover:underline-offset-8"
            href="#about"
          >
            Aboutus
          </a>
          <a
            className="transition duration-300 ease-in-out hover:scale-110 hover:text-orange-600 hover:underline hover:underline-offset-8"
            href="#contact"
          >
            Contactus
          </a>
          <a href="#">
            <button className="cursor-pointer rounded-xl border border-orange-500 bg-transparent px-6 py-2 text-orange-500 transition duration-500 ease-in-out hover:scale-110 hover:bg-orange-500 hover:text-white">
              Log In
            </button>
          </a>
          <a href="#">
            <button className="cursor-pointer rounded-xl border bg-orange-500 px-6 py-2 text-white transition duration-500 ease-in-out hover:scale-105 hover:border-orange-500 hover:bg-transparent hover:text-orange-500">
              Register
            </button>
          </a>
        </div>
      </div>
      <div className="mx-6 my-4 flex items-center justify-between lg:hidden">
        <a className="text-xl font-bold" href="#">
          Design<span className="font-bold text-orange-600">AGENCY</span>
        </a>
        <button
          id="ham-btn"
          className={`${isOpen ? "hidden" : "block"} flex flex-col gap-1.5 text-gray-600`}
          onClick={() => setIsOpen(true)}
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <button
          id="x-btn"
          className={`${isOpen ? "block" : "hidden"} flex flex-col gap-1.5 text-gray-600`}
          onClick={() => setIsOpen(false)}
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <ul
        id="ham-menu"
        className={`${isOpen ? "right-0" : "right-[-100%]"} fixed top-[12vh] h-full w-[60vw] transform justify-around space-y-5 overflow-hidden bg-emerald-100 p-4 text-orange-600 duration-800 ease-in-out lg:hidden`}
      >
        <li>
          <a className="hover:text-orange-400" href="#services">
            Services
          </a>
        </li>
        <li>
          <a className="hover:text-orange-400" href="#about">
            About us
          </a>
        </li>
        <li>
          <a className="hover:text-orange-400" href="#contact">
            Contact us
          </a>
        </li>
        <button className="w-full cursor-pointer rounded-xl border px-6 py-2 active:border-none active:bg-orange-400 active:text-white">
          Log In
        </button>
        <button className="w-full cursor-pointer rounded-xl border px-6 py-2 active:border-none active:bg-orange-400 active:text-white">
          Register
        </button>
      </ul>
    </nav>
  );
}

export default Nav;
