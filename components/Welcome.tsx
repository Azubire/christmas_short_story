"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import lt from "@/assets/hangin-baloons.json";
import LottieLoop from "./LottieLoop";
import ct from "@/assets/animation-1.json";
import LottieScroll from "./LottieScroll";

const Welcome = () => {
  const container = useRef(null);
  useGSAP(() => {
    gsap.from(".card", { y: -100, duration: 2, yoyo: true });
  }, []);

  return (
    <div className="h-screen justify-center items-center " ref={container}>
      <LottieLoop src={lt} className=" absolute top-0 right-0 h-[500px]" />

      <LottieLoop
        src={lt}
        className=" absolute top-0 -left-24 h-[500px] hidden sm:block "
      />

      <div className="absolute top-5 sm:top-[10%] left-1/2 -translate-x-1/2  p-5 bg-gradient-to-br from-rose-500 shadow-xl shadow-white  rounded-lg  w-[90%] h-fit sm:w-1/2 sm:h-fit border ">
        <h1 className="flex items-center justify-between text-lg sm:text-3xl capitalize  text-white   font-extrabold text-center">
          <span>
            <LottieScroll src={ct} className="w-[50px] h-[50px] " />
          </span>
          <span> A short Christmas story</span>
          <span>
            <LottieScroll src={ct} className="w-[50px] h-[50px] " />
          </span>
        </h1>
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2  p-5 sm:p-10 bg-gradient-to-t from-green-700 rounded-lg shadow-xl shadow-white  w-[90%] h-fit sm:w-fit sm:h-fit border card ">
        <h1 className="text-lg sm:text-3xl text-white   font-extrabold text-justify">
          Welcome to the Interactive Christmas Story! Join us on a journey as we
          explore the timeless tale of the birth of Jesus Christ, a story of
          hope, love, and the arrival of a Savior.
        </h1>

        {/* <Image src={ctree} alt="" className="h-[100px] w-auto" /> */}
        <div className="text-center mt-10">
          <button
            type="button"
            className="border borde-white w-full text-white px-4 py-2  rounded-full"
          >
            Scroll down to continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
