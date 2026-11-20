//import components
import PrioritizeSliders from "./PrioritizeSliders";

export default function PrioritizeSection() {

  return (
    <section
      id="prioritize"
      className="relative w-full scroll-mt-[5.5rem] px-[clamp(1.25rem,5vw,4rem)] py-[clamp(4.5rem,8vw,7.5rem)]"
    >
      <div className="mx-auto w-full max-w-[76rem]">
        <div className="mx-auto mb-14 flex max-w-[46rem] flex-col items-center gap-4 text-center" data-reveal>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] font-bold tracking-[-0.055em] text-(--text-primary)">
            See what’s{" "}
            <span className="text-(--accent-primary)">worth building.</span>
          </h2>
          <p className="max-w-[38rem] text-[clamp(1rem,1.4vw,1.125rem)] leading-[1.75] text-(--text-secondary)">
            Every feature plotted by impact and effort, so quick wins and time
            sinks stand out at a glance.
          </p>
        </div>
        <div
          className="rounded-3xl border border-[color-mix(in_srgb,var(--border-color)_82%,var(--accent-primary))] bg-[linear-gradient(145deg,color-mix(in_srgb,var(--accent-primary)_4%,transparent),transparent_38%),var(--bg-surface)] p-3 shadow-[0_30px_90px_-50px_color-mix(in_srgb,var(--accent-primary)_35%,transparent)] sm:p-5 lg:p-8"
          data-reveal
        >
          <PrioritizeSliders />
        </div>
      </div>
    </section>
  );
}
