import Image from "next/image";
import Sparkles from "@/components/svgs/sparkles.svg";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image
        src={Sparkles}
        height={500}
        width={500}
        color="red"
        alt="welcom"
      ></Image>
    </div>
  );
}
