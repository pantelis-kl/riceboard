"use client";
//import icons
import { Menu, X } from "lucide-react";
//import link
import Link from "next/link";
//import types and hooks
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
//import components
import CtaButtons from "./CtaButtons";

type LinksType = {
  href: string;
  name: string;
};

type HamburgerMenuProps={
    links:LinksType[],
    active:string | null;
    setActive: Dispatch<SetStateAction<string | null>>
}

export default function HamburgerMenu({ links,active,setActive }: HamburgerMenuProps) {
  const [open, setOpen] = useState(false);
  const mouseRef=useRef<HTMLDivElement>(null);
  
  useEffect(()=>{
    if(!open) return;

    const onEscape=(e:KeyboardEvent)=>{
      if(e.key==='Escape') setOpen(false)
    }
    const onOutsideClick=(e:MouseEvent)=>{
      if (mouseRef.current && !mouseRef.current.contains(e.target as Node)) setOpen(false);
    }
    
    addEventListener("keyup",onEscape);
    addEventListener("mouseup",onOutsideClick);
    return ()=>{
      removeEventListener("keyup",onEscape)
      removeEventListener("mouseup",onOutsideClick);
    };
  },[open])

  return (
    <div ref={mouseRef} className="flex lg:hidden ml-auto">
  <button 
    onClick={() => setOpen(!open)}
    aria-label="Toggle Navigation Menu"
    className="p-2 rounded-xl border border-(--border-color) text-(--text-primary) transition-colors"
  >
    {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
  </button>
  {open && (
    <div 
      className="flex flex-col gap-2 absolute bg-(--bg-surface) border-(--border-navbar) border text-[16px] top-full right-4 mt-2 w-72 md:w-96 max-w-[calc(100vw-2rem)] rounded-2xl p-4 shadow-xl backdrop-blur-xl z-50"
    >
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => {
            setActive(link.href);
            setOpen(false);
          }}
          className={`relative px-4 py-2.5 rounded-xl flex items-center ${
            active===link.href
              ? "text-(--text-primary) font-semibold bg-(--accent-primary)/20"
              : "text-(--text-primary)"
          }`}
        >
          <span
            className={`absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-(--accent-primary)
              ${active === link.href ? "opacity-100" : "opacity-0"}
            }`}
          />
          {link.name}
        </Link>
      ))}
      <hr className="border-(--border-color) my-1" />
      <CtaButtons/>
    </div>
  )}
</div>
  );
}
