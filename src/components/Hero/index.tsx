"use client";

import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FC, useEffect, useRef, useState } from "react";
import StarGrid from "@/components/StartGrid";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { LineVertical } from "../icons";
import clsx from "clsx";
import HeroHeader from "./HeroHeader";
import HeroImage from "./HeroImage";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [strokeColor, setStrokeColor] = useState("#141313");

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    if (mounted) {
      const newStrokeColor = currentTheme === "dark" ? "#fff" : "#141313";
      setStrokeColor(newStrokeColor);
    }
  }, [currentTheme, mounted]);

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
    { scope: container }
  );

  return (
    <div ref={container} className={clsx("relative w-full justify-between")}>
      <StarGrid />
      <div className="relative flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 gap-x-0 lg:gap-x-10 w-full justify-between px-10 xl:px-16 items-center mt-5 lg:mt-0">
        <HeroHeader title="MOCH AZMI ISKANDAR" subtitle="Full Stack Engineer">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et sint
          sequi praesentium aliquam optio error distinctio, quibusdam pariatur
          ea necessitatibus illo minima architecto quos, dolorem ex animi illum,
          deleniti consectetur! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Et sint sequi praesentium aliquam optio error
          distinctio, quibusdam pariatur ea necessitatibus illo minima
          architecto quos, dolorem ex animi illum, deleniti consectetur!
        </HeroHeader>
        <HeroImage
          alt="My Image"
          darkSrc="/assets/images/azmi-dark.png"
          lightSrc="/assets/images/azmi-light.png"
          yearOfExperience={5}
        />
      </div>
      <div className="hero__icon absolute right-6 top-72 lg:top-48 flex flex-col items-center h-full opacity-0">
        <div className="mb-3">
          <Button
            radius="full"
            color="default"
            variant="ghost"
            size="lg"
            isIconOnly
          >
            <FaInstagram size={25} />
          </Button>
        </div>
        <div className="mb-3">
          <Button
            radius="full"
            color="default"
            variant="ghost"
            size="lg"
            isIconOnly
          >
            <FaFacebookF size={23} />
          </Button>
        </div>
        <div className="mb-4">
          <Button
            radius="full"
            color="default"
            variant="ghost"
            size="lg"
            isIconOnly
          >
            <FaLinkedinIn size={23} />
          </Button>
        </div>
        <div className="justify-center">
          <LineVertical stroke={strokeColor} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
