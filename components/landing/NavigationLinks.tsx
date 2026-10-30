"use client";
//import Link
import Link from "next/link";

//import types
import { Dispatch, SetStateAction } from "react";

type NavigationLinksProps = {
  links: LinksProps[];
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
};

type LinksProps = {
  href: string;
  name: string;
};

export default function NavigationLinks({
  links,
  active,
  setActive,
}: NavigationLinksProps) {
  return (
    <div className="hidden lg:flex p-2 flex-row gap-8 text-sm xl:text-[16px] font-medium">
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
            className={`absolute bottom-0 left-0 h-0.5 bg-(--accent-primary) transition-all duration-300 ease-out ${
              active === index ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </Link>
      ))}
    </div>
  );
}
