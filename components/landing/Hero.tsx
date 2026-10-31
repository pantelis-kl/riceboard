//import link
import Link from "next/link";
import SortCards from "./SortCards";

const features=[
    {id:1,name:'Dark theme',score:60},
    {id:2,name:'Export to CSV',score:53},
    {id:3,name:'Push notifications',score:48},
    {id:4,name:'Auto-save',score:37},
    {id:5,name:'Drag & Drop',score:33}
]

export default function Hero() {
    
  return (
    <section className="relative flex flex-col justify-start items-center w-full min-h-[calc(100vh-4rem)] px-4 lg:px-8 py-16 overflow-hidden bg-(--bg-primary)">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-500/10 dark:bg-purple-600/15 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      </div>
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="flex flex-col gap-6 text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-(--text-primary) leading-[1.15]">
            Turn opinions into a{" "}
            <span className="inline-block text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-indigo-400">
              ranked roadmap
            </span>
          </h1>
          <p className="text-base sm:text-lg text-(--text-secondary) max-w-xl leading-relaxed">
            Upload your feature list, score it together live with RICE, and let
            AI surface where your team disagrees.
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <div
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-(--border-color) bg-(--bg-surface) text-sm font-medium text-(--text-primary) shadow-sm hover:border-purple-500/50 transition-colors cursor-default"
              title="Reach: How many users will this impact per period?"
            >
              <span className="font-bold text-purple-500">R</span>each
            </div>
            <div
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-(--border-color) bg-(--bg-surface) text-sm font-medium text-(--text-primary) shadow-sm hover:border-purple-500/50 transition-colors cursor-default"
              title="Impact: How much will this increase user success?"
            >
              <span className="font-bold text-purple-500">I</span>mpact
            </div>
            <div
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-(--border-color) bg-(--bg-surface) text-sm font-medium text-(--text-primary) shadow-sm hover:border-purple-500/50 transition-colors cursor-default"
              title="Confidence: How sure are you about your estimates?"
            >
              <span className="font-bold text-purple-500">C</span>onfidence
            </div>
            <div
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-(--border-color) bg-(--bg-surface) text-sm font-medium text-(--text-primary) shadow-sm hover:border-purple-500/50 transition-colors cursor-default"
              title="Effort: How manymonths will it take?"
            >
              <span className="font-bold text-purple-500">E</span>ffort
            </div>
          </div>
          <div className="flex items-center gap-3 mt-5">
            <Link
            href="/sign-up"
            className="px-6 py-3.5 rounded-xl bg-(--accent-primary) text-white font-medium text-center hover:opacity-90 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
            >
            Get Started
            </Link>
            <Link
            href="/demo"
            className="px-6 py-3.5 rounded-xl border border-(--border-color) bg-(--bg-surface) text-(--text-primary) font-medium text-center hover:bg-(--border-color)/20 transition-all shadow-sm active:scale-[0.98]"
            >
            Try it out
            </Link>
        </div>
        </div>
        <SortCards features={features}/>
      </div>
    </section>
  );
}
