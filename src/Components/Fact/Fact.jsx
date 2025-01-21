import React, { useState } from "react";
import plus from "../../Assets/Icons/plus.png";
import minus from "../../Assets/Icons/minus.png";

function Fact() {
  const [factShown, setFactShown] = useState(false);
  return (
    <div className="w-11/12 h-fit flex flex-col justify-between items-center mb-5 border rounded-lg">
      <div className="w-full h-12 flex items-center justify-end">
        <div
          className={`w-full h-full flex justify-end items-center pr-5 ${
            factShown && "bg-[#3C3E4B] rounded-tl-lg"
          }`}
        >
          <h1 className={`${factShown ? " text-white" : "text-[#34AF90]"}`}>
            Click
          </h1>
        </div>
        <button
          onClick={() => setFactShown(!factShown)}
          className={`h-12 w-12  flex justify-center items-center ${
            factShown
              ? "rounded-tr-lg bg-[#E74127]"
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
      {factShown && (
        <div className="w-full h-20 flex justify-end items-center rounded-b-lg bg-[#F0F0F0]">
          <div className="w-full h-full flex justify-end items-center px-5">
            <p className="text-[#B0B0B2] text-xs text-right">
              قالبنك المركزي من العملات الأجنبيّة يُعتبر تتويجاً لمسار خاضه مصرف
              لبنان لرفع الاحتياطيات من خلال ضبط السوق أولاً ووقف هدر الأموال
              على الدعم مثلما كان يجري سابق
            </p>
          </div>
          <div className="h-12 w-12"></div>
        </div>
      )}
    </div>
  );
}

export default Fact;
