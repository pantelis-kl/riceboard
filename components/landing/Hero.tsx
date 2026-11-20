"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SortCards from "./SortCards";
import Chips from "../ui/Chips";
import PrimaryCta from "../ui/PrimaryCta";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set("[data-hero-item]", { opacity: 0, y: 24 });
      gsap.set("[data-hero-stage]", { opacity: 0, x: 36, scale: 0.96 });

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.75 },
      });

      timeline
        .to("[data-hero-item]", {
          opacity: 1,
          y: 0,
          stagger: 0.09,
        })
        .to(
          "[data-hero-stage]",
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
          },
          "-=0.45",
        );

      gsap.to("[data-hero-orb]", {
        y: 18,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[calc(100svh-72px)] w-full flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_75%_42%,color-mix(in_srgb,var(--accent-primary)_12%,transparent),transparent_31rem)] px-5 py-16 sm:px-8 lg:px-10 lg:py-20 dark:bg-[radial-gradient(circle_at_75%_42%,color-mix(in_srgb,var(--accent-primary)_14%,transparent),transparent_34rem)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-size-[52px_52px] opacity-30 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.42),transparent_82%)] dark:opacity-20"
      />
      <div
        data-hero-orb
        aria-hidden="true"
        className="pointer-events-none absolute left-[58%] top-[30%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[color-mix(in_srgb,var(--accent-primary)_22%,transparent)] blur-[90px] dark:bg-[color-mix(in_srgb,var(--accent-primary)_26%,transparent)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="flex max-w-2xl flex-col items-start gap-6 text-left">
          <h1
            data-hero-item
            className="text-[clamp(3rem,5.8vw,5.75rem)] font-black leading-[0.96] tracking-[-0.065em] text-(--text-primary)"
          >
            Turn opinions
            <br />
            into a{" "}
            <span className="bg-[linear-gradient(110deg,var(--accent-primary)_8%,var(--landing-accent-bright)_62%,var(--landing-accent-warm)_100%)] bg-clip-text text-transparent [filter:drop-shadow(0_12px_28px_color-mix(in_srgb,var(--accent-primary)_17%,transparent))]">
              roadmap.
            </span>
          </h1>

          <p
            data-hero-item
            className="max-w-xl text-base leading-7 text-(--text-secondary) sm:text-lg"
          >
            Upload your feature list, score it together live with RICE,
            and see where the whole team agrees.
          </p>

          <div data-hero-item>
            <Chips />
          </div>

          <div data-hero-item>
            <PrimaryCta className="mt-3" />
          </div>

          <p data-hero-item className="flex items-center gap-2 text-xs text-(--text-secondary)">
            <span className="flex -space-x-1.5" aria-hidden="true">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-(--bg-primary) bg-(--landing-accent-fill) text-[9px] font-bold text-(--landing-on-accent)">
                A
              </span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-(--bg-primary) bg-slate-500 text-[9px] font-bold text-white">
                M
              </span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-(--bg-primary) bg-(--landing-accent-warm) text-[9px] font-bold text-(--landing-on-accent)">
                J
              </span>
            </span>
            Built for teams that ship with intent
          </p>
        </div>

        <div
          data-hero-stage
          className="relative mx-auto w-full max-w-[680px] [transform:perspective(1200px)_rotateY(-2deg)]"
        >
          <div className="absolute inset-10 rounded-[2rem] bg-[color-mix(in_srgb,var(--accent-primary)_24%,transparent)] blur-[55px]" />
          <div className="relative rounded-[1.5rem] border border-(--border-color)/70 bg-(--bg-surface)/88 p-3 shadow-2xl backdrop-blur-xl sm:p-5">
            <div className="mb-4 flex items-center justify-between px-1">
              <span className="rounded-full border border-(--border-color) px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-(--text-secondary)">
                Live session
              </span>
            </div>
            <SortCards />
          </div>
        </div>
      </div>
    </section>
  );
}
