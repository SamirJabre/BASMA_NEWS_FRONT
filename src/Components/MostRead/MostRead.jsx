import React from "react";
import Fact from "../Fact/Fact";

function MostRead() {
  return (
    <section className="w-full h-fit flex flex-col justify-start items-center">
      <h1 className="mb-5 text-right w-11/12 text-lg text-[#34AF90]">الاكثر قراءة</h1>
      <Fact />
      <Fact />
    </section>
  );
}

export default MostRead;
