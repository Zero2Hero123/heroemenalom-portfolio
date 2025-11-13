"use client";

import { motion } from "motion/react";
import SkillDisplay from "./SkillDisplay";

const techStack = {
  nextjs: {
    img: await import("../assets/nextjs.logo.png"),
    desc: "",
  },
  supabase: {
    img: await import("../assets/supabase.logo.png"),
  },
  tailwind: {
    img: await import("../assets/tailwindcss.logo.png"),
  },
  typescript: {
    img: await import("../assets/typescript.logo.png"),
  },
  postgresql: {
    img: await import("../assets/postgresql.logo.png"),
  },
  graphql: {
    img: await import("../assets/graphql.logo.png"),
  },
  nestjs: {
    img: await import("../assets/nestjs.logo.svg"),
  },
  react: {
    img: await import("../assets/react.logo.png"),
  },
  socketio: {
    img: await import("../assets/socketio.logo.png"),
  },
  firebase: {
    img: await import("../assets/firebase.logo.png"),
  },
  googlecloud: {
    img: await import("../assets/gcp.logo.png"),
  },
  aws: {
    img: await import("../assets/aws.logo.png"),
  },
  python: {
    img: await import("../assets/python.logo.png"),
  },
  docker: {
    img: await import("../assets/docker.logo.png"),
  },
  pytorch: {
    img: await import("../assets/pytorch.logo.png"),
  },
  java: {
    img: await import("../assets/java.logo.png"),
  },
};

export type Skill = keyof typeof techStack;

const skills: Skill[] = Object.keys(techStack) as Skill[];

export default function SkillsShowcase() {
  return (
    <>
      <div
        id="skills"
        className="w-full h-96 flex flex-wrap items-center justify-center gap-10"
      >
        {skills.map((skill) => (
          <SkillDisplay key={skill} skill={skill} {...techStack[skill]} />
        ))}
      </div>
    </>
  );
}
