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
    <div
      ref={containerRef}
      className={clsx(
        "max-w-[85rem] min-h-[100vh] flex w-full relative m-auto items-center"
      )}
    >
      <div className="w-full relative z-2 max-w-3xl">
        <HeroHeader title="MOCH AZMI ISKANDAR" subtitle="Full Stack Engineer">
          My name is Moch Azmi Iskandar, a 23-year-old who holds a{" "}
          {"bachelor's"}
          degree from Nusa Mandiri University. I majored in Information Systems
          (IS). In 2022, I received a scholarship as a finalist in the Students
          Competition of Innovation and Business. I am proficient in website
          development and programming languages such as (HTML, CSS, Tailwind
          CSS, JavaScript, TypeScript, ReactJS, NextJS, PHP, CodeIgniter,
          Laravel, MySQL), and more. After obtaining my certification as a
          Software Developer & Programmer in 2022, I have amassed total 5 years
          of experience in Full Stack Development. This includes over 2 years of
          professional work in the field, enhanced by 3 years of rich freelance
          experience, continuously advancing and refining my skills in the
          dynamic realm of technology.
        </HeroHeader>
      </div>
      <HeroImage
          alt="My Image"
          darkSrc="/assets/images/azmi-dark.png"
          lightSrc="/assets/images/azmi-light.png"
          yearOfExperience={5}
        />
      {/* <div className="hero__icon absolute right-6 top-72 lg:top-48 flex flex-col items-center h-full opacity-0">
        <SocialIcons />
        <div className="justify-center">
          <LineVertical stroke={strokeColor} />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
