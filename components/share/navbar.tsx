import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "../ui";
import { nav_items } from "@/app/constants";

function Navbar() {
  return (
    <header className="w-full absolute  z-10">
      <nav className="flex justify-between items-center max-w-[1440px] mx-auto sm:px-16 px-6 py-4">
        <div className="flex  items-center gap-3">
          <Link href={"#"}>
            <Image
              src={"/logo.svg"}
              alt="logo"
              width={118}
              height={18}
              className="object-contain"
            />
          </Link>
          <div className="flex justify-center items-center gap-5 ml-9 max-md:hidden">
            {nav_items.map((item, index) => {
              return (
                <Link href={item.link} key={index}>
                  <div className="px-4 py-2 font-semibold hover:bg-gray-100 rounded-lg active:bg-gray-300 transition-all">
                    {item.name}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <CustomButton
          title="Log in"
          containerStyles="custom_btn"
          textStyles="text-white font-bold"
        />
      </nav>
    </header>
  );
}

export default Navbar;
