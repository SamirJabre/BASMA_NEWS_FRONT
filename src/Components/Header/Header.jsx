import React, { useState } from "react";
import logo from "../../Assets/Images/logo.png";
import { slide as Menu } from "react-burger-menu";
import "./Header.css";
import LoginForm from "../LoginForm/LoginForm";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logout , changeLanguage } from "../../Redux/store";

function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const language = useSelector((state) => state.auth.language);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const closeLoginForm = () => {
    setShowLoginForm(false);
  };
  const logOut = () => {
    dispatch(logout());
  };

  const changeLang = () => {
    dispatch(changeLanguage(language === "ar" ? "en" : "ar"));
  }

  return (
    <div className="w-full h-14 bg-white flex items-center justify-between px-4 shadow-lg sm:flex sm:items-end sm:justify-between sm:px-0 sm:h-32 sm:py-4 sm:shadow-none">
      {width < 640 && (
        <Menu className="bm-menu">
          <div className="w-1/3 h-10 mb-3 border-b border-black">
            <a id="home" className="menu-item" href="/">
              {language === "ar" ? "الرئيسية" : "Home"}
            </a>
          </div>
          <div className="w-1/3 h-10 mb-3 border-b border-black">
            <a id="news" className="menu-item" href="/news">
              {language === "ar" ? "اخبار" : "News"}
            </a>
          </div>
          <div className="w-1/3 h-10 mb-3 border-b border-black">
            <a id="finance" className="menu-item" href="/finance">
              {language === "ar" ? "اقتصاد" : "Finance"}
            </a>
          </div>
          <div className="w-1/3 h-10 mb-3 border-b border-black">
            <a id="sport" className="menu-item" href="/sport">
              {language === "ar" ? "رياضة" : "Sport"}
            </a>
          </div>
          <div className="w-1/3 h-10 mb-3 border-b border-black">
            <a id="culture" className="menu-item" href="/culture">
              {language === "ar" ? "ثقافة" : "Culture"}
            </a>
          </div>
          <div className="w-1/3 h-10 mb-3 border-b border-black">
            <a
              id="photosandvideos"
              className="menu-item"
              href="/photosandvideos"
            >
              {language === "ar" ? "فيديو و صور" : "Photos & Videos"}
            </a>
          </div>
          <div className="w-1/3 h-10 mb-3 border-b border-black">
            <a id="opinions" className="menu-item" href="/opinions">
              {language === "ar" ? "اراء" : "Opinions"}
            </a>
          </div>
          <div className="w-1/3 h-10 mb-3">
            <select
              name="language"
              onChange={changeLang}
              className="w-fit h-fit text-center bg-[#A6A6A6] outline-none text-white">
              <option value="ar">العربية</option>
              <option value="en">English</option>
            </select>
          </div>

          <div className="h-fit my-8 w-fit">
            <img src={logo} alt="Logo Image" className="w-full h-full" />
          </div>
          
        </Menu>
      )}

      <button
        className="w-fit h-fit text-left sm:text-lg sm:font-bold sm:w-32"
        onClick={() =>
          isLoggedIn === false ? setShowLoginForm(true) : logOut()
        }
      >
        {isLoggedIn
          ? language === "ar"
            ? "تسجيل الخروج"
            : "Logout"
          : language === "ar"
          ? "تسجيل الدخول"
          : "Login"}
      </button>
      {showLoginForm && <LoginForm closeLoginForm={closeLoginForm} />}
      {width > 640 && (
        <>
          <div className="w-fit h-full">
            <img src={logo} alt="Logo" className="h-full w-full scale-125" />
          </div>
          <div className="w-32 h-full flex items-end justify-center">
            <select
              name="language"
              onChange={changeLang}
              className="w-fit h-fit text-center sm:text-lg"
            >
              <option value="ar">العربية</option>
              <option value="en">English</option>
            </select>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
