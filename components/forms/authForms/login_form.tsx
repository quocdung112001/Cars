"use client";
import { useFormik } from "formik";
import Link from "next/link";
import * as yup from "yup";

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    validationSchema: yup.object({
      phone: yup.string().max(10, "invalid").required("required"),
      password: yup.string().required("required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="flex-center flex-col gap-2 px-5 py-10 w-full md:max-w-[390px]">
      <h2 className="text-[30px] font-bold text-gray-500">Sign in</h2>
      <form onSubmit={formik.handleSubmit} className="w-full">
        <div className="flex flex-col pb-5 relative ">
          <label htmlFor="phone" className="label-form">
            PHONE NUMBER
          </label>
          <div
            className={` rounded-full border-2  ${
              formik.touched.phone && formik.errors.phone
                ? " border-red-500 bg-red-100"
                : "border-transparent bg-gray-100"
            } `}
          >
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="Phone number..."
              className="ml-1 w-full bg-transparent input-border--none "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
          </div>
          {formik.touched.phone && formik.errors.phone ? (
            <p className="text-red-300 font-semibold ml-3 absolute top-[70px] left-1">
              {formik.errors.phone}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col pb-5 relative ">
          <label htmlFor="password" className="label-form">
            PASSWORD
          </label>
          <div
            className={` rounded-full border-2  ${
              formik.touched.password && formik.errors.password
                ? " border-red-500 bg-red-100"
                : "border-transparent bg-gray-100"
            } `}
          >
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password..."
              className="ml-1 w-full bg-transparent input-border--none "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>
          {formik.touched.password && formik.errors.password ? (
            <p className="text-red-300 font-semibold ml-3 absolute top-[70px] left-1">
              {formik.errors.password}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          className="w-full rounded-full px-4 py-2 border-2 border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all"
        >
          Submit
        </button>
      </form>
      <div className="w-full mb-2 block md:hidden">
        <p className="text-center text-[13px] text-gray-400 font-semibold mb-2">
          or
        </p>
        <Link href={"/register"}>
          <p className="w-full rounded-full px-4 py-2 border-2 border-blue-500 text-center text-blue-500 font-semibold hover:bg-red-500 hover:border-red-500 hover:text-white transition-all cursor-pointer">
            Register
          </p>
        </Link>
      </div>
      <div className="flex-between flex-wrap w-full gap-4">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="cursor-pointer w-4 h-4 text-blue-500 focus:ring-blue-400 focus:ring-2 rounded-full"
          />
          <label
            htmlFor="remember"
            className="select-none text-blue-500 font-semibold hover:text-blue-300 cursor-pointer"
          >
            Remember me
          </label>
        </div>

        <Link href={"#"}>
          <span className="selct-none text-blue-500 font-semibold hover:text-blue-300">
            Forgot password
          </span>
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
