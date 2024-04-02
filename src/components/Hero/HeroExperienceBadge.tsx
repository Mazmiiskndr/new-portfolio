import { FC } from "react";
import clsx from "clsx";
import { fontJost } from "@/configs/fonts";

interface HeroExperienceBadgeProps {
  yearOfExperience: number;
}

const HeroExperienceBadge: FC<HeroExperienceBadgeProps> = ({
  yearOfExperience,
}) => {
  return (
    <div className="flex m-0 w-[250px] h-[80px] items-center absolute top-[340px] left-[45px] bg-white border border-black rounded-full text-black px-5 justify-center gap-x-3 z-20">
      <p className="text-3xl font-bold ml-3">{yearOfExperience}</p>{" "}
      <strong className="relative text-3xl font-bold mb-1 items-center justify-center text-yellow-400 dark:text-yellow-500">
        +
      </strong>{" "}
      <p className={clsx("text-base font-bold text-start leading-5")}>
        YEAR OF{" "}
        <strong className="text-yellow-400 dark:text-yellow-500">
          EXPERIENCE
        </strong>
      </p>
    </div>
  );
};

export default HeroExperienceBadge;
