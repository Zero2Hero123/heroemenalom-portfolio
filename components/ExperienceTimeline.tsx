"use client";
import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";

const experiences = [
  {
    title: "Tintype",
    desc: "Software Engineer Intern",
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
      <motion.div className="w-full flex flex-col gap-10 overflow-x-hidden">
        {experiences.map((project, index) => (
          <ProjectCard isEven={index % 2 == 0} key={index} {...project!} />
        ))}
      </motion.div>
    </>
  );
}
