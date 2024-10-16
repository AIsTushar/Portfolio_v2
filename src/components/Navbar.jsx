"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
function Navbar() {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-8 lg:px-20 xl:px-48">
      {/* Links */}
      <div className="hidden md:flex gap-4 w-1/3 text-lg">
        {links.map((link) => (
          <NavLinks link={link} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md flex items-center xl:justify-center p-1 font-semibold"
        >
          <span className="text-white mr-1">Lazy</span>
          <span className="bg-white rounded w-12 h-6 flex items-center justify-center">
            Coder
          </span>
        </Link>
      </div>
      {/* Icons */}
      <div className="hidden md:flex gap-4 w-1/3 justify-center">
        <Link href="https://github.com/AIsTushar">
          <Image src="/github.png" alt="" height={24} width={24} />
        </Link>
        <Link href="https://github.com/AIsTushar">
          <Image src="/facebook.png" alt="" height={24} width={24} />
        </Link>
        <Link href="https://github.com/AIsTushar">
          <Image src="/instagram.png" alt="" height={24} width={24} />
        </Link>
        <Link href="https://github.com/AIsTushar">
          <Image src="/linkedin.png" alt="" height={24} width={24} />
        </Link>
      </div>
      {/* MENU */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between relative z-50"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="h-1 w-10 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="h-1 w-10 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="h-1 w-10 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className=" absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center text-4xl gap-8 z-20"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
