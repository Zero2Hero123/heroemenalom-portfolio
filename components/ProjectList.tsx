"use client";
import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";
import { stack } from "three/src/nodes/TSL.js";

const projects = [
  {
    title: "RosterPro",
    desc: "Utilizes OpenAI's API to generate weekly schedules that fit every workers availability and time-off. This solution helped my church organize our team more efficiently and reduce our sunday prep-time by 70%. Futhermore, it generated 50+ users as it was shared with neighboring branches. I learned how to integrate OpenAI's API in addition to other LLMs to create an enhanced user-experience.",
    githubLink: "https://github.com/Zero2Hero123/RosterPro",
    projectLink: "https://rosterprofessional.vercel.app/",
    stack: ["typescript", "nextjs", "supabase", "postgresql", "tailwind"],
  },
  {
    title: "Cognify",
    desc: "- Chief Technology Officer - Cognify is a new-age Learning Management System (LMS) designed to empower teachers and students by removing friction, not adding it. Teachers can focus on teaching while we handle the rest. This AI-enhanced platform ships with auto-grading, grammer-checking, reminding students of due dates, tutor assistant, anti-cheat, and much more.",
    projectLink: "https://www.cognify.sh/",
    stack: ["typescript", "nextjs", "supabase", "nestjs", "tailwind"],
  },
  {
    title: "Plant Detective",
    desc: "Utilizes Computer vision AI to classify different types of plants. Planet detective allows users to examine the greenery around them, allowing users to identify poisonous plants or simply satisfy their curiosity. This won me 1st place in my highschool STEM fair competition. I learned how to utilize pytorch to train a model to classify images.",
    githubLink: "https://github.com/Zero2Hero123/plant-detective",
    stack: ["python", "pytorch"],
  },
  {
    title: "Connect 4 But Better",
    desc: "I created a multiplayer replica of my favorite board game growing up. I learned how to utilize websockets to establish real-time connections between clients.",
    githubLink: "https://github.com/Zero2Hero123/connect4butbetter",
    projectLink: "https://connect4butbetter.vercel.app/",
    stack: ["typescript", "react", "socketio"],
  },
];

export default function ProjectList() {
  return (
    <>
      <motion.div className="w-full flex flex-col md:gap-10 overflow-x-hidden">
        {projects.map((project, index) => (
          <ProjectCard isEven={index % 2 == 0} key={index} {...project!} />
        ))}
      </motion.div>
    </>
  );
}
