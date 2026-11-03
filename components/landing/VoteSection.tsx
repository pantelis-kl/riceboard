import PrioritizeSliders from "./PrioritizeSliders";

export default function PrioritizeSection() {

  return (
    <section
      id="prioritize"
      className="flex flex-col items-center gap-10 w-full px-4 py-10"
    >
      <div className="flex flex-col items-center text-center gap-3.5 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-(--text-primary) leading-tight">
          See what’s{" "}
          <span className="bg-linear-to-r from-purple-500 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            worth building
          </span>
        </h2>
        <p className="text-base sm:text-lg text-(--text-secondary) max-w-xl font-normal leading-relaxed">
          Every feature plotted by impact and effort, so quick wins and time
          sinks stand out at a glance.
        </p>
      </div>
      <PrioritizeSliders/>
    </section>
  );
}
