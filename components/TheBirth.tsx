import React from "react";
import tl from "@/assets/stars-dropping.json";
import santa from "@/assets/animation-1.json";
import LottieScroll from "./LottieScroll";
import LottieLoop from "./LottieLoop";

const TheBirth = () => {
  return (
    <div className="bg-gradient-to-t from-rose-500  py-10 ">
      <LottieScroll src={tl} className="w-full" />
      <div className="mx-auto mb-10 p-5 bg-gradient-to-br from-rose-500 shadow-xl shadow-white  rounded-lg  w-[90%] h-fit sm:w-1/2 sm:h-fit border ">
        <h1 className="flex items-center justify-between text-lg sm:text-3xl capitalize  text-white   font-extrabold text-center">
          <span>
            <LottieLoop src={santa} className="w-[50px] h-[50px] " />
          </span>
          <span> The Birth of Jesus</span>
          <span>
            <LottieLoop src={santa} className="w-[50px] h-[50px] " />
          </span>
        </h1>
      </div>
      <div className=" mx-auto p-5 sm:p-10 bg-gradient-to-t from-green-700 rounded-lg shadow-xl shadow-white  w-[90%] h-fit  border ">
        <h1 className="text-lg sm:text-3xl text-white   font-extrabold text-justify">
          In the heart of Bethlehem, amidst humble surroundings, Mary gives
          birth to Jesus, the Son of God. The newborn King is cradled in a
          simple manger, surrounded by the warmth of love and the divine light
          that fills the stable. The night sky becomes a celestial theater as
          angels announce the extraordinary event to shepherds in the nearby
          fields, proclaiming, Glory to God in the highest, and on earth peace,
          goodwill toward men.
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

export default TheBirth;
