"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
  CardFooter,
} from "./ui/card";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Image from "next/image";

const techStack = {
  nextjs: await import("../assets/nextjs.logo.png"),
  supabase: await import("../assets/supabase.logo.png"),
  tailwind: await import("../assets/tailwindcss.logo.png"),
  typescript: await import("../assets/typescript.logo.png"),
  postgresql: await import("../assets/postgresql.logo.png"),
  react: await import("../assets/react.logo.png"),
  graphql: await import("../assets/graphql.logo.png"),
  nestjs: await import("../assets/nestjs.logo.svg"),
  socketio: await import("../assets/socketio.logo.png"),
  firebase: await import("../assets/firebase.logo.png"),
  googlecloud: await import("../assets/gcp.logo.png"),
  awsS3: await import("../assets/s3.logo.svg"),
  python: await import("../assets/python.logo.png"),
  pytorch: await import("../assets/pytorch.logo.png"),
  java: await import("../assets/java.logo.png"),
};

export type Stack = keyof typeof techStack;

export interface ProjectCardClass {
  title: string;
  desc: string;
  projectLink?: string;
  githubLink?: string;
  stack: Stack[];
  isEven: boolean;
}

export default function ProjectCard({
  title,
  desc,
  projectLink,
  githubLink,
  isEven,
  stack,
}: ProjectCardClass) {
  return (
    <motion.div
      initial={{ x: isEven ? -50 : 50 }}
      transition={{
        duration: 1.5,
        type: "spring",
      }}
      whileInView={{ x: 0, fill: "forwards" }}
      className="h-fit w-full flex flex-col justify-center items-center my-10"
    >
      <Card className="text-sm md:text-[2vh] relative hover:cursor-pointer bg-zinc-900 w-[60%] min-w-44 aspect-5/2 shadow-2xl shadow-slate-800 hover:shadow-slate-700 transition-shadow border-none">
        <CardHeader>
          <CardTitle>
            <span className="text-3xl md:text-[3vh] font-inter font-light italic">
              {title}
            </span>
          </CardTitle>
          <div className="flex flex-row-reverse justify-start gap-2">
            <CardAction>
              {projectLink && (
                <Tooltip>
                  <TooltipTrigger>
                    <Link href={projectLink} target="_blank">
                      <ExternalLink />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className=" transition-all animate-bounce">
                    View Website
                  </TooltipContent>
                </Tooltip>
              )}
            </CardAction>
            <CardAction>
              {githubLink && (
                <Tooltip>
                  <TooltipTrigger>
                    <Link href={githubLink} target="_blank">
                      <Github />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="transition-all animate-bounce">
                    View Code
                  </TooltipContent>
                </Tooltip>
              )}
            </CardAction>
          </div>
        </CardHeader>
        <CardContent>
          <span>{desc}</span>
        </CardContent>
        <CardFooter className="flex gap-2">
          {stack.map((stack, index) => (
            <Tooltip key={index}>
              <TooltipTrigger>
                <Image
                  src={techStack[stack]}
                  alt={stack}
                  width={36}
                  height={36}
                  className="md:w-[2vw]"
                />
              </TooltipTrigger>
              <TooltipContent className="transition-all">
                {stack}
              </TooltipContent>
            </Tooltip>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
