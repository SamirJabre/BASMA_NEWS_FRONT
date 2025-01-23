import React, { useEffect, useState } from "react";
import CategoryBox from "../CategoryBox/CategoryBox";
import axios from "axios";
import richman from "../../Assets/Images/richman.png";

function NewsCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://192.168.1.108:8000/api/get_category").then((Response) => {
      const data = Response.data;
      setCategories(data.sort((a, b) => b.clicks - a.clicks));
    });
  }, []);

  return (
    <section className="w-full h-fit flex justify-evenly items-center flex-wrap md:grid md:grid-cols-3 md:grid-rows-2 md:mt-5 md:gap-10">
      {categories.map((category, index) => (
        <div
          key={category.id}
          className={`md:w-full md:h-full md:flex md:justify-center ${
            index === 2 ? "row-span-2 col-start-3" : ""
          }`}
        >
          <CategoryBox
            category={category}
            third_child={index === categories.length - 3}
          />
        </div>
      ))}
    </section>
  );
}

export default NewsCategories;
