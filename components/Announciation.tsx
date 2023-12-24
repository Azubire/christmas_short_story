import Image from "next/image";
import tree from "@/assets/christmas-0.svg";
import lt from "@/assets/animation-1.json";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LottieScroll from "./LottieScroll";
import LottieLoop from "./LottieLoop";
import ct from "@/assets/animation-1.json";

const Announciation = () => {
  const container = useRef(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    // gsap.registerPlugin(ScrollTrigger);

    tl.current = gsap
      .timeline({ repeat: -1, yoyo: true, ease: "power2.inOut" })
      .from(".annouce", { x: 0 })
      .to(".annouce", { x: 100, duration: 5, ease: "power2.inOut" });
  });
  return (
    <>
      <div ref={container} className="bg-gradient-to-t from-gray-800 mt-20">
        <div className="grid sm:grid-cols-2 justify-center items-center px-4 sm:px-10">
          <div>
            <div className="mx-auto mb-10 p-5 bg-gradient-to-br from-rose-500 shadow-xl shadow-white  rounded-lg  w-[90%] h-fit  border first-letter:text-6xl mt-20">
              <h1 className="flex items-center justify-between text-lg sm:text-3xl capitalize  text-white   font-extrabold text-center">
                <span>
                  <LottieLoop src={ct} className="w-[50px] h-[50px] " />
                </span>
                <span> Announciation</span>
                <span>
                  <LottieLoop src={ct} className="w-[50px] h-[50px] " />
                </span>
              </h1>
            </div>

            <h2 className="text-justify text-lg sm:text-2xl text-white   font-extrabold ">
              As the story begins, the angel Gabriel visits Mary in the town of
              Nazareth. Fear not, Mary, for you have found favor with God, he
              says, announcing the miraculous birth that will change the course
              of history.
            </h2>
          </div>
          <div>
            <Image src={tree} alt="" className=" h-[400px] w-auto annouce" />
          </div>
        </div>
        <div className="mx-auto mb-5 p-5 bg-gradient-to-br from-rose-500 shadow-xl shadow-white  rounded-lg  w-[90%] h-fit sm:w-1/2 sm:h-fit border first-letter:text-6xl mt-20">
          <h1 className="text-lg sm:text-3xl capitalize  text-white   font-extrabold text-center">
            Let&apos;s continue the story
          </h1>
        </div>

        <LottieScroll src={lt} className="sm:h-[500px]" />
      </div>
    </>
  );
};

export default Announciation;
