import React, { useState } from "react";
import logo from "../../Assets/Images/logo.png";
import { slide as Menu } from "react-burger-menu";
import "./Header.css";
import LoginForm from "../LoginForm/LoginForm";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logout } from "../../Redux/store";

function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const token = useSelector((state) => state.auth.token);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const closeLoginForm = () => {
    setShowLoginForm(false);
  };
  const logOut = () => {
    dispatch(logout());
  };
  return (
    <div className="w-full h-14 bg-white flex items-center justify-between px-4 shadow-lg sm:flex sm:items-end sm:justify-between sm:px-0 sm:h-32 sm:py-4 sm:shadow-none">
      {width < 640 && (
        <Menu className="bm-menu">
          <div className="w-1/3 h-10 mb-3 border-b border-black">
            <a id="الرئيسية" className="menu-item" href="/">
              الرئيسية
            </a>
          </div>
          <div className="w-1/3 h-10 mb-3 border-b border-black">
            <a id="اخبار" className="menu-item" href="/news">
              اخبار
            </a>
          </div>
          <div className="w-1/3 h-10 mb-3 border-b border-black">
            <a id="اقتصاد" className="menu-item" href="/finance">
              اقتصاد
            </a>
          </div>
          <div className="w-1/3 h-10 mb-3 border-b border-black">
            <a id="رياضة" className="menu-item" href="/sport">
              رياضة
            </a>
          </div>
          <div className="w-1/3 h-10 mb-3 border-b border-black">
            <a id="ثقافة" className="menu-item" href="/culture">
              ثقافة
            </a>
          </div>
          <div className="w-1/3 h-10 mb-3 border-b border-black">
            <a id="فيديو و صور" className="menu-item" href="/photosandvideos">
              فيديو و صور
            </a>
          </div>
          <div className="w-1/3 h-10 mb-3 border-b border-black">
            <a id="اراء" className="menu-item" href="/opinions">
              اراء
            </a>
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
        {isLoggedIn ? "تسجيل الخروج" : "تسجيل الدخول"}
      </button>
      {showLoginForm && <LoginForm closeLoginForm={closeLoginForm} />}
      {width > 640 && (
        <>
          <div className="w-fit h-full">
            <img src={logo} alt="Logo" className="h-full w-full scale-125" />
          </div>
          <div className="w-32 h-full"></div>
        </>
      )}
    </div>
  );
}

export default Header;
