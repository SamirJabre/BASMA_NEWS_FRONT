import React, { useEffect, useState } from "react";
import CategoryBox from "../CategoryBox/CategoryBox";
import axios from "axios";

function NewsCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://192.168.1.108:8000/api/get_category").then((Response) => {
      const data = Response.data;
      setCategories(data.sort((a, b) => b.clicks - a.clicks));
    });
  }, []);

  return (
    <section className="bg-gray-100 w-full h-fit py-7 flex justify-evenly items-center flex-wrap">
      {categories.map((category) => {
        return <CategoryBox key={category.id} category={category} />;
      })}
    </section>
  );
}

export default NewsCategories;
