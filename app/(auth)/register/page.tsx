import RegisterForm from "@/components/forms/authForms/register-form";
import { CustomButton } from "@/components/ui";
import Link from "next/link";

function Register() {
  return (
    <div className="flex rounded-xl shadow-xl overflow-hidden ">
      <div className="flex-center flex-col max-md:hidden bg-gradient-to-bl from-red-400  to-red-500  text-white px-14 py-10 relative">
        <h1 className=" sm:text-[64px] text-[50px] font-extrabold text-center">
          Welcom to register
        </h1>
        <p className="text[24px] font-semibold mb-4 ">Have account?</p>
        <Link href={"/login"}>
          <CustomButton
            title="Login now"
            containerStyles="bg-white px-6 py-3 rounded-full shadow-xl border-white border-4 active:bg-red-500 hover:bg-red-500 group transition-all"
            textStyles="text-red-500 font-semibold group-hover:text-white"
          />
        </Link>
        <Link href={"/"}>
          <p className="absolute top-2 right-3 text-[14px] font-bold text-gray-200 hover:text-white cursor-pointer hover:underline ">
            Go home page
          </p>
        </Link>
      </div>
      <RegisterForm />
    </div>
  );
}

export default Register;
