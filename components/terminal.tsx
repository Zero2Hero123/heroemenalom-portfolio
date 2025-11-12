"use client";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import { motion } from "motion/react";

export default function Terminal() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 1, -5, 5, 0],
          y: [0, -8, 5, -6, 0],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        whileHover={{ scale: 1.05 }}
        initial={{ scale: 1 }}
        className="shadow-xl shadow-zinc-800 hover:cursor-pointer rounded-md flex flex-col items-center justify-start bg-zinc-900 w-[800px] h-[300px]"
      >
        <div className="basis-10 w-full   text-white flex justify-center items-center">
          About Me
        </div>
        <div className="flex gap-2 w-full px-4 text-white">
          <span className="text-white">~$</span>
          <div className="flex flex-col gap-2">
            <TypingText
              className=""
              cursorClassName="bg-white"
              text="Who is Hero?"
              showCursor={false}
            />

            <TypingText
              cursorClassName="bg-white"
              typingSpeed={15}
              startOnVisible
              hideCursorWhileTyping
              initialDelay={1000}
              text="I'm a Computer Science major at the University of Maryland, Baltimore County who specializes in backend development from designing API endpoints and integrating with LLMs to building backend infrastructure in the cloud using AWS and pushing to prod. I have has hands-on internship experience building over 40 AI-powered frontend
              tools and implementing web sockets to reduce client-server interactions by 60%. I have strong problem-solving, collaboration, and leadership skills demonstrated
              through cross-functional projects and team management experience."
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
