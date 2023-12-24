import React from "react";
import LottieScroll from "./LottieScroll";
import LottieLoop from "./LottieLoop";
import ct from "@/assets/animation-1.json";
import j from "@/assets/journey.json";

const ToEgypt = () => {
  return (
    <div className="bg-gradient-to-t from-rose-500  py-10 ">
      <LottieScroll src={j} className="w-full" />
      <div className="mx-auto mb-10 p-5 bg-gradient-to-br from-rose-500 shadow-xl shadow-white  rounded-lg  w-[90%] h-fit sm:w-1/2 sm:h-fit border ">
        <h1 className="flex items-center justify-between text-lg sm:text-3xl capitalize  text-white   font-extrabold text-center">
          <span>
            <LottieLoop src={ct} className="w-[50px] h-[50px] " />
          </span>
          <span> Flight to Egypt</span>
          <span>
            <LottieLoop src={ct} className="w-[50px] h-[50px] " />
          </span>
        </h1>
      </div>
      <div className=" mx-auto p-5 sm:p-10 bg-gradient-to-t from-teal-700 rounded-lg shadow-xl shadow-white  w-[90%] h-fit  border mb-20">
        <h1 className="text-lg sm:text-3xl text-white   font-extrabold text-justify">
          In the shadow of danger, Joseph receives a crucial dream, prompting
          the Holy Family to embark on a hasty journey to Egypt. Experience the
          challenges and uncertainties they face as they seek refuge in a
          foreign land. The narrative unfolds with a sense of divine protection,
          highlighting the providence that safeguards the infant Jesus from the
          sinister plans of King Herod.
        </h1>

        <div className="text-center mt-10">
          <button
            type="button"
            className="border borde-white font-extrabold w-full text-white px-4 py-2  rounded-full"
          >
            You are almost there 👇
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToEgypt;
