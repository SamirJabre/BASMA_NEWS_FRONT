import React from "react";
import menu from "../../Assets/Icons/menu.svg";

function Header() {
  return (
    <div className="w-full h-14 bg-white flex items-center justify-between px-4 ">
      <button className="w-10 h-10" onClick={() => console.log("Menu Clicked")}>
        <img src={menu} alt="Burger Menu" className="w-full h-full" />
      </button>
      <button className="w-fit h-fit">
        <h1 className="text-sm font-medium">تسجيل الدخول</h1>
      </button>
    </div>
  );
}

export default Header;
