"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/app/utils/motion";

export default function Hero() {
  const handleContactClick = () => {
    // توجيه المستخدم إلى رابط واتساب عند النقر على الزر
    window.open('https://wa.me/+963995871868', '_blank');
  };
  return (
    <motion.section
      className="borde mb-14 px-12 py-10 flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between items-center common-background"
      initial="hidden"
      animate="visible"
    >
      <div className="lg:w-1/2 flex flex-col gap-8 text-center lg:text-start">
        <div className="flex flex-col gap-3">
          <motion.h1
            variants={slideInFromTop}
            className="tracking-[5px] text-sm text-[#ADB7BE] opacity-70 uppercase"
          >
            Best services
          </motion.h1>

          <motion.h1
            className="uppercse lg:text-7xl text-4xl font-bold "
            variants={slideInFromLeft(0)}
          >
            Hi It's <span className="gradient-text">Mohamed</span>{" "}
          </motion.h1>

          <motion.span
            className=" lg:text-5xl text-2xl font-bold"
            variants={slideInFromLeft(0.2)}
          >
            I'am a {""}
            <span className="gradient-text">
              <TypeAnimation
                sequence={["Software Engineer", 2500, "Web Developer", 2500]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.span>
        </div>
        <motion.p
          className="text-[#ADB7CE] lg:text-lg text-sm lg:w-[350px] w-[320px]"
          variants={slideInFromLeft(0.3)}
        >
          I am a full stack developer. I use the latest technologies in the
          software market and have more than 3 years of experience. Contact me
          to buy the best service.
        </motion.p>
        <motion.button
        onClick={handleContactClick}
          className="inline-flex lg:w-fit h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors uppercase focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          variants={slideInFromLeft(0.5)}
        >
          contact with me
        </motion.button>
      </div>
      <motion.div
        className="img-background rounded-full sm:w-fit min-w-[360px]"
        variants={slideInFromRight(0.6)}
      >
        <Image
          className=""
          src="/icons/mainIconsdark.svg"
          width={540}
          height={500}
          alt="Hero"
        />
      </motion.div>
    </motion.section>
  );
}
