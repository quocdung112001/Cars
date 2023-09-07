import { LoginForm } from "@/components/forms/authForms";
import { CustomButton } from "@/components/ui";
import Link from "next/link";

function Login() {
  return (
    <div className="flex rounded-xl shadow-xl overflow-hidden">
      <LoginForm />

      <div className="flex-center flex-col  max-md:hidden bg-gradient-to-bl from-blue-400 via-white/10 to-blue-600  bg-blue-500 text-white px-14 py-10 relative">
        <h1 className=" sm:text-[64px] text-[50px] font-extrabold text-center">
          Welcom to login
        </h1>
        <p className="text[24px] font-semibold mb-4 ">Do not have account?</p>
        <Link href={"/register"}>
          <CustomButton
            title="Register now"
            containerStyles="bg-white px-6 py-3 rounded-full shadow-xl border-white border-4 active:bg-blue-600 hover:bg-blue-500 group transition-all"
            textStyles="text-blue-500 font-semibold group-hover:text-white"
          />
        </Link>
        <Link href={"/"}>
          <p className="absolute top-2 right-3 text-[14px] font-bold text-gray-200 hover:text-white cursor-pointer hover:underline ">
            Go home page
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
