import Hero from "@/components/Hero";
import StarGrid from "@/components/StartGrid";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden min-h-[50vh]">
      <StarGrid />
      <Hero />
    </div>
  );
}
