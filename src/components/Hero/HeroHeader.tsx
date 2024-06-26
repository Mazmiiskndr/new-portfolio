import { fontCaveat, fontJost } from "@/configs/fonts";
import { Button } from "@nextui-org/button";
import clsx from "clsx";
import { FC } from "react";
import { FaDownload } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";

interface HeroHeaderProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

const HeroHeader: FC<HeroHeaderProps> = ({
  title = "MOCH AZMI ISKANDAR",
  subtitle = "Full Stack Engineer",
  children,
}) => {
  const [firstWord, ...restOfTitle] = title.split(" ");
  const restOfTitleText = restOfTitle.join(" ");
  return (
    <div className={clsx("hero__heading relative mb-40 opacity-0", fontJost.className)}> 
      <h1 className="text-5xl lg:text-6xl font-bold titles">
        <span className="text-yellow-400 dark:text-yellow-500">
          {firstWord}
        </span>{" "}
        <span className="text-white dark:text-black">{restOfTitleText}</span>
      </h1>
      <h4 className="text-xl md:text-2xl mt-2 font-base text-default-600">
        I am{" "}
        <span className={clsx("text-3xl font-bold", fontCaveat.className)}>
          {subtitle}
        </span>
      </h4>
      <div className="mt-10 text-base font-medium">{children}</div>
      <div className="flex gap-x-3 mt-5">
        <Button
          radius="lg"
          color="warning"
          size="md"
          startContent={<FaDownload />}
        >
          Download CV
        </Button>
        <Button
          radius="lg"
          color="default"
          size="md"
          startContent={<FaSquarePhone />}
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default HeroHeader;
