import Lottie from "lottie-react";
import { useRef } from "react";

const LottieScroll = ({
  src,
  className,
}: {
  src: unknown;
  className?: string;
}) => {
  const lottieRef = useRef(null);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={src}
      className={className}
      loop={true}
      interactivity={{
        mode: "scroll",
        actions: [
          {
            visibility: [0, 1],
            type: "seek",
            frames: [0, 200],
          },
        ],
      }}
    />
  );
};

export default LottieScroll;
