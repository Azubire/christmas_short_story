import LottieLoop from "./LottieLoop";
import Lotties from "./LottieScroll";
import ml from "@/assets/multi-lines.json";
import ct from "@/assets/animation-1.json";
import LottieScroll from "./LottieScroll";

const JourneyToBeth = () => {
  return (
    <div className="bg-gradient-to-t from-gray-800  py-10 ">
      <Lotties src={ml} className="w-full" />
      <div className="mx-auto mb-10 p-5 bg-gradient-to-br from-rose-500 shadow-xl shadow-white  rounded-lg  w-[90%] h-fit sm:w-1/2 sm:h-fit border ">
        <h1 className="flex items-center justify-between text-lg sm:text-3xl capitalize  text-white   font-extrabold text-center">
          <span>
            <LottieScroll src={ct} className="w-[50px] h-[50px] " />
          </span>
          <span> Journey to Bethlehem</span>
          <span>
            <LottieScroll src={ct} className="w-[50px] h-[50px] " />
          </span>
        </h1>
        <h1 className="text-lg sm:text-3xl capitalize  text-white   font-extrabold text-center"></h1>
      </div>
      <div className=" mx-auto p-5 sm:p-10 bg-gradient-to-t from-green-700 rounded-lg shadow-xl shadow-white  w-[90%] h-fit  border mb-20 mt-10">
        <h1 className="text-lg sm:text-3xl text-white   font-extrabold text-justify">
          Join Mary and her husband Joseph on a poignant journey to Bethlehem, a
          journey compelled by the decree of Caesar Augustus for a census. Feel
          the weight of the challenges they face, from the arduous travel on
          dusty roads to the uncertainty of finding shelter in a crowded town.
          Experience the anticipation and wonder as they approach Bethlehem, the
          city of David.
        </h1>

        <div className="text-center mt-10">
          <button
            type="button"
            className="border borde-white font-extrabold w-full text-white px-4 py-2  rounded-full"
          >
            Enjoying the story? Scroll down 👇
          </button>
        </div>
      </div>
    </div>
  );
};

export default JourneyToBeth;
