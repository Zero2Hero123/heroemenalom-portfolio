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
  socketio: await import("../assets/socketio.logo.png"),
};

interface Props {
  title: string;
  desc: string;
  projectLink?: string;
  githubLink?: string;
  stack: (keyof typeof techStack)[];
  isEven: boolean;
}

export default function ProjectCard({
  title,
  desc,
  projectLink,
  githubLink,
  isEven,
  stack,
}: Props) {
  return (
    <motion.div
      initial={{ x: isEven ? -1000 : 1000 }}
      transition={{ duration: 1.5, type: "spring" }}
      whileInView={{ x: isEven ? 0 : 400 }}
    >
      <Card className="relative hover:cursor-pointer bg-zinc-900 w-[60%] h-78 shadow-2xl shadow-slate-800 hover:shadow-slate-700 transition-shadow border-none">
        <CardHeader>
          <CardTitle>
            <span className="text-3xl font-inter font-light italic">
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
