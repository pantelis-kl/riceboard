import { howItWorks } from "@/data/howItWorks";
import CtaButtons from "./CtaButtons";
import PrimaryCta from "../ui/PrimaryCta";

export default function GetStartedSection() {
  return (
    <section
      id="how-it-works"
      className="relative isolate flex w-full flex-col items-center gap-10 px-4 py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 mask-[linear-gradient(to_bottom,transparent,#000_30%,#000_70%,transparent)]"
      >
        <div className="absolute left-1/2 top-1/2 h-100 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-600/15" />
      </div>

      <div className="flex flex-col items-center text-center gap-3.5 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-(--text-primary) leading-tight">
          How it works
        </h2>
        <p className="text-base sm:text-lg text-(--text-secondary) max-w-xl font-normal leading-relaxed">
          Upload your backlog, invite your team with a link, and get a ranking
          everyone can see.
        </p>
      </div>
      <ol className="relative max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8">
        <div
          aria-hidden="true"
          className="hidden md:block absolute left-[16.67%] right-[16.67%] top-8 border-t border-dashed border-(--text-secondary)/45"
        />

        {howItWorks.map((h, index) => {
          const isLast = index === howItWorks.length - 1;

          return (
            <li
              key={h.step}
              className="relative grid grid-cols-[3.25rem_minmax(0,1fr)] gap-3.5 md:flex md:flex-col md:items-center md:text-center"
            >
              <div className="flex flex-col items-center">
                <span className="relative z-10 flex size-13 lg:size-16 shrink-0 items-center justify-center rounded-full border border-(--border-color) bg-(--bg-surface) text-purple-500">
                  <h.icon className="size-7 lg:size-10" />
                </span>
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="my-1.5 w-px flex-1 min-h-5 border-l border-dashed border-(--text-secondary)/45 md:hidden"
                  />
                )}
              </div>

              <div
                className={`min-w-0 pt-2 lg:pt-3 ${isLast ? "pb-0" : "pb-6 lg:pb-0"}`}
              >
                <div className="flex items-center gap-1.5 md:justify-center">
                  <span className="font-mono text-xs font-semibold text-purple-400">
                    {h.step}
                  </span>
                  <h3 className="text-sm lg:text-base font-medium text-(--text-primary)">
                    {h.title}
                  </h3>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-(--text-secondary) lg:max-w-xs">
                  {h.text}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
      <PrimaryCta classname=""/>
    </section>
  );
}
