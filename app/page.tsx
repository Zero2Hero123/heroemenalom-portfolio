import Image from "next/image";
import profile from "../assets/profile_pic.jpg";
import Terminal from "@/components/terminal";
import Header from "@/components/Header";
import ProjectList from "@/components/ProjectList";
import SectionTitle from "@/components/SectionTitle";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsShowcase from "@/components/SkillsShowcase";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <div
      id="about"
      className="text-white flex flex-col gap-5 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"
    >
      <header>
        <Header />
      </header>

      <section className="flex w-full justify-center">
        <Terminal />
      </section>

      <section className="w-full px-16 pt-10 flex flex-col gap-5">
        <SkillsShowcase />
      </section>

      <section className="w-full pt-10 flex flex-col gap-5">
        <SectionTitle sectionId="projects" title="Featured Projects" />
        <ProjectList />
      </section>

      <section className="w-full pt-10 flex flex-col gap-5">
        <SectionTitle sectionId="experience" title="Experience" />
        <ExperienceTimeline />
      </section>

      <section className="w-full px-16 pt-10 flex flex-col gap-5">
        <SectionTitle sectionId="contact" title="Contact" />
        <ContactMe />
      </section>
    </div>
  );
}
