import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CategoryBox({ category, third_child }) {
  const navigate = useNavigate();
  const handleCategoryClick = () => {
    axios
      .post("http://192.168.1.108:8000/api/count_visits", {
        category_id: category.id,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    navigate(`/category/${category.id}`);
  };
  return (
    <div
      className={`w-40 h-48 bg-transparent mt-4 drop-shadow-md md:w-full md:h-[450px] ${
        third_child && "md:h-full"
      } md:mt-0`}
    >
      <div className={`w-full h-36 ${third_child ? "md:h-[840px]" : "md:h-[350px]"}`}>
        <img
          src={category.image}
          alt="Category Image"
          className="w-full h-full rounded-t md:rounded-t-lg"
        />
      </div>
      <div className={`w-full h-12 flex justify-between items-center px-4 border-x-2 border-b-2 rounded-b md:rounded-b-lg md:h-[100px] md:flex-col-reverse md:items-end md:justify-evenly`}>
        <button
          className="rounded-full px-2 py-1 text-white bg-[#34B190] text-xs text-center font-semibold md:px-3 md:text-xs lg:text-sm 2xl:text-base"
          onClick={handleCategoryClick}
        >
          المزيد
        </button>
        <h1 className="font-semibold text-base text-[#EA543F] md:text-lg lg:text-xl xl:tex-2xl 2xl:text-[30px]">
          {category.title}
        </h1>
      </div>
    </div>
  );
}

export default CategoryBox;
