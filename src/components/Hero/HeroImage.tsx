import { FC } from "react";
import Image from "next/image";
import { Skeleton } from "@nextui-org/react";
import { useImageLoader } from "@/hooks/useImageLoader"; // Sesuaikan path
import clsx from "clsx";
import { fontJost } from "@/configs/fonts";
import HeroExperienceBadge from "./HeroExperienceBadge";
import { BgImage } from "../icons";

interface HeroImageProps {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  yearOfExperience: number;
}

const HeroImage: FC<HeroImageProps> = ({
  lightSrc,
  darkSrc,
  alt,
  yearOfExperience,
}) => {
  const { imageSrc, loading, handleLoad } = useImageLoader({
    lightSrc,
    darkSrc,
  });

  return (
    <div className={clsx("hero__body opacity-0 absolute top-40 -right-5 w-full bottom-auto h-full max-w-2xl max-h-[800px] ", fontJost.className)}>
      <HeroExperienceBadge yearOfExperience={yearOfExperience} />
        <Image
          width={1000}
          height={1000}
          alt={alt}
          src={"/assets/images/profile-azmi.png"}
          quality={100}
          className={"object-cover rounded-[380px] w-full h-full left-40 absolute -top-[6rem] z-10"}
          style={{ width: "550px", height: "auto" }}
          onLoad={handleLoad}
          priority
        />
        <div className="w-[500px] h-[500px] absolute rounded-full bg-[#29a587] right-0 top-10 -z-10 bg-no-repeat bg-center bg-contain shadow-xl"/>
        {/* <BgImage className="absolute inset-0 -z-10 left-0 top-0 bg-no-repeat bg-center bg-contain" /> */}
      {/* {loading && (
        <Skeleton className="flex rounded-full w-[600px] h-[650px]" />
      )}
      {imageSrc && (
        <Image
          width={600}
          height={800}
          alt={alt}
          src={imageSrc}
          quality={100}
          className={"w-auto h-auto"}
          style={{ width: "auto", height: "auto" }}
          onLoad={handleLoad}
          priority
        />
      )} */}
    </div>
  );
};

export default HeroImage;
