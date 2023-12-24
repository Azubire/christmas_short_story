import LottieLoop from "./LottieLoop";
import LottieScroll from "./LottieScroll";
import ct from "@/assets/animation-1.json";
import h from "@/assets/house.json";

const Return = () => {
  return (
    <div className="bg-gradient-to-t from-rose-500  py-10 ">
      <LottieScroll src={h} className="sm:w-[500px] mx-auto" />
      <div className="mx-auto mb-10 p-5 bg-gradient-to-br from-rose-500 shadow-xl shadow-white  rounded-lg  w-[90%] h-fit sm:w-1/2 sm:h-fit border ">
        <h1 className="flex items-center justify-between text-lg sm:text-3xl capitalize  text-white   font-extrabold text-center">
          <span>
            <LottieLoop src={ct} className="w-[50px] h-[50px] " />
          </span>
          <span> Return to Nazareth</span>
          <span>
            <LottieLoop src={ct} className="w-[50px] h-[50px] " />
          </span>
        </h1>
      </div>
      <div className=" mx-auto p-5 sm:p-10 bg-gradient-to-t from-teal-700 rounded-lg shadow-xl shadow-white  w-[90%] h-fit  border mb-20">
        <h1 className="text-lg sm:text-3xl text-white   font-extrabold text-justify">
          With the passing of time, the Holy Family returns to Nazareth, their
          hometown. Here, Jesus grows up, surrounded by the everyday experiences
          of life. Nazareth becomes the backdrop for the formative years of the
          Savior, setting the stage for the ministry that will unfold in the
          years to come.
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

export default Return;
