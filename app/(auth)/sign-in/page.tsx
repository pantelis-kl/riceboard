"use client";
//import components
import Logo from "@/components/ui/Logo";
import TogglePassword from "@/components/ui/TogglePassword";
//import link
import Link from "next/link";
//import icons
import { Mail, Lock, Loader2, ArrowLeft, AlertCircle } from "lucide-react";
//import hooks
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
//import server actions
import { signIn } from "@/actions/auth/actions";

export default function SignIn() {
  const [open, setOpen] = useState(false);
  const [state,formAction]=useActionState(signIn,{errors:{}});

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
          Sign In
        </h1>
        <form
          className="flex flex-col gap-4 w-full text-left"
          noValidate
          action={formAction}
        >
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
            {state.errors.email && (
              <p
                role="alert"
                className="flex items-center gap-1.5 text-xs text-red-600 dark:text-red-400"
              >
                <AlertCircle className="size-3.5 shrink-0" />
                <span>{state.errors.email}</span>
              </p>
            )}
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
              <TogglePassword open={open} setOpen={setOpen}/>
            </div>
            {state.errors.password && (
              <p
                role="alert"
                className="flex items-center gap-1.5 text-xs text-red-600 dark:text-red-400"
              >
                <AlertCircle className="size-3.5 shrink-0" />
                <span>{state.errors.password}</span>
              </p>
            )}
            <Link
              href="/forgot-password"
              className="self-end text-xs text-(--text-secondary) hover:text-(--accent-primary) transition-colors focus-visible:outline-none focus-visible:underline"
            >
              Forgot password?
            </Link>
          </div>
          {state.errors.form && (
          <div
            role="alert"
            className="flex items-center justify-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-3.5 py-2.5 text-xs text-red-600 dark:text-red-400"
          >
            <AlertCircle className="size-4 shrink-0" />
            <span>{state.errors.form}</span>
          </div>
        )}
          <SubmitButton />
        </form>
        <p className="text-center text-xs text-(--text-secondary)">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="font-bold text-(--accent-primary) hover:underline focus-visible:outline-none focus-visible:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white bg-(--accent-primary) text-sm font-medium hover:opacity-90 transition-all shadow-sm active:scale-[0.97] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
    >
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          <span>Signing in...</span>
        </>
      ) : (
        "Sign In"
      )}
    </button>
  );
};