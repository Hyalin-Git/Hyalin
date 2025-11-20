"use client";

import { ChevronDown, Send } from "lucide-react";
import Button from "./ui/button";
import { isNotEmpty } from "@/utils/array";
import MegaMenu from "./MegaMenu";
import { useEffect, useState } from "react";
import Image from "next/image";

const navigations = [
  {
    name: "Accueil",
    href: "/",
  },
  {
    name: "À propos",
    href: "#a-propos",
  },
  {
    name: "Technologies",
    href: "#technologies",
    items: [
      { name: "React", href: "#react" },
      { name: "Next.js", href: "#nextjs" },
      { name: "Node.js & Express", href: "#nodejs-express" },
      { name: "Payload CMS", href: "#payload-cms" },
      { name: "Medusa.js", href: "#medusa-js" },
    ],
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Projets",
    href: "#projets",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // test
  return (
    <header
      className={`sticky top-0 ${
        isScrolled &&
        " bg-black/95 backdrop-blur-lg shadow-md z-30 transition-all duration-800"
      }`}
    >
      <nav
        className={`container px-0 lg:px-20 mx-auto py-4 flex items-center justify-between `}
      >
        <div className="flex items-center gap-1">
          <Image
            src={"/logo.png"}
            width={45}
            height={45}
            alt="Logo Hyalin"
            quality={90}
          />
          <span className="text-2xl font-bold text-[#00B54D] uppercase tracking-widest">
            Hyalin
          </span>
        </div>

        {/* Navigations */}
        <div className="flex space-x-12 text-sm">
          {/* test */}
          {navigations.map((nav, idx) => (
            <div className="relative" key={idx}>
              <a
                href={nav.href}
                className="relative flex items-center hover:text-green-400 hover:before:w-full  before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-green-400  before:transition-all before:duration-300 transition-all duration-250"
              >
                {nav.name}

                {isNotEmpty(nav.items || []) && (
                  <ChevronDown size={16} className="ml-2" />
                )}
              </a>

              {/* Dropdown menu */}
              {/* {isNotEmpty(nav.items || []) && (
                <MegaMenu items={nav.items || []} />
              )} */}
            </div>
          ))}
        </div>

        <Button variant="primary">
          <Send size={16} /> Me contacter
        </Button>
      </nav>
    </header>
  );
}
