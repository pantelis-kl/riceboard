//import components
import Logo from "@/components/ui/Logo";
//import icons
import { ArrowLeft, User } from "lucide-react";
//import link
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="w-full max-w-[500px] flex flex-col gap-6 rounded-2xl border border-(--border-color) bg-(--bg-surface) p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-(--text-secondary) hover:text-(--text-primary) transition-colors"
        >
          <ArrowLeft className="size-3.5" />
          <span>Back to home</span>
        </Link>
        <Logo />
      </div>
      <div className="flex flex-col items-center gap-6 w-full">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center text-(--text-primary)">
          Sign Up
        </h1>
        <form className="flex flex-col gap-4 w-full text-left" noValidate>
          <div className="flex flex-col gap-1.5 w-full">
            <label
              htmlFor="full_name"
              className="text-xs font-medium text-(--text-secondary)"
            >
              Full Name
            </label>
            <div className="relative flex items-center">
              <User className="pointer-events-none absolute left-3.5 size-4 text-(--text-secondary)" />
              <input
                id="full_name"
                name="full_name"
                type="text"
                autoComplete="name"
                placeholder="John Doe"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-(--border-color) bg-(--bg-primary) text-sm text-(--text-primary) placeholder:text-(--text-secondary)/50 focus:outline-none focus:border-(--accent-primary) transition-colors"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
