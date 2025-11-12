"use client";

import Image from "next/image";
import profile from "../assets/profile_pic.jpg";
import { motion } from "motion/react";

export default function Header() {
  return (
    <>
      <motion.div
        initial={{ filter: "blur(50px)" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        animate={{ filter: "blur(0)" }}
        className="flex gap-20 justify-center items-center"
      >
        <Image
          className="rounded-[50%] w-40"
          alt="profile-picture"
          src={profile}
        />

        <span className="text-[80px] ">Hero Emenalom</span>
      </motion.div>
    </>
  );
}
