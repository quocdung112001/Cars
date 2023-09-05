"use client";

import { Hero } from "@/components/ui";
import { useEffect, useRef } from "react";

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const hero: any = heroRef.current;
      if (window.scrollY >= 200) {
        hero.classList.add("opacity-50");
      } else {
        hero.classList.remove("opacity-50");
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className="overflow-hidden relative">
      <div ref={heroRef} className="fixed w-full transition-all">
        <Hero />
      </div>
      <div className="h-screen -z-20"></div>
      <div className="relative h-[600px]  bg-blue-500 ">Home</div>
    </main>
  );
}
