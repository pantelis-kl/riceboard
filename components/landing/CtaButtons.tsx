//import link
import Link from "next/link";

export default function CtaButtons() {
  return (
    <div className="flex lg:flex-row flex-col gap-3 items-center">
      <Link
        href="/sign-in"
        className="w-full lg:w-20 text-[16px] lg:text-sm xl:text-[16px] xl:w-30 py-3 rounded-xl border border-(--border-color) bg-(--bg-surface) text-center text-(--text-primary) font-medium shadow-sm hover:border-(--accent-primary)/50 hover:bg-(--border-color)/20 transition-all"
      >
        Sign In
      </Link>
      <Link
        href="/sign-up"
        className="w-full lg:w-20 text-[16px] lg:text-sm xl:text-[16px] xl:w-30 py-3 rounded-xl bg-[#6d28d9] text-white text-center font-medium shadow-md hover:bg-[#5b21b6] transition-all"
       >
        Get Started
      </Link>
    </div>
  );
}
