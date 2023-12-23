import Image from "next/image";
import img from "@/assets/welcome.jpg";

const Welcome = () => {
  return (
    <div className="">
      <Image src={img} alt="Christmas welcome" />
    </div>
  );
};

export default Welcome;
