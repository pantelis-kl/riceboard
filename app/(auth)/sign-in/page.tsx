"use client";
//import components
import Logo from "@/components/ui/Logo";
//import link
import Link from "next/link";
//import icons
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function SignIn() {
  const [open, setOpen] = useState(false);

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
          <div className="flex flex-col gap-1.5 w-full">
            <label
              htmlFor="password"
              className="text-xs font-medium text-(--text-secondary)"
            >
              Password
            </label>
            <div className="relative flex items-center">
              <Lock className="pointer-events-none absolute left-3.5 size-4 text-(--text-secondary)" />
              <input
                id="password"
                name="password"
                type={open ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Your password"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-(--border-color) bg-(--bg-primary) text-sm text-(--text-primary) placeholder:text-(--text-secondary)/50 focus:outline-none focus:border-(--accent-primary) transition-colors"
              />
              <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                aria-label={open ? "Hide password" : "Show password"}
                aria-pressed={open}
                className="absolute right-2.5 p-1.5 rounded-lg text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--bg-surface) transition-colors cursor-pointer"
              >
                {open ? (
                  <EyeOff className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </button>
            </div>
            <Link href="/forgot-password" className="self-end text-xs text-(--text-secondary) hover:text-(--accent-primary) transition-colors focus-visible:outline-none focus-visible:underline">
               Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
