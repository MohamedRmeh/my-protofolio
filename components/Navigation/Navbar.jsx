import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import Link from "next/link";

export default function Navbar() {
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
    <nav className="py-12 lg:px-44 md:px-28 px-4 common-background border-b">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h1 className="gradient-text sm:text-2xl text-lg uppercase Italicized-word">
            Mox Developer
          </h1>
        </Link>
        <div className="flex gap-5">
          {social.map((social, index) => {
            const Icon = social.Icon;
            return (
              <Link href={social.link} key={index} aria-label={social.label}>
                <Icon className="sm:w-6 sm:h-6 w-5 h-5 hover:scale-125 transition-all" />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
