"use client";

import Welcome from "@/components/Welcome";
import { useRef } from "react";
import Announciation from "@/components/Announciation";
import JourneyToBeth from "@/components/JourneyToBeth";
import TheBirth from "@/components/TheBirth";

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
    </main>
  );
}
