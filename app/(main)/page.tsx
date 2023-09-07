// "use client";

import { Hero } from "@/components/ui";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  // const heroRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const hero: any = heroRef.current;
  //     if (window.scrollY >= 200) {
  //       hero.classList.add("opacity-50");
  //     } else {
  //       hero.classList.remove("opacity-50");
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  // }, []);
  return (
    <main className="overflow-hidden relative">
      {/* <div ref={heroRef} className="fixed w-full transition-all">
        <Hero />
      </div> */}
      <Hero />
      <div className="h-screen -z-20"></div>
      <div className="relative  bg-white ">
        <div className="w-full flex-center flex-col gap-10 bg-on-sale--bg bg-cover bg-center bg-no-repeat text-white px-10 py-16">
          <p className=" font-semibold md:text-xl text-md">
            THE SEASON BEGINGS
          </p>
          <h1 className="xl:text-[74px] text-[40px] text-center font-bold">
            PROMOTION <span className=" text-red-500">SALE OF 50%</span>
          </h1>
          <Link href={"#"}>
            <span className="md:px-6 md:py-3 px-4 py-2 md:text-xl text-md bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600">
              GO SHOP NOW
            </span>
          </Link>
          <p className="text-[20px] font-semibold">EXPIRED TIME</p>
        </div>
        <div className="grid md:grid-rows-2 md:grid-flow-col gap-4 mt-5">
          <div className=" bg-red-400 max-md:h-[200px] ">item-1</div>
          <div className=" bg-blue-400  max-md:h-[200px] ">item-2</div>
          <div className=" bg-green-400 max-md:h-[200px] ">item-3</div>
          <div className=" bg-yellow-400  max-md:h-[200px]">item-4</div>
          <div className=" bg-orange-400 row-span-2 col-span-2 bg-[url('/img1.webp')] bg-cover bg-center min-h-[300px] max-md:mx-[10px] lg:h-[600px] xl:h-[700px]">
            item-5
          </div>
        </div>

        {/*Start New arrival*/}
        <div>
          <div className="flex-between mx-4 mt-5 flex-wrap">
            <div className="border-l-4 border-blue-500 px-6 py-3">
              <h2 className="text-[34px] font-bold ">NEW ARRIVALS</h2>
              <p className="font-light">Just in now</p>
            </div>

            <div className="flex  gap-4 ">
              <div className="flex-center w-16 h-16 border-4 border-blue-500 text-[40px] text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white cursor-pointer transition-all active:bg-blue-900">
                <span className="leading-[64px] select-none">{"<"}</span>
              </div>
              <div className="flex-center w-16 h-16 border-4 border-blue-500 text-[40px] text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white cursor-pointer transition-all active:bg-blue-900">
                <span className="leading-[63px] select-none">{">"}</span>
              </div>
            </div>
          </div>
          <div className="h-[300px] bg-blue-300">slide</div>
        </div>
        {/*End New arrival*/}

        {/* Start bestseller */}
        <div className="bg-black mt-5">
          <div className="flex-between flex-wrap px-10 pt-16">
            <h2 className="xl:text-[70px] text-[40px] font-semibold text-white">
              <span className=" font-extrabold xl:text-[75px] text-[45px]">
                BEST
              </span>
              SELLER
            </h2>
            <Link href={"#"}>
              <span className="px-4 py-2 border-2 border-white text-white font-semibold hover:text-black hover:bg-white transition-all">
                {"SHOW MORE "}
              </span>
            </Link>
          </div>
          <div className="h-[300px]">
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
              <ul className="flex flex-wrap -mb-px text-white">
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  >
                    Profile
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                    aria-current="page"
                  >
                    Dashboard
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  >
                    Settings
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  >
                    Contacts
                  </a>
                </li>
                <li>
                  <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End bestseller */}
        <div className="mt-5">Demain</div>
      </div>
      {/* Start meet demain */}
    </main>
  );
}
