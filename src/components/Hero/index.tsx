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
import SocialIcons from "./SocialIcons";
import { useAnimatedHero } from "@/hooks/useAnimatedHero";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  const containerRef = useAnimatedHero();
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

  return (
    <div ref={containerRef} className={clsx("relative w-full justify-between")}>
      <StarGrid />
      <div className="relative flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 gap-x-0 lg:gap-x-10 w-full lg:justify-between justify-center px-10 xl:px-16 items-center mt-10 lg:mt-0">
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
        <SocialIcons />
        <div className="justify-center">
          <LineVertical stroke={strokeColor} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
