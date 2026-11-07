"use client";
//import features data
import { features, FeaturesType } from "@/data/features";
//import hooks
import { useEffect, useRef, useState } from "react";
//import components
import UploadDemo from "./UploadDemo";
import SortCards from "./SortCards";
//import from motion
import { AnimatePresence, motion } from "motion/react";

const components:Record<string, React.ReactNode>={
    upload:<UploadDemo/>,
    ranking:<SortCards/>,
}

export default function FeaturesSection() {
  const [active, setActive] = useState<FeaturesType["component"]>(
    features[0].component,
  );
  const activeRef = useRef(0);
  const lastWheelAt = useRef(0);
  const featureListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const featureList = featureListRef.current;
    if (!featureList) return;

    const handleWheel = (event: WheelEvent) => {
      if (window.innerWidth < 1024) return;

      const direction = Math.sign(event.deltaY);
      if (!direction) return;

      const current = activeRef.current;
      if (
        (direction < 0 && current === 0) ||
        (direction > 0 && current === features.length - 1)
      ) {
        return;
      }

      event.preventDefault();

      const now = Date.now();
      if (now - lastWheelAt.current < 450) return;

      lastWheelAt.current = now;
      const next = current + direction;
      activeRef.current = next;
      setActive(features[next].component);
    };

    featureList.addEventListener("wheel", handleWheel, { passive: false });
    return () => featureList.removeEventListener("wheel", handleWheel);
  }, []);

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:h-120 xl:w-6xl">
        <div
          ref={featureListRef}
          className="flex flex-row lg:min-h-0 w-full lg:flex-col self-center gap-1 lg:gap-0 overflow-x-auto scrollbar-none lg:overflow-y-auto mask-[linear-gradient(to_right,#000_85%,transparent)] lg:mask-none border-b border-(--border-color) lg:border-b-0"
        >
          {features.map((f, index) => (
            <button
              key={f.id}
              type="button"
              onClick={() => {
                activeRef.current = index;
                setActive(f.component);
              }}
              className={`group flex gap-3 p-3 lg:p-5 text-left cursor-pointer shrink-0 lg:shrink lg:w-full border-b-2 lg:border-b-0 lg:border-l-2 transition-colors duration-300 ${
                active === f.component
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
                    active === f.component
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
        <div className="flex flex-col items-center justify-start w-full p-6 min-h-48 lg:min-h-0 lg:h-full">
          <h2 className="text-lg font-semibold text-(--text-primary) tracking-tight mb-2">
            {features[activeRef.current].feature}
          </h2>
          <p className="text-sm text-(--text-secondary) leading-relaxed">
            {features[activeRef.current].text}
          </p>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={features[activeRef.current].id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="mt-3"
              >
                {active && components[active]}
              </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
