"use client";

import { motion } from "motion/react";

interface Props {
  sectionId: string;
  title: string;
}

export default function SectionTitle({ title, sectionId }: Props) {
  return (
    <motion.div
      id={sectionId}
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 100, x: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl flex justify-center"
    >
      {title}
    </motion.div>
  );
}
