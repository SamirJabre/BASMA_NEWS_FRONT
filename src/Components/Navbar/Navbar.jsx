import React from "react";
import Navigation from "../../base/Navigation";

function Navbar() {
  return (
    <nav className="w-full h-[10%] flex justify-center items-center">
      <ul className="w-fit h-full flex justify-between items-center">
        <Navigation placeholder={"اراء"}border={false} />
        <Navigation placeholder={"فيديو و صور"} border={true}/>
        <Navigation placeholder={"ثقافة"} border={true}/>
        <Navigation placeholder={"رياضة"} border={true}/>
        <Navigation placeholder={"اقتصاد"}border={true}/>
        <Navigation placeholder={"اخبار"} border={true}/>
        <Navigation placeholder={"الرئيسية"} border={true}/>
      </ul>
    </nav>
  );
}

export default Navbar;
