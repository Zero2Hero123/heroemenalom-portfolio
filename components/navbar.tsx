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
          <motion.a whileHover={{}} href="#">
            {"<HE />"}
          </motion.a>
        </motion.div>

        <div className="text-white flex justify-center grow gap-5 font-inter font-extralight">
          <motion.a whileHover={{ scale: 1.1 }} href="#about">
            About
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#experience">
            Experience
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#projects">
            Projects
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#skills">
            Skills
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#contacts">
            Contact
          </motion.a>
        </div>
      </nav>
    </>
  );
}
