import { useLottie, useLottieInteractivity } from "lottie-react";
import tree from "@/assets/animation-1.json";

const style = {
  height: 600,
};

const options = {
  animationData: tree,
};

const Animation = () => {
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1],
        type: "seek",
        frames: [0, 200],
      },
    ],
  });

  return Animation;
};

export default Animation;
