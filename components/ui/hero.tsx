"use client";

import Image from "next/image";
import { CustomButton } from ".";
import { useEffect, useRef } from "react";

function Hero() {
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
    <div
      ref={heroRef}
      className="fixed w-full transition-all flex lg:flex-row flex-col gap-5 z-0  mx-auto"
    >
      <div className="flex-1 pt-36 padding-x relative">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[40px] font-extrabold">
          Welcome to the shoe world
        </h1>
        <p className="sm:text-[27px] text-[24px]  font-semibo  mt-5">
          Enjoy our convenient shopping process with the highest quality
          products
        </p>
        <CustomButton
          title="Go Shop"
          containerStyles="custom_btn text-white mt-10"
          textStyles="font-bold px-5"
        />
      </div>
      <div className="absolute hidden max-lg:block xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden"></div>

      <div className="lg:flex-[1.5] max-lg:hidden flex justify-end items-end w-full h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image
            loading="lazy"
            src={"/hero-2.webp"}
            alt="hero-img"
            fill
            className="object-contain animate-fluctuate "
          />
        </div>
        <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden"></div>
      </div>
    </div>
  );
}

export default Hero;
