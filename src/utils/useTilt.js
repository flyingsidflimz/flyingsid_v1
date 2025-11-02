import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

export default function useTilt(selector = "[data-tilt]") {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    if (!els) return;
    VanillaTilt.init(els, { max: 12, speed: 450, glare: true, "max-glare": 0.25, scale: 1.02 });
    return () => {
      els.forEach(el => el.vanillaTilt && el.vanillaTilt.destroy());
    };
  }, [selector]);
}
