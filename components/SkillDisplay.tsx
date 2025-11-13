"use client";

import Image from "next/image";
import type { Skill } from "./SkillsShowcase";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { motion } from "motion/react";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { DiamondPlus } from "lucide-react";

interface Props {
  skill: Skill;
  img: string | StaticImport;
}

export default function SkillDisplay({ skill, img }: Props) {
  const [startX, setStartX] = useState(Math.random() * 100 - 50);
  const [startY, setStartY] = useState(Math.random() * 100 - 50);

  const variants = {
    open: {
      display: "absolute",
      left: 10,
      top: "30vh",
      scale: 5,
    },
    closed: {},
  };

  return (
    <motion.div
      whileHover={{ scale: 1.5, animationPlayState: "paused" }} // pause animation
      initial={{ scale: 1 }}
      animate={{
        x: [
          startX,
          Math.random() * 100 - 50,
          Math.random() * 100 - 50,
          Math.random() * 100 - 50,
          startX,
        ],
        y: [
          startY,
          Math.random() * 100 - 50,
          Math.random() * 100 - 50,
          Math.random() * 100 - 50,
          startY,
        ],
        transition: {
          duration: Math.random() * 10 + 10,
          ease: "easeInOut",
          repeat: Infinity,
        },
      }}
      className="hover:cursor-pointer"
    >
      <Image className="min-w-6" width={60} height={60} alt={skill} src={img} />
    </motion.div>
  );
}
