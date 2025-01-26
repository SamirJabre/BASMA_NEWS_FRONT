import React from "react";
import Navigation from "../../base/Navigation";
import { useSelector } from "react-redux";

function Navbar() {
  const language = useSelector((state) => state.auth.language);
  return (
    <nav className="w-full h-[10%] flex justify-center items-center">
      <ul className="w-fit h-full flex justify-between items-center">
      <Navigation placeholder={language === "ar" ? "اراء" : "Opinions"} border={false} />
        <Navigation placeholder={language === "ar" ? "فيديو و صور" : "Videos and Photos"} border={true} />
        <Navigation placeholder={language === "ar" ? "ثقافة" : "Culture"} border={true} />
        <Navigation placeholder={language === "ar" ? "رياضة" : "Sport"} border={true} />
        <Navigation placeholder={language === "ar" ? "اقتصاد" : "Finance"} border={true} />
        <Navigation placeholder={language === "ar" ? "اخبار" : "News"} border={true} />
        <Navigation placeholder={language === "ar" ? "الرئيسية" : "Home"} border={true} />
      </ul>
    </nav>
  );
}

export default Navbar;
