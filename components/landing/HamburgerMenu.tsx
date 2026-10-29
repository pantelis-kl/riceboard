"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type LinksType={
    href:string;
    name:string;
}

export default function HamburgerMenu({links}:{links:LinksType[]}){

    const [active,setActive]=useState(0);
    const [open,setOpen]=useState(false);

    return(
        <div
        className="flex lg:hidden flex-col ml-auto"
        >
            <button
            onClick={()=>setOpen(!open)}
            >
                <Menu/>
            </button>
            {open && links.map((link, index) => (
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
    )
}