// "use client";

import Image from "next/image";
import { CustomButton } from ".";
// import { useEffect } from "react";

function Hero() {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log(window.scrollY);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="flex lg:flex-row flex-col gap-5 z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 padding-x relative">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
          Welcome to the shoe world
        </h1>
        <p className="text-[27px]  font-light mt-5">
          Enjoy our convenient shopping process with the highest quality
          products
        </p>
        <CustomButton
          title="More"
          containerStyles="custom_btn text-white mt-10"
          textStyles="font-bold px-5"
        />
      </div>
      <div className="absolute hidden max-lg:block xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden"></div>

      <div className="lg:flex-[1.5] max-lg:hidden flex justify-end items-end w-full h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image
            src={"/hero.png"}
            alt="hero-img"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden"></div>
      </div>
    </div>
  );
}

export default Hero;
