import Lottie from "lottie-react";
import React, { useRef } from "react";

const Lotties = ({ src }: { src: string }) => {
  const lottieRef = useRef(null);

  return <Lottie lottieRef={lottieRef} animationData={src} />;
};

export default Lotties;
