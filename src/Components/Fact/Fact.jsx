import React, { useEffect, useState } from "react";
import plus from "../../Assets/Icons/plus.png";
import minus from "../../Assets/Icons/minus.png";

function Fact({ language }) {
  const [factShown, setFactShown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="w-11/12 lg:w-full xl:w-11/12 h-fit flex flex-col justify-between items-center mb-[25px] border rounded-lg">
      <div
        className={`w-full h-12 flex ${
          language === "ar" ? "flex-row" : "flex-row-reverse"
        } items-center justify-end`}
      >
        <div
          className={`w-full h-full flex justify-end items-center ${
            language === "en" ? "flex-row-reverse pl-5" : "flex-row pr-5"
          } ${
            factShown
              ? language === "en"
                ? "bg-[#3C3E4B] rounded-tr-lg"
                : "bg-[#3C3E4B] rounded-tl-lg"
              : ""
          }`}
        >
          <h1 className={`${factShown ? " text-white" : "text-[#34AF90]"}`}>
            Click
          </h1>
        </div>
        <button
          onClick={() => setFactShown(!factShown)}
          className={`h-12 w-12 flex justify-center items-center ${
            factShown
              ? language === "en"
                ? "rounded-tl-lg bg-[#E74127]"
                : "rounded-tr-lg bg-[#E74127]"
              : language === "en"
              ? "rounded-l-lg bg-[#34AF90]"
              : "rounded-r-lg bg-[#34AF90]"
          }`}
        >
          <img
            src={factShown ? minus : plus}
            alt="Plus Icon"
            className="h-1/3 w-1/3"
          />
        </button>
      </div>
      <div
        className={`w-full transition-all duration-300 ease-in-out overflow-hidden ${
          factShown ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0"
        } flex justify-end items-center rounded-b-lg bg-[#F0F0F0] ${
          language === "ar" ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div className="w-full h-full flex justify-end items-center px-5">
          <p
            className={`text-[#B0B0B2] text-xs ${
              language === "ar" ? "text-right" : "text-left"
            }`}
          >
            {language === "ar"
              ? "قالبنك المركزي من العملات الأجنبيّة يُعتبر تتويجاً لمسار خاضه مصرف لبنان لرفع الاحتياطيات من خلال ضبط السوق أولاً ووقف هدر الأموالعلى الدعم مثلما كان يجري سابق"
              : "The Central Bank's foreign exchange template is considered a culmination of a path that the Banque du Liban has taken to raise reserves by regulating the market first and stopping the waste of money on support as it was previously."}
          </p>
        </div>
        <div className="h-12 w-12"></div>
      </div>
    </div>
  );
  
}

export default Fact;
