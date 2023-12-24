"use client";

import Welcome from "@/components/Welcome";
import Image from "next/image";
import ctree from "@/assets/christmas-tree.svg";
import { useGSAP } from "@gsap/react";
import { HtmlHTMLAttributes, useRef } from "react";
import gsap from "gsap";
import Announciation from "@/components/Announciation";

export default function Home() {
  const container = useRef(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ repeat: -1, yoyo: true })
        .from(".img", { x: 0 })
        .to(".img", { x: "100%", duration: 20, ease: "power2.inOut" });
    },
    { scope: container }
  );

  return (
    <main
      ref={container}
      className=" bg-gradient-to-br from-rose-500 to-blue-500  shadow-red-500 overflow-hidden"
    >
      <Image src={ctree} alt="" className=" h-screen  img" />
      <Welcome />
      <Announciation />
    </main>
  );
}
