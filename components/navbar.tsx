"use client";
import Link from "next/link";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between w-full px-4 py-2 bg-white dark:bg-black">
        <motion.div
          drag
          whileHover={{ scale: 1.1 }}
          className="text-white font-bold hover:cursor-pointer text-xl "
        >
          <Link href="#">{"<HE />"}</Link>
        </motion.div>

        <div className="text-white flex justify-center grow gap-5">
          <Link href="#about">About</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#contacts">Contact</Link>
        </div>
      </nav>
    </>
  );
}
