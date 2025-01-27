import React, { useState } from "react";
import InputField from "../../base/InputField";
import facebook from "../../Assets/Icons/facebook.png";
import google from "../../Assets/Icons/google.png";
import apple from "../../Assets/Icons/apple.png";
import close from "../../Assets/Icons/close.svg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../Redux/store";

function LoginForm({ closeLoginForm }) {
  const language = useSelector((state) => state.auth.language);
  const [loginFailed, setLoginFailed] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChangeEmail = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const handleChangePassword = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://192.168.1.108:8000/api/login", formData)
      .then((res) => {
        if (res.data.status === "success") {
          dispatch(loginSuccess({ token: res.data.authorisation.token }));
          closeLoginForm();
        }
      })
      .catch((error) => {
        setLoginFailed(true);
      });
  };
  return (
    <section className="h-screen w-screen flex justify-center items-center bg-black bg-opacity-70 fixed top-0 left-0 z-10">
      <div className="w-72 h-fit bg-white flex flex-col justify-start py-5 items-center rounded-md xl:w-1/4">
        <div className="w-60 h-10 flex justify-between items-center mb-5 xl:w-full xl:px-5">
          <button className="w-7 h-7" onClick={closeLoginForm}>
            <img src={close} alt="Close Icon" className="h-full w-full" />
          </button>
          <h1 className="text-xl underline underline-offset-8">
            {language === "ar" ? "تسجيل الدخول" : "Login"}
          </h1>
          <div className="w-7 h-7"></div>
        </div>
        <form
          action="submit"
          onSubmit={handleSubmit}
          className="xl:w-full xl:px-5"
        >
          <InputField
            placeholder={language === "ar" ? "البريد الالكتروني" : "Email"}
            type={"email"}
            onchange={handleChangeEmail}
            language={language}
          />
          <InputField
            placeholder={language === "ar" ? "كلمة المرور" : "Password"}
            type={"password"}
            onchange={handleChangePassword}
            language={language}
          />

          {loginFailed && (
            <p className="text-center text-red-500">
              {language === "ar"
                ? "تحقق من العلومات"
                : "verify your credentials"}
            </p>
          )}

          <button
            type="submit"
            className="w-60 h-10 text-white p text-xl my-3 rounded-full bg-[#34B190] xl:w-full"
          >
            {language === "ar" ? "تسجيل الدخول" : "Login"}
          </button>
        </form>

        <div className="h-fit w-60 mb-4 flex items-center">
          <hr className="flex-grow" />
          <p className="mx-2 ">{language === "ar" ? "أو" : "or"}</p>
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
