import React from "react";
import InputField from "../../base/InputField";
import facebook from "../../Assets/Icons/facebook.png";
import google from "../../Assets/Icons/google.png";
import apple from "../../Assets/Icons/apple.png";

function LoginForm() {
  return (
    <section className="h-screen w-screen opacity-85 flex pt-20 justify-center bg-green-300">
      <div className="w-4/5 h-4/6 bg-white flex flex-col justify-start py-5 items-center rounded-md">
        <h1 className="text-center text-xl mb-5">تسجيل الدخول</h1>
        <form action="submit">
          <InputField
            placeholder={"البريد الاكتروني"}
            type={"email"}
            key={Math.random()}
          />
          <InputField
            placeholder={"كلمة المرور"}
            type={"password"}
            key={Math.random()}
          />
        </form>

        <div className="h-fit w-60 mb-4 flex items-center">
          <hr className="flex-grow" />
          <p className="mx-1 ">او</p>
          <hr className="flex-grow" />
        </div>

        <div className="w-60 h-fit mb-5 flex justify-evenly items-center">
          <div className="w-10 h-10 rounded-full">
            <img src={google} alt="Google Logo" className="h-full w-full" />
          </div>
          <div className="w-10 h-10 rounded-full">
            <img src={facebook} alt="Facebook Logo" className="h-full w-full" />
          </div>
          <div className="w-10 h-10 rounded-full">
            <img src={apple} alt="Apple Logo" className="h-full w-full" />
          </div>
        </div>

        <button className="w-60 h-20 text-white p text-xl my-3 rounded-full bg-green-400">
          تسجيل{" "}
        </button>
      </div>
    </section>
  );
}

export default LoginForm;
