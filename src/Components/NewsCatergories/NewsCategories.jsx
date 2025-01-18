import React from "react";
import CategoryBox from "../CategoryBox/CategoryBox";

function NewsCategories() {
  return (
    <section className="bg-gray-100 w-full h-fit py-7 flex justify-evenly items-center flex-wrap">
      <CategoryBox/>
      <CategoryBox/>
      <CategoryBox/>
      <CategoryBox/>
      <CategoryBox/>
      <CategoryBox/>
    </section>
  );
}

export default NewsCategories;
