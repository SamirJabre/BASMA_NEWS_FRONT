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
    <section className="w-full h-fit flex justify-evenly items-center flex-wrap">
      {categories.map((category) => {
        return <CategoryBox key={category.id} category={category} />;
      })}
    </section>
  );
}

export default NewsCategories;
