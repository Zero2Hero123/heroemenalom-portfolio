import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ContactMe() {
  return (
    <>
      <div className="flex gap-3 flex-wrap mb-20 items-center justify-center">
        <div>heroemenalom73@gmail.com</div>

        <Link href="https://www.linkedin.com/in/heroemenalom" target="_blank">
          <Linkedin />
        </Link>

        <Link href="https://www.instagram.com/zero2heroooo/" target="_blank">
          <Instagram />
        </Link>
      </div>
    </>
  );
}
