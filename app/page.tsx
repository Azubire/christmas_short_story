"use client";

import Welcome from "@/components/Welcome";
import { useRef } from "react";
import Announciation from "@/components/Announciation";
import JourneyToBeth from "@/components/JourneyToBeth";
import TheBirth from "@/components/TheBirth";
import WiseMen from "@/components/WiseMen";
import ToEgypt from "@/components/ToEgypt";
import Return from "@/components/Return";
import Conclusion from "@/components/Conclusion";

export default function Home() {
  const container = useRef(null);
  // const tl = useRef<gsap.core.Timeline | null>(null);

  return (
    <main
      ref={container}
      className="bg-gradient-to-br from-rose-500 to-blue-500   overflow-hidden"
    >
      {/* <Image src={ctree} alt="" className=" h-screen  img" /> */}
      <Welcome />
      <Announciation />
      <JourneyToBeth />
      <TheBirth />
      <WiseMen />
      <ToEgypt />
      <Return />
      <Conclusion />
      <div className="mx-auto mb-10 p-5 bg-white shadow-xl shadow-white   w-full h-fit sm:h-fit border ">
        <h1 className="flex flex-col items-center justify-between  bo">
          <span className="text-lg sm:text-3xl capitalize  text-blue-500   font-extrabold text-center">
            {" "}
            Made with love by Azubire 😎
          </span>
          <span> (azubirepeter@gmail.com) | +23324212412</span>
        </h1>
      </div>
    </main>
  );
}
