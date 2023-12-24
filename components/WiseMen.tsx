import React from "react";
import LottieScroll from "./LottieScroll";
import LottieLoop from "./LottieLoop";
import ct from "@/assets/animation-1.json";
import ml from "@/assets/stars.json";

const WiseMen = () => {
  return (
    <div className="bg-gradient-to-t from-gray-800  pb-10 ">
      <LottieLoop src={ml} className="w-full" />
      <div className="mx-auto  mb-10 p-5 bg-white shadow-xl shadow-white  rounded-lg  w-[90%] h-fit sm:w-1/2 sm:h-fit border ">
        <h1 className="flex items-center justify-between text-lg sm:text-3xl capitalize  text-rose-500   font-extrabold text-center">
          <span>
            <LottieScroll src={ct} className="w-[50px] h-[50px] " />
          </span>
          <span> Visit of the Wise Men</span>
          <span>
            <LottieScroll src={ct} className="w-[50px] h-[50px] " />
          </span>
        </h1>
        <h1 className="text-lg sm:text-3xl capitalize  text-white   font-extrabold text-center"></h1>
      </div>
      <div className=" mx-auto p-5 sm:p-10 bg-gradient-to-t from-gray-700 rounded-lg shadow-xl shadow-white  w-[90%] h-fit  border mb-20 mt-10">
        <h1 className="text-lg sm:text-3xl text-white   font-extrabold text-justify">
          Far in the East, Wise Men, guided by a mysterious star, embark on a
          journey of great significance. Their quest leads them to Bethlehem,
          where they present precious gifts of gold, frankincense, and myrrh to
          honor the newborn King. The arrival of the Wise Men symbolizes the
          recognition of Jesus divine nature and the universality of His
          message.
        </h1>

        <div className="text-center mt-10">
          <button
            type="button"
            className="border borde-white font-extrabold w-full text-white px-4 py-2  rounded-full"
          >
            Trust me you&apos;re almost there 👇
          </button>
        </div>
      </div>
    </div>
  );
};

export default WiseMen;
