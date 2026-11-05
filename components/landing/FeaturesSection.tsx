"use client";
//import features data
import { features } from "@/data/features";
import { useRef, useState, type WheelEvent } from "react";

export default function FeaturesSection() {
  const [active, setActive] = useState(0);
  const lastWheelAt = useRef(0);

const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
  if (window.innerWidth < 1024) return;
  
  const direction = Math.sign(event.deltaY);
  if (!direction) return;

  if (
    (direction > 0 && active === features.length - 1) ||
    (direction < 0 && active === 0)
  ) {
    return;
  }

  event.preventDefault();

  const now = Date.now();
  if (now - lastWheelAt.current < 450) return;

  lastWheelAt.current = now;
  setActive((current) =>
    Math.max(0, Math.min(features.length - 1, current + direction))
  );
};

  return (
    <section
      id="features"
      className="flex flex-col items-center gap-10 w-full px-4 py-10"
    >
      <div className="flex flex-col items-center text-center gap-3.5 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-(--text-primary) leading-tight">
          Features
        </h2>
        <p className="text-base sm:text-lg text-(--text-secondary) max-w-xl font-normal leading-relaxed">
          Bring clarity to chaotic planning. Vote on features live, map impact
          versus effort, and let AI surface alignment gaps before you build.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" onWheel={handleWheel}>
        <div className="flex flex-row lg:flex-col gap-2 lg:gap-0 overflow-x-auto scrollbar-none  lg:overflow-visible mask-[linear-gradient(to_right,#000_85%,transparent)] lg:mask-none border-b border-(--border-color) lg:border-b-0 ">
          {features.map((f, index) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActive(index)}
              className={`group flex gap-3 p-3 text-left cursor-pointer shrink-0 lg:shrink lg:w-full border-b-2 lg:border-b-0 lg:border-l-2 transition-colors duration-300 ${
                active === index
                  ? "border-(--accent-primary)"
                  : "border-transparent lg:border-(--border-color)"
              }`}
            >
              <span className="flex flex-col">
                <span className="font-semibold text-sm lg:text-lg text-(--text-primary) whitespace-nowrap lg:whitespace-normal">
                  {f.feature}
                </span>

                <span
                  className={`hidden lg:grid transition-[grid-template-rows,opacity] duration-300 group-hover:grid-rows-[1fr] group-hover:opacity-100 ${
                    active === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <span className="overflow-hidden">
                    <span className="block pt-1 text-xs text-(--text-secondary)">
                      {f.description}
                    </span>
                  </span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
