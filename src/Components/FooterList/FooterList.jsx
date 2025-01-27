import React from "react";

function FooterList({language}) {
  return (
    <ul className="font-cairo text-right">
      <h1 className="font-bold text-[#3B3D4A] sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-xl mb-2">{language === 'ar' ? 'بما تتطلبه' : 'What you need'}</h1>
      <li className="mb-1"><a href="#" className="text-[#949599] font-bold underline underline-offset-4 2xl:text-base xl:text-[13px] lg:text-[11px] md:text-[10px]">{language ==='ar' ? "هناك العديد من الانواع" : "There's a lot of types"}</a></li>
      <li className="mb-1"><a href="#" className="text-[#949599] font-bold underline underline-offset-4 2xl:text-base xl:text-[13px] lg:text-[11px] md:text-[10px]">{language === 'ar' ? 'بعض اللوادر او الكلمات' : "Some of the words"}</a></li>
      <li className="mb-1"><a href="#" className="text-[#949599] font-bold underline underline-offset-4 2xl:text-base xl:text-[13px] lg:text-[11px] md:text-[10px]">{language ==='ar' ? 'عليك ان تتحقق اولا ان' : 'You should verify first'}</a></li>
    </ul>
  );
}

export default FooterList;
