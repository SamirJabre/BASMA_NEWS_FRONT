import React, { useState } from "react";
import twitter from "../../Assets/Icons/twitter.png";
import facebook from "../../Assets/Icons/facebookIcon.png";
import linkedin from "../../Assets/Icons/linkedin.png";
import RegisterForm from "../RegisterForm/RegisterForm";
import { useSelector } from "react-redux";
import FooterList from "../FooterList/FooterList";

function Footer() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [email, setEmail] = useState("");
  const language = useSelector((state) => state.auth.language);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const closeRegisterForm = () => {
    setShowRegisterForm(false);
  };
  return (
    <footer className="w-full h-32 flex flex-col bg-[#E2E2E2] justify-evenly items-center sm:h-60 sm:pt-10 sm:pb-12 sm:flex-row sm:justify-between sm:items-center ">
      <div className="hidden sm:flex sm:justify-between sm:items-start sm:w-1/2 sm:h-full sm:px-10 ">
        <FooterList language={language}/>
        <FooterList language={language}/>
        <FooterList language={language}/>
      </div>

      <div className="w-full h-full sm:flex sm:flex-col sm:justify-between sm:items-end sm:w-1/2 sm:h-full sm:px-10">
        <h1 className="hidden sm:flex text-[#3B3F4A] font-semibold 2xl:text-2xl xl:text-xl">
          {language === "en" ? "Watch on Twitter" : "مشاهدة على تويتر"}
        </h1>
        <div className="w-full h-full flex flex-col justify-evenly items-center md:flex-col md:justify-evenly md:items-end xl:flex-row xl:justify-between xl:items-center ">
          {isLoggedIn ? null : (
            <div className="w-3/5 h-10 rounded-full flex justify-between items-center">
              <input
                type="email"
                className="w-[70%] xl:w[60%] 2xl:w-[70%] h-full rounded-l-full px-2 text-sm text-right outline-none"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                onClick={() => email && setShowRegisterForm(true)}
                className="flex justify-center items-center font-semibold h-full w-[30%] bg-[#E74127] rounded-r-full text-white 2xl:text-lg 2xl:w-[30%] xl:text-base xl:w-[40%] md:text-xs sm:text-[5px]"
              >
                {language === "en" ? "Subscribe" : "الاشتراك"}
              </button>
            </div>
          )}
          <div className="w-3/5 h-10 flex justify-between items-center xl:w-2/6">
            <button className="w-10 h-10 2xl:w-10 2xl:h-10 lg:w-8 lg:h-8 sm:w-6 sm:h-6 rounded-full bg-[#35B091]">
              <img
                src={twitter}
                alt="Twitter Icon"
                className="w-full h-full scale-75"
              />
            </button>
            <button className="w-10 h-10 2xl:w-10 2xl:h-10 lg:w-8 lg:h-8 sm:w-6 sm:h-6 rounded-full bg-[#35B091]">
              <img
                src={facebook}
                alt="Facebook Icon"
                className="w-full h-full scale-50"
              />
            </button>
            <button className="w-10 h-10 2xl:w-10 2xl:h-10 lg:w-8 lg:h-8 sm:w-6 sm:h-6 rounded-full bg-[#35B091]">
              <img
                src={linkedin}
                alt="LinkedIn Icon"
                className="w-full h-full scale-50"
              />
            </button>
          </div>
          {showRegisterForm && (
            <RegisterForm email={email} closeRegisterForm={closeRegisterForm} />
          )}
        </div>
      </div>

      {/* {isLoggedIn ? null : (
        <div className="w-5/6 h-10 rounded-full flex justify-between items-center">
          <input
            type="email"
            className="w-[70%] h-full rounded-l-full px-2 text-sm text-right outline-none"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            onClick={() => email && setShowRegisterForm(true)}
            className="flex justify-center items-center h-full w-[30%] bg-[#E74127] rounded-r-full text-white"
          >
            الاشتراك
          </button>
        </div>
      )}
      <div className="w-5/6 h-10 flex justify-between items-center">
        <div className="w-10 h-10 rounded-full bg-[#35B091]">
          <img
            src={twitter}
            alt="Twitter Icon"
            className="w-full h-full scale-75"
          />
        </div>
        <div className="w-10 h-10 rounded-full bg-[#35B091]">
          <img
            src={facebook}
            alt="Facebook Icon"
            className="w-full h-full scale-50"
          />
        </div>
        <div className="w-10 h-10 rounded-full bg-[#35B091]">
          <img
            src={linkedin}
            alt="LinkedIn Icon"
            className="w-full h-full scale-50"
          />
        </div>
      </div>
      {showRegisterForm && (
        <RegisterForm email={email} closeRegisterForm={closeRegisterForm} />
      )} */}
    </footer>
  );
}

export default Footer;
