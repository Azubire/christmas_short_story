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
      .to(".annouce", { x: 800, duration: 20, ease: "power2.inOut" });
    tl.current = gsap
      .timeline({ repeat: -1, yoyo: true, ease: "power2.inOut" })
      .from(".annou", { x: 0 })
      .to(".annou", { x: 200, duration: 20, ease: "power2.inOut" });
  });
  return (
    <>
      <div ref={container} className="bg-gradient-to-t from-gray-800 mt-20">
        <div>
          <Image
            src={tree}
            alt=""
            className="hidden sm:block h-[400px] w-auto annouce"
          />
          <Image src={tree} alt="" className=" w-auto annou sm:hidden" />
        </div>
        <div className="mx-auto  mb-10 p-5 bg-white shadow-xl shadow-white  rounded-lg  w-[90%] h-fit sm:w-1/2 sm:h-fit border ">
          <h1 className="flex items-center justify-between text-lg sm:text-3xl capitalize  text-rose-500   font-extrabold text-center">
            <span>
              <LottieLoop src={ct} className="w-[50px] h-[50px] " />
            </span>
            <span> Announciation</span>
            <span>
              <LottieLoop src={ct} className="w-[50px] h-[50px] " />
            </span>
          </h1>
        </div>
        <div className=" mx-auto p-5 sm:p-10 bg-gradient-to-t from-gray-700 rounded-lg shadow-xl shadow-white  w-[90%] h-fit  border ">
          <h1 className="text-lg sm:text-3xl text-white   font-extrabold text-justify">
            As the story begins, the angel Gabriel visits Mary in the town of
            Nazareth. Fear not, Mary, for you have found favor with God, he
            says, announcing the miraculous birth that will change the course of
            history.
          </h1>

          <div className="text-center mt-10">
            <button
              type="button"
              className="border borde-white font-extrabold w-full text-white px-4 py-2  rounded-full"
            >
              Next is the journey 👇
            </button>
          </div>
        </div>

        <LottieScroll src={lt} className="sm:h-[500px] my-20" />
      </div>
    </>
  );
};

export default Announciation;
