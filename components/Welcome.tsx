"use client";
import Image from "next/image";
import img from "@/assets/christmas-2.jpg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ctree from "@/assets/christmas-tree.svg";

const Welcome = () => {
  const container = useRef(null);
  const tl = useRef();
  useGSAP(() => {
    gsap.from(".card", { y: -100, duration: 2, yoyo: true });
  }, []);

  return (
    <div className=" justify-center items-center " ref={container}>
      <div className="absolute top-[18%] sm:top-[10%] left-1/2 -translate-x-1/2  p-5 bg-gradient-to-br from-rose-500  rounded-lg  w-[90%] h-fit sm:w-1/2 sm:h-fit border ">
        <h1 className="text-lg sm:text-3xl text-white   font-extrabold text-center">
          The Christmas story
        </h1>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 sm:p-10 bg-gradient-to-br from-rose-500 to-blue-500 rounded-lg shadow-xl shadow-white  w-[90%] h-fit sm:w-fit sm:h-fit border card ">
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
