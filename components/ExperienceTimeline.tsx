"use client";
import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";
import type { ProjectCardClass, Stack } from "./ProjectCard";

const experiences: Omit<ProjectCardClass, "isEven">[] = [
  {
    title: "Tintype",
    desc: "- Software Engineer Intern - Designed backend API endpoints to interact with frontend. Programmed 40+ LLM tools for frontend AI assistant to automate tasks on user's behalf. Established scalable storage of user files with S3 buckets.",
    projectLink: "https://www.trytintype.io/",
    stack: [
      "typescript",
      "nextjs",
      "graphql",
      "socketio",
      "googlecloud",
      "firebase",
      "awsS3",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <>
      <motion.div className="w-full flex flex-col gap-10 overflow-x-hidden ">
        {experiences.map((project, index) => (
          <ProjectCard isEven={index % 2 == 0} key={index} {...project!} />
        ))}
      </motion.div>
    </>
  );
}
