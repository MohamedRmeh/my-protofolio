"use client";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiGit,
  SiGithub,
  SiAmazonaws,
} from "react-icons/si";
import { HoverEffect } from "../ui/card-hover-effect";

export default function Skills() {
  return (
    <section className="mb-14">
      <div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="sm:text-5xl text-4xl font-semibold gradient-text Italicized-word">
            Skills
          </h1>
          <hr className="lg:w-[1200px] w-[300px] md:w-[700px] sm:w-[400px] border-t-2 border-neutral-400 my-8" />
        </div>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
    </section>
  );
}

export const projects = [
  {
    text: "TypeScript",
    Icon: SiTypescript,
  },
  {
    text: "React",
    Icon: SiReact,
  },
  {
    text: "Next.js",
    Icon: SiNextdotjs,
  },
  {
    text: "Redux",
    Icon: SiRedux,
  },
  {
    text: "Tailwind",
    Icon: SiTailwindcss,
  },
  {
    text: "Bootstrap",
    Icon: SiBootstrap,
  },
  {
    text: "Node.js",
    Icon: SiNodedotjs,
  },
  {
    text: "Express",
    Icon: SiExpress,
  },
  {
    text: "MongoDB",
    Icon: SiMongodb,
  },
  {
    text: "git",
    Icon: SiGit,
  },
  {
    text: "github",
    Icon: SiGithub,
  },
  {
    text: "aws",
    Icon: SiAmazonaws,
  },
];
