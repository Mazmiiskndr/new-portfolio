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
    <div
      className={clsx(
        "flex flex-col gap-y-3 max-w-2xl lg:max-w-3xl hero__heading opacity-0",
        fontJost.className
      )}
    >
      <h1 className="text-5xl lg:text-6xl font-bold text-center text-white lg:text-start titles">
        <span className="text-[#ffd057]">{firstWord}</span>{" "}
        <span className="text-white">{restOfTitleText}</span>.
      </h1>
      <h4 className="text-xl md:text-2xl font-base text-default-600">
        I am{" "}
        <span className={clsx("text-3xl font-bold", fontCaveat.className)}>
          {subtitle}
        </span>
      </h4>
      <div className="mt-5">
        {children}
      </div>
      <div className="flex gap-x-3">
        <Button
          radius="sm"
          color="primary"
          size="md"
          startContent={<FaDownload />}
        >
          Download CV
        </Button>
        <Button
          radius="sm"
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
