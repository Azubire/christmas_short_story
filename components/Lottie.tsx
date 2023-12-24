import Lottie from "lottie-react";
import React, { useRef } from "react";

const Lotties = ({ src, className }: { src: unknown; className?: string }) => {
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

export default Lotties;
