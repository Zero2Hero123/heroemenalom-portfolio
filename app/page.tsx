import Image from "next/image";
import profile from "../assets/profile_pic.jpg";
import Terminal from "@/components/terminal";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="text-white flex flex-col gap-10 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <header>
        <Header />
      </header>

      <section>
        <Terminal />
      </section>
    </div>
  );
}
