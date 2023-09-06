"use client";
import { Formik } from "formik";
import Link from "next/link";
import * as yup from "yup";

function LoginForm() {
  const initialValues = {
    phone: "",
    password: "",
  };

  const validationChema = yup.object().shape({
    phone: yup.string().required("Vui long nhập trường này."),
    password: yup.string().required("Vui long nhập trường này."),
  });

  const handleSubmit = (values: { phone: string; password: string }) => {};

  return (
    <div className="flex-center flex-col gap-4 px-5 py-10">
      <h2 className="text-[30px] font-bold text-gray-500">Sign in</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationChema}
        onSubmit={(values) => handleSubmit(values)}
      ></Formik>
      <div className="flex-between flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="w-4 h-4"
          />
          <label
            htmlFor="remember"
            className="select-none text-blue-500 font-semibold"
          >
            Remember me ?
          </label>
        </div>
        <Link href={"#"}>
          <span className="selct-none text-blue-500 font-semibold hover:text-blue-300">
            Forgot password ?
          </span>
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
