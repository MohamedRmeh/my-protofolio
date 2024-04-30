import React from "react";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import { data } from "./Data";

import Link from "next/link";

export default function Projects() {
  return (
    <section className="mb-14">
      <div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="sm:text-5xl text-4xl font-semibold gradient-text Italicized-word">
            Projects
          </h1>
          <hr className="lg:w-[1200px] w-[300px] md:w-[700px] sm:w-[400px] border-t-2 border-neutral-400 my-8" />
        </div>
        <div className="max-w-5xl mx-auto px-8 flex justify-between flex-wrap flex-col items-center lg:flex-row  mb-10">
          {data.map((project, index) => (
            <Link href={project.link} key={index}>
              <div className="mb-10 border border-slate-500 sm:w-[430px] rounded-lg">
                <DirectionAwareHover
                  className="w-[428px] h-[250px]"
                  imageUrl={project.cover}
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-semibold gradient-text">
                      {project.title}
                    </h1>
                    <div className="flex items-center gap-3">
                      {project.tech.map((Icon, index) => (
                        <Icon key={index} className="h-6 w-6" />
                      ))}
                    </div>
                  </div>
                </DirectionAwareHover>
                <div className="p-4 flex flex-col gap-3">
                  <h1 className="text-3xl text-slate-400 font-semibold">
                    {project.title}
                  </h1>
                  <p className="text-[#ADB7BE]">{project.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
