"use client";

import Link from "next/link";
import { useState } from "react";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-8 lg:px-20 xl:px-48">
      <div className="">
        {links.map((link) => (
          <Link href={link.url}>{link.title}</Link>
        ))}
      </div>
      <div className=""></div>
      {/* LOGO */}
      <div className="md:hidden">
        <Link
          href="/"
          className="text-sm bg-black rounded-md flex items-center justify-center p-1 font-semibold"
        >
          <span className="text-white mr-1">Lazy</span>
          <span className="bg-white rounded w-12 h-6 flex items-center justify-center">
            Coder
          </span>
        </Link>
      </div>
      {/* MENU */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between relative z-50"
          onClick={() => setOpen(!open)}
        >
          <div className="h-1 w-10 bg-white rounded"></div>
          <div className="h-1 w-10 bg-white rounded"></div>
          <div className="h-1 w-10 bg-white rounded"></div>
        </button>
        {open && (
          <div className=" absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center text-4xl gap-8">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
