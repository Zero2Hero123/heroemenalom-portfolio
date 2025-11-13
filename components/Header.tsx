"use client";

import Image from "next/image";
import profile from "../assets/profile_pic.jpg";
import { motion, useMotionValue } from "motion/react";
import SkillsShowcase from "./SkillsShowcase";
import { useState } from "react";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const variants = {
    hovered: {
      x: 100,
      rotate: 30,
    },
    notHovered: {
      x: -100,
      rotate: 30,
    },
  };

  return (
    <>
      <motion.div
        initial={{ filter: "blur(50px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        animate={{ filter: "blur(0)" }}
        className="relative flex flex-wrap gap-20 justify-center items-center"
      >
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="hover:cursor-pointer relative border rounded-[50%] overflow-hidden"
        >
          <motion.div
            variants={variants}
            animate={isHovered ? "hovered" : "notHovered"}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute shadow-2xl bg-linear-120  from-white to-transparent -top-10 opacity-30  w-[30%] h-56 "
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
