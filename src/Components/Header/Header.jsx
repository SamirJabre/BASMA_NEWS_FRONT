import React from "react";
import logo from "../../Assets/Images/logo.png";
import { slide as Menu } from "react-burger-menu";
import "./Header.css";

function Header() {
  return (
    <div className="w-full h-14 bg-white flex items-center justify-between px-4">
      <Menu className="bm-menu">
        <div className="w-1/3 h-10 mb-3 border-b border-black">
          <a id="الرئيسية" className="menu-item" href="/">
            الرئيسية
          </a>
        </div>
        <div className="w-1/3 h-10 mb-3 border-b border-black">
          <a id="اخبار" className="menu-item" href="/about">
            اخبار
          </a>
        </div>
        <div className="w-1/3 h-10 mb-3 border-b border-black">
          <a id="اقتصاد" className="menu-item" href="/contact">
            اقتصاد
          </a>
        </div>
        <div className="w-1/3 h-10 mb-3 border-b border-black">
          <a id="رياضة" className="menu-item" href="/contact">
            رياضة
          </a>
        </div>
        <div className="w-1/3 h-10 mb-3 border-b border-black">
          <a id="ثقافة" className="menu-item" href="/contact">
            ثقافة
          </a>
        </div>
        <div className="w-1/3 h-10 mb-3 border-b border-black">
          <a id="فيديو و صور" className="menu-item" href="/contact">
            فيديو و صور
          </a>
        </div>
        <div className="w-1/3 h-10 mb-3 border-b border-black">
          <a id="اراء" className="menu-item" href="/contact">
            اراء
          </a>
        </div>
        <div className="h-fit my-8 w-fit">
          <img src={logo} alt="Logo Image" className="w-full h-full" />
        </div>
      </Menu>

      <button className="w-fit h-fit">
        <h1 className="text-sm font-medium">تسجيل الدخول</h1>
      </button>
    </div>
  );
}

export default Header;
