import Lottie from "lottie-react";
import { useRef } from "react";

const LottieLoop = ({ src, className }: { src: any; className?: string }) => {
  const lottieRef = useRef(null);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={src}
      className={className}
      loop={true}
    />
  );
};

export default LottieLoop;
