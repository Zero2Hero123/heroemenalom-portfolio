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
        className="md:text-[1vw] shadow-xl shadow-zinc-800 hover:cursor-pointer rounded-md flex flex-col items-center justify-start bg-zinc-900 aspect-[16/7] scale-80 md:scale-none md:w-[60%] md:min-w-[500px]"
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
              text="I'm a Computer Science major at the University of Maryland, Baltimore County focusing on AI and system design. I've been programming for 6+ years. I specialize in backend development from designing API endpoints and integrating with LLMs to building secure, scalable backend infrastructure in the cloud using AWS and deploying with CI/CD. I have hands-on internship experience working with development teams to deliver full-scale applications to users. I designed over 40 AI-powered frontend
              tools and developed my own app that generated 50+ users. I have strong problem-solving, collaboration, and leadership skills demonstrated
              through cross-functional projects and team management experience. Making an impact on my community is what drives me to innovate."
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
