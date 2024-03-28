import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import usePrefersReducedMotion from "./usePrefersReducedMotion";
import { useGSAP } from "@gsap/react";

export const useAnimatedHero = () => {
  const containerRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(".hero__heading, .hero__body, .hero__icon", { opacity: 1 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      tl.fromTo(
        ".hero__heading",
        { scale: 0.4 },
        { scale: 1, opacity: 1, duration: 1.5 }
      );

      tl.fromTo(
        ".hero__body",
        { y: 20, scale: 0.5 },
        { y: 0, opacity: 1, duration: 1.2, scale: 1 },
        "-=0.6"
      );

      tl.fromTo(
        ".hero__icon",
        { y: 20, scale: 0.5 },
        { y: 0, opacity: 1, duration: 1.2, scale: 1 },
        "-=0.6"
      );

      // tl.fromTo(
      //   ".hero__button",
      //   { scale: 1.5 },
      //   { scale: 1, opacity: 1, duration: 1.3 },
      //   "-=0.8"
      // );
      // tl.fromTo(
      //   ".hero__image",
      //   { y: 100 },
      //   { y: 0, opacity: 1, duration: 1.3 },
      //   "+=0.3"
      // );
      // tl.fromTo(
      //   ".hero__glow",
      //   { scale: 0.5 },
      //   { scale: 1, opacity: 1, duration: 1.8 },
      //   "-=1"
      // );
    },
    { scope: containerRef }
  );
  return containerRef;
};
