import React, { useState } from "react";
import InputField from "../../base/InputField";
import facebook from "../../Assets/Icons/facebook.png";
import google from "../../Assets/Icons/google.png";
import apple from "../../Assets/Icons/apple.png";
import close from "../../Assets/Icons/close.svg";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../Redux/store";

function LoginForm({ closeLoginForm }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChangeEmail = (e) => {
    setFormData({ ...formData, email: e.target.value });
    console.log(formData);
  };
  const handleChangePassword = (e) => {
    setFormData({ ...formData, password: e.target.value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://192.168.1.108:8000/api/login", formData)
      .then((res) => {
        console.log(res.data);

        if (res.data.status === "success") {
          dispatch(loginSuccess({ token: res.data.authorisation.token }));
          console.log("Login successful");
          closeLoginForm();
        } else {
          console.log("Login failed");
        }
      })
      .catch((error) => {
        console.error("An error occurred during login:", error);
      });
  };
  return (
    <section className="h-screen w-screen flex pt-20 justify-center bg-transparent fixed top-0 left-0 z-10">
      <div className="w-72 h-fit bg-white flex flex-col justify-start py-5 items-center rounded-md">
        <div className="w-60 h-10 flex justify-between items-center mb-5">
          <div className="w-7 h-7" onClick={closeLoginForm}>
            <img src={close} alt="Close Icon" className="h-full w-full" />
          </div>
          <h1 className="text-xl underline underline-offset-8">تسجيل الدخول</h1>
          <div className="w-7 h-7"></div>
        </div>
        <form action="submit" onSubmit={handleSubmit}>
          <InputField
            placeholder={"البريد الاكتروني"}
            type={"email"}
            onchange={handleChangeEmail}
          />
          <InputField
            placeholder={"كلمة المرور"}
            type={"password"}
            onchange={handleChangePassword}
          />
          <button
            type="submit"
            className="w-60 h-10 text-white p text-xl my-3 rounded-full bg-[#34B190]"
          >
            تسجيل{" "}
          </button>
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
      </div>
    </section>
  );
}

export default LoginForm;
