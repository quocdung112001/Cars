"use client";

import { CustomButton, Hero } from "@/components/ui";

export default function Home() {
  const handleClick = () => {
    console.log("check click");
  };

  return (
    <main className="overflow-hidden pt-20">
      <Hero />
      <CustomButton
        containerStyles="custom_btn group"
        textStyles="text-white font-bold "
        title="Cick me"
        handleClick={handleClick}
      />
    </main>
  );
}
