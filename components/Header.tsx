"use client";

import Image from "next/image";
import profile from "../assets/profile_pic.jpg";
import { motion } from "motion/react";
import SkillsShowcase from "./SkillsShowcase";

export default function Header() {
  const variants = {
    hovered: {
      x: 90,
      rotate: 30,
    },
    notHovered: {
      x: -100,
    },
  };

  return (
    <>
      <motion.div
        initial={{ filter: "blur(50px)" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        animate={{ filter: "blur(0)" }}
        className="relative flex flex-wrap gap-20 justify-center items-center"
      >
        <motion.div className="hover:cursor-pointer relative border rounded-[50%] overflow-hidden">
          <motion.div
            variants={variants}
            initial="notHovered"
            whileHover="hovered"
            className="absolute -top-10 bg-white w-[40%] h-56 opacity-15"
          ></motion.div>
          <Image
            className="rounded-[50%] w-40"
            alt="profile-picture"
            src={profile}
          />
        </motion.div>

        <span className="text-[6vw] ">Hero Emenalom</span>
      </motion.div>
    </>
  );
}
