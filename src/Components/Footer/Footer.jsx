import React, { useState } from "react";
import twitter from "../../Assets/Icons/twitter.png";
import facebook from "../../Assets/Icons/facebookIcon.png";
import linkedin from "../../Assets/Icons/linkedin.png";
import RegisterForm from "../RegisterForm/RegisterForm";
import { useSelector } from "react-redux";

function Footer() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [email, setEmail] = useState("");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const closeRegisterForm = () => {
    setShowRegisterForm(false);
  };
  return (
    <footer className="w-full h-32 flex flex-col bg-[#E2E2E2] justify-evenly items-center">
      {isLoggedIn ? null : (
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
      )}
    </footer>
  );
}

export default Footer;
