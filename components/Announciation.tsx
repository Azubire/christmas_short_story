import Image from "next/image";
import tree from "@/assets/christmas-0.svg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Animation from "./LottieAnimation";

const Announciation = () => {
  const container = useRef(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    console.log("should run once");
    tl.current = gsap
      .timeline({ repeat: -1, yoyo: true })
      .from(".annouce", { x: 0 })
      .to(".annouce", { x: 100, duration: 5, ease: "power2.inOut" })
      .to(".annouce", { x: -100, duration: 5, ease: "power2.inOut" });
  });
  return (
    <>
      <div
        ref={container}
        className="bg-gradient-to-t from-gray-800 text-lg sm:text-3xl text-white   font-extrabold text-center"
      >
        <div className="grid sm:grid-cols-2 justify-center items-center px-4 sm:px-10">
          <div>
            <Image src={tree} alt="" className=" h-[400px] w-auto annouce" />
          </div>
          <div>
            <p className="text-green-400 mb-5 underline first-letter:text-6xl">
              1. Announciation
            </p>
            <h2 className="text-justify">
              As the story begins, the angel Gabriel visits Mary in the town of
              Nazareth. Fear not, Mary, for you have found favor with God, he
              says, announcing the miraculous birth that will change the course
              of history.
            </h2>
          </div>
        </div>
        <Animation />
      </div>
    </>
  );
};

export default Announciation;
