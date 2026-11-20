//import link
import Link from "next/link"

export default function PrimaryCta({className}:{className:string}){

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <Link
              href="/sign-up"
              className="px-6 py-3.5 rounded-xl bg-(--landing-accent-fill) text-(--landing-on-accent) font-medium text-center hover:opacity-90 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              Get Started
            </Link>
            <Link
              href="/demo"
              className="px-6 py-3.5 rounded-xl border border-(--border-color) bg-(--bg-surface) text-(--text-primary) font-medium text-center hover:bg-(--border-color)/20 transition-all shadow-sm active:scale-[0.98]"
            >
              Try the demo
            </Link>
          </div>
    )
}