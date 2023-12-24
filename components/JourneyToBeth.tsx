import Lotties from "./Lottie";
import ml from "@/assets/multi-lines.json";

const JourneyToBeth = () => {
  return (
    <div className="bg-gradient-to-t from-gray-800 ">
      <Lotties src={ml} className="w-full" />
      <div className="grid sm:grid-cols-2 justify-center items-center px-4 sm:px-10">
        <div>
          <Lotties src={ml} />
        </div>
        <div>
          <p className="bg-gradient-to-tr from-green-400 to-blue-400 text-transparent bg-clip-text  mb-5 text-lg sm:text-4xl font-extrabold text-center underline first-letter:text-6xl">
            2. Journey to Bethlehem
          </p>
          <h2 className="text-justify text-lg sm:text-2xl text-white   font-extrabold ">
            Join Mary and her husband Joseph on a poignant journey to Bethlehem,
            a journey compelled by the decree of Caesar Augustus for a census.
            Feel the weight of the challenges they face, from the arduous travel
            on dusty roads to the uncertainty of finding shelter in a crowded
            town. Experience the anticipation and wonder as they approach
            Bethlehem, the city of David.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default JourneyToBeth;
