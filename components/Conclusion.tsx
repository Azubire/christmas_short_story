import React from "react";
import LottieScroll from "./LottieScroll";
import LottieLoop from "./LottieLoop";
import santa from "@/assets/santa.json";
import ct from "@/assets/animation-1.json";

const Conclusion = () => {
  return (
    <div className="bg-gradient-to-t from-rose-500  py-10 ">
      <LottieScroll src={santa} className="sm:w-[500px] mx-auto" />
      <div className="mx-auto mb-10 p-5 bg-gradient-to-br from-rose-500 shadow-xl shadow-white  rounded-lg  w-[90%] h-fit sm:w-1/2 sm:h-fit border ">
        <h1 className="flex items-center justify-between text-lg sm:text-3xl capitalize  text-white   font-extrabold text-center">
          <span>
            <LottieScroll src={ct} className="w-[50px] h-[50px] " />
          </span>
          <span> Congratulations</span>
          <span>
            <LottieScroll src={ct} className="w-[50px] h-[50px] " />
          </span>
        </h1>
      </div>
      <div className=" mx-auto p-5 sm:p-10 bg-gradient-to-t from-blue-700 rounded-lg shadow-xl shadow-white  w-[90%] h-fit  border mb-20">
        <h1 className="text-lg sm:text-3xl text-white   font-extrabold text-justify">
          As our interactive Christmas journey comes to a close, take a moment
          to reflect on the profound and timeless message embedded in this
          sacred story. Christmas is not merely a historical event but a
          celebration of the enduring values of hope, love, and joy that
          continue to resonate in our hearts and homes.
        </h1>
      </div>
    </div>
  );
};

export default Conclusion;
