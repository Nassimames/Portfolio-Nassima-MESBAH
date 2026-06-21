"use client";

import { useEffect, useState } from "react";
import { chapters } from "@/data/profile";

export function useActiveChapter(defaultId = "cover") {
  const [active, setActive] = useState(defaultId);

  useEffect(() => {
    const ids = chapters.map((c) => c.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}
