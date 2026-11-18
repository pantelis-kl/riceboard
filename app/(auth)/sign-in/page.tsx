//import components
import Logo from "@/components/ui/Logo";
//import link
import Link from "next/link";
//import icons
import {Mail} from "lucide-react";

export default function SignIn() {
  return (
    <div className="w-full max-w-[500px] flex flex-col gap-8 sm:gap-10 rounded-2xl border border-(--border-color) bg-(--bg-surface) p-6 sm:p-8 shadow-sm">
      <Link href="/" aria-label="Back to home">
        <Logo />
      </Link>
      <div className="flex flex-col items-center gap-6 w-full">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center text-(--text-primary)">
          Sign In
        </h1>
        <form className="flex flex-col gap-4 w-full text-left" noValidate>
          <div className="flex flex-col gap-1.5 w-full">
            <label
              htmlFor="email"
              className="text-xs font-medium text-(--text-secondary)"
            >
              Email
            </label>
            <div className="relative flex items-center">
                <Mail className="pointer-events-none absolute left-3.5 size-4 text-(--text-secondary)" />
  <input
    id="email"
    name="email"
    type="email"
    autoComplete="email"
    placeholder="you@example.com"
    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-(--border-color) bg-(--bg-primary) text-sm text-(--text-primary) placeholder:text-(--text-secondary)/50 focus:outline-none focus:border-(--accent-primary) transition-colors"
  />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
