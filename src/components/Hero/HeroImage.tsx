import { FC } from "react";
import Image from "next/image";
import { Skeleton } from "@nextui-org/react";
import { useImageLoader } from "@/hooks/useImageLoader"; // Sesuaikan path
import clsx from "clsx";
import { fontJost } from "@/configs/fonts";
import HeroExperienceBadge from "./HeroExperienceBadge";

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
    <div className={clsx("hero__body opacity-0", fontJost.className)}>
      <HeroExperienceBadge yearOfExperience={yearOfExperience} />
      
      {loading && (
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
      )}
    </div>
  );
};

export default HeroImage;
