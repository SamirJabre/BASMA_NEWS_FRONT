import React from "react";
import Fact from "../Fact/Fact";
import { useSelector } from "react-redux";

function MostRead() {
  const language = useSelector((state) => state.auth.language);
  return (
    <section className="w-full h-fit flex flex-col justify-start items-center xl:items-start">
      <h1 className={`font-cairo font-semibold mb-5 ${language === 'ar' ? 'text-right' : 'text-left'} w-11/12 text-lg text-[#34AF90] 2xl:text-3xl`}>
        {language === "ar" ? "الاكثر قراءة" : "Most Read"}
      </h1>
      <Fact language={language}/>
      <Fact language={language}/>
      <Fact language={language}/>
      <Fact language={language}/>
    </section>
  );
}

export default MostRead;
