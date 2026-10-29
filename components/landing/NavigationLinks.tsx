"use client";
//import Link
import Link from "next/link";

//import hooks
import { useState } from "react";

//import components
import HamburgerMenu from "./HamburgerMenu";

export default function NavigationLinks() {
  const [active, setActive] = useState(0);
  const links = [
    { href: "#live-demo", name: "Live demo" },
    { href: "#vote-simulator", name: "Vote simulator" },
    { href: "#features", name: "Features" },
    { href: "#how-it-works", name: "How it works" },
  ];
  return (
    <>
      <HamburgerMenu links={links} />
      <div className="hidden lg:flex flex-row gap-8 text-sm font-medium">
        {links.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setActive(index)}
            className={`relative py-1 transition-colors duration-200 ${
              active === index
                ? "text-(--text-primary) font-semibold"
                : "text-(--text-secondary) hover:text-(--text-primary)"
            } group`}
          >
            {link.name}
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-[#6d28d9] transition-all duration-300 ease-out ${
                active === index ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
