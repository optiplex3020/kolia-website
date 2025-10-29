"use client";

import { useEffect } from "react";

export default function AnimationClassSetter() {
  useEffect(() => {
    const root = document.documentElement;
    // Gate animations; visible by default, then opt-in with a second class
    root.classList.add("has-animations");
    // Use double rAF to ensure the browser paints once before enabling animations
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        root.classList.add("animate-in");
      });
    });
    return () => {
      cancelAnimationFrame(id);
      root.classList.remove("animate-in");
      root.classList.remove("has-animations");
    };
  }, []);
  return null;
}
