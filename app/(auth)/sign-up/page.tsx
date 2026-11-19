"use client";
//import components
import Logo from "@/components/ui/Logo";
import PasswordRequirements from "@/components/ui/PasswordRequirements";
import SubmitButton from "@/components/ui/SubmitButton";
import TogglePassword from "@/components/ui/TogglePassword";
//import icons
import { ArrowLeft, Mail, User, Lock, LockKeyhole } from "lucide-react";
//import link
import Link from "next/link";
//import hooks
import { useState } from "react";

export default function SignUp() {

  const [open, setOpen] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [passwordText,setPasswordText]=useState<string>("")

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
                autoComplete="new-password"
                placeholder="Your password"
                onChange={e=>setPasswordText(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-(--border-color) bg-(--bg-primary) text-sm text-(--text-primary) placeholder:text-(--text-secondary)/50 focus:outline-none focus:border-(--accent-primary) transition-colors"
              />
              <TogglePassword open={open} setOpen={setOpen} />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            <label
              htmlFor="confirm_password"
              className="text-xs font-medium text-(--text-secondary)"
            >
              Confirm Password
            </label>
            <div className="relative flex items-center">
              <LockKeyhole className="pointer-events-none absolute left-3.5 size-4 text-(--text-secondary)" />
              <input
                id="confirm_password"
                name="confirm_password"
                type={openConfirm ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Confirm your password"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-(--border-color) bg-(--bg-primary) text-sm text-(--text-primary) placeholder:text-(--text-secondary)/50 focus:outline-none focus:border-(--accent-primary) transition-colors"
              />
              <TogglePassword open={openConfirm} setOpen={setOpenConfirm} />
            </div>
          </div>
          <PasswordRequirements passwordText={passwordText}/>
          <SubmitButton text="Sign Up" loadingText="Creating account ..."/>
        </form>
      </div>
    </div>
  );
}
