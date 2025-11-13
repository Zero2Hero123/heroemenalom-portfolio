"use client";
import Link from "next/link";
import { motion } from "motion/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { Menu } from "lucide-react";

const resumeUrl =
  "https://fgcgrdzotvussnddseta.supabase.co/storage/v1/object/public/assets/Hero_Resume_Official.pdf";

export default function Navbar() {
  return (
    <>
      <nav className="sticky z-20 shadow-black shadow-2xl top-0 flex items-center justify-center md:justify-between gap-5 md:gap-0 w-full px-4 py-2 bg-white dark:bg-black">
        <motion.div
          drag
          whileHover={{ scale: 1.1 }}
          className="text-white font-bold hover:cursor-pointer text-xl "
        >
          <motion.a whileHover={{}} href="#">
            {"<HE />"}
          </motion.a>
        </motion.div>

        <div className="hidden md:flex text-white justify-center grow gap-5 font-inter font-extralight">
          <motion.a whileHover={{ scale: 1.1 }} href="#about">
            About
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#projects">
            Projects
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#experience">
            Experience
          </motion.a>

          {/*<motion.a whileHover={{ scale: 1.1 }} href="#skills">
            Skills
          </motion.a>*/}
          <motion.a whileHover={{ scale: 1.1 }} href="#contact">
            Contact
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href={resumeUrl}
            target="_blank"
          >
            Resume
          </motion.a>
        </div>
        <NavigationMenu className=" ">
          <NavigationMenuList>
            <NavigationMenuItem className="inline-flex md:hidden grow">
              <NavigationMenuTrigger>
                {" "}
                <Menu />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4">
                  <li>
                    {/*remove all whileHover attrs*/}
                    <NavigationMenuLink>
                      <motion.a href="#about">About</motion.a>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                      <motion.a href="#experience">Experience</motion.a>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                      <motion.a href="#projects">Projects</motion.a>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                      <motion.a href="#skills">Skills</motion.a>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                      <motion.a href="#contact">Contact</motion.a>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                      <motion.a href={resumeUrl} target="_blank">
                        Resume
                      </motion.a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </>
  );
}
