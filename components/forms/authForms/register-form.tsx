"use client";
import { useFormik } from "formik";
import Link from "next/link";
import * as yup from "yup";

function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      phone: "",
      email: "",
      password: "",
      confirm: "",
    },
    validationSchema: yup.object({
      phone: yup.string().max(10, "invalid").required("required"),
      email: yup.string().email("invalid").required("required"),
      password: yup.string().required("required"),
      confirm: yup
        .string()
        .oneOf([yup.ref("password")], "invalid")
        .required("required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="flex-center flex-col gap-2 px-5 py-10 w-full md:max-w-[390px]">
      <h2 className="text-[30px] font-bold text-gray-500">Sign up</h2>
      <form onSubmit={formik.handleSubmit} className="w-full md:w-80">
        <div className="flex flex-col pb-5 relative ">
          <label htmlFor="phone" className="label-form">
            PHONE NUMBER
          </label>
          <div
            className={` rounded-full border-2 overflow-hidden ${
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
          <label htmlFor="email" className="label-form">
            EMAIL
          </label>
          <div
            className={` rounded-full border-2 overflow-hidden ${
              formik.touched.email && formik.errors.email
                ? " border-red-500 bg-red-100"
                : "border-transparent bg-gray-100"
            } `}
          >
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email..."
              className="ml-1 w-full bg-transparent input-border--none "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-300 font-semibold ml-3 absolute top-[70px] left-1">
              {formik.errors.email}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col pb-5 relative ">
          <label htmlFor="password" className="label-form">
            PASSWORD
          </label>
          <div
            className={` rounded-full border-2 overflow-hidden ${
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
        <div className="flex flex-col pb-5 relative ">
          <label htmlFor="confirm" className="label-form">
            CONFIRM PASSWORD
          </label>
          <div
            className={` rounded-full border-2 overflow-hidden ${
              formik.touched.confirm && formik.errors.confirm
                ? " border-red-500 bg-red-100"
                : "border-transparent bg-gray-100"
            } `}
          >
            <input
              id="confirm"
              name="confirm"
              type="password"
              placeholder="Confirm password..."
              className="ml-1 w-full bg-transparent input-border--none "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirm}
            />
          </div>
          {formik.touched.confirm && formik.errors.confirm ? (
            <p className="text-red-300 font-semibold ml-3 absolute top-[70px] left-1">
              {formik.errors.confirm}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          className="w-full rounded-full px-4 py-2 border-2 border-red-400 text-red-400 font-semibold hover:bg-red-400 hover:text-white transition-all"
        >
          Submit
        </button>
      </form>
      <div className="w-full mb-2 block md:hidden">
        <p className="text-center text-[13px] text-gray-400 font-semibold mb-2">
          or
        </p>
        <Link href={"/login"}>
          <p className="w-full rounded-full px-4 py-2 border-2 border-red-500 text-center text-red-500 font-semibold hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all cursor-pointer">
            Login now
          </p>
        </Link>
      </div>
    </div>
  );
}

export default RegisterForm;
