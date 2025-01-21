import React from "react";
import {useNavigate} from 'react-router-dom'

function CategoryBox({ category }) {
  const navigate = useNavigate();
  return (
    <div className=" w-40 h-48 rounded mt-4">
      <div className="w-full h-36">
        <img
          src={category.image}
          alt="Category Image"
          className="w-full h-full rounded-t"
        />
      </div>
      <div className="w-full h-12 flex justify-between items-center px-4 border-x-2 border-b-2 rounded-b">
        <button className="rounded-full px-2 py-1 text-white bg-[#34B190] text-xs text-center" onClick={()=>navigate(`/category/${category.id}`)}>
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
