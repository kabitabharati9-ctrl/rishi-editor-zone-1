"use client";

import { useEffect } from "react";

export function PageEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    let observer: IntersectionObserver | undefined;
    let frame = 0;

    if (!prefersReducedMotion && "IntersectionObserver" in window) {
      root.dataset.motionReady = "true";
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
      );
      revealItems.forEach((item) => observer?.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    const updateCamera = () => {
      if (prefersReducedMotion) return;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY / 720, 1);
        root.style.setProperty("--camera-y", `${-window.scrollY * 0.075}px`);
        root.style.setProperty("--camera-tilt", `${progress * 1.1}deg`);
      });
    };

    window.addEventListener("scroll", updateCamera, { passive: true });
    updateCamera();

    return () => {
      window.removeEventListener("scroll", updateCamera);
      cancelAnimationFrame(frame);
      observer?.disconnect();
      delete root.dataset.motionReady;
      root.style.removeProperty("--camera-y");
      root.style.removeProperty("--camera-tilt");
    };
  }, []);

  return null;
}
