"use client";
//import components
import Logo from "../ui/Logo";
import HamburgerMenu from "./HamburgerMenu";
import NavigationLinks from "./NavigationLinks";
import Theme from "../ui/Theme";
import CtaButtons from "./CtaButtons";
import { useActiveHref } from "@/hooks/useActiveHref";

const links = [
  { href: "#live-demo", name: "Live demo" },
  { href: "#prioritize", name: "Prioritize" },
  { href: "#features", name: "Features" },
  { href: "#how-it-works", name: "How it works" },
];

const hrefs=links.map(l=>l.href);

export default function NavigationBar() {
  
  const [active, setActive] = useActiveHref(hrefs)

  return (
    <header
      className="flex items-center justify-between w-full backdrop-blur-md p-3 lg:p-4 sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "var(--bg-navbar)",
        borderColor: "var(--border-navbar)",
      }}
    >
      <Logo />
      <NavigationLinks links={links} active={active} setActive={setActive} />
      <div className="lg:flex hidden flex-row gap-4 items-center">
        <CtaButtons/>
        <Theme />
      </div>
      <div
      className="lg:hidden flex items-center absolute right-2 gap-0.5 md:gap-1.5"
      >
        <Theme/>
        <HamburgerMenu links={links} active={active} setActive={setActive} />
      </div>
    </header>
  );
}
