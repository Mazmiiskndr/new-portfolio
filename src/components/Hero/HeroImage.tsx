import { FC } from "react";
import Image from "next/image";
import { Skeleton } from "@nextui-org/react";
import { useImageLoader } from "@/hooks/useImageLoader"; // Sesuaikan path
import clsx from "clsx";
import { fontJost } from "@/configs/fonts";

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
      {/* TODO: KETIKA MOBILE HARUS DIATUR LAGI */}
      <div className="flex m-0 w-[250px] h-[80px] items-center absolute top-[450px] -left-[85px] bg-white border border-black rounded-full text-black px-5 justify-center gap-x-3">
        <p className="text-3xl font-bold ml-3">{yearOfExperience}</p>{" "}
        <strong className="relative text-3xl font-bold mb-1 items-center justify-center text-[#ffd057]">
          +
        </strong>{" "}
        <p className={clsx("text-base font-bold text-start leading-5")}>
          YEAR OF <strong className="text-[#ffd057]">EXPERIENCE</strong>
        </p>
      </div>
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
          className={""}
          onLoad={handleLoad}
          style={{ width: "auto", height: "auto" }}
          priority
        />
      )}
    </div>
  );
};

export default HeroImage;
