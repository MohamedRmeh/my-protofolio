import React from 'react'
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import Link from 'next/link'
export default function Footer () {
  const social = [
    {
      link: "/",
      label: "github",
      Icon: SiGithub,
    },
    {
      link: "/",
      label: "linkedin",
      Icon: SiLinkedin,
    },
    {
      link: "/",
      label: "instagram",
      Icon: SiInstagram,
    },
  ];
  return (
    <footer className='p-10 flex flex-col items-center gap-8'>
      <hr className="lg:w-[1200px] w-[300px] md:w-[700px] sm:w-[400px] border-t-2 border-neutral-400" />
       <Link href="/">
          <h1 className="gradient-text sm:text-2xl text-lg uppercase Italicized-word">
            Mo Developer
          </h1>
        </Link>
      <div className='flex justify-center gap-5'>
      {social.map((social, index) => {
            const Icon = social.Icon;
            return (
              <Link href={social.link} key={index} aria-label={social.label}>
                <Icon className="sm:w-6 sm:h-6 w-5 h-5 hover:scale-125 transition-all" />
              </Link>
            );
          })}
      </div>
    </footer>
  )
}