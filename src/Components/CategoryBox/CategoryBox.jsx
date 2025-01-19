import React from "react";
import sport from "../../Assets/Images/828.png";

function CategoryBox({ category }) {
  return (
    <div className=" w-40 h-60 rounded">
      <div className="w-full h-36">
        <img
          src={category.image}
          alt="Category Image"
          className="w-full h-full rounded-t"
        />
      </div>
      <div className="w-full h-1/5 flex justify-between items-center px-4 border-x-2 border-b-2 rounded-b">
        <button className="rounded-full px-2 py-1 text-white bg-[#34B190] text-xs text-center">
          المزيد
        </button>
        <h1 className="font-semibold text-xl text-[#EA543F]">
          {category.title}
        </h1>
      </div>
    </div>
  );
}

export default CategoryBox;
