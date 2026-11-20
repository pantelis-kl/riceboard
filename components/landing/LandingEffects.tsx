"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function LandingEffects({ children }: { children: ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let dispose: (() => void) | undefined;
    const setupTimer = window.setTimeout(() => {
      const content = contentRef.current;
      if (!content) return;

      const lenis = new Lenis({
        anchors: true,
        prevent: (node) => node.closest("[data-lenis-prevent]") !== null,
      });

      lenis.on("scroll", ScrollTrigger.update);

      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      const context = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-reveal]", content).forEach((item) => {
          gsap.fromTo(
            item,
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 88%",
                once: true,
              },
            },
          );
        });
      }, content);

      ScrollTrigger.refresh();

      dispose = () => {
        context.revert();
        gsap.ticker.remove(tick);
        gsap.ticker.lagSmoothing(500, 33);
        lenis.destroy();
      };
    }, 250);

    return () => {
      window.clearTimeout(setupTimer);
      dispose?.();
    };
  }, []);

  return <div ref={contentRef}>{children}</div>;
}
