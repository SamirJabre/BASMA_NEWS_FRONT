import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function CategoryBox({ category, third_child }) {
  const navigate = useNavigate();
  const language = useSelector((state) => state.auth.language);
  const [translatedTitle, setTranslatedTitle] = useState('');

  // useEffect(async () => {
  //   const data = JSON.stringify({
  //     from: 'ar',
  //     to: 'en',
  //     q: category.title
  //   });

  //   const options = {
  //     method: 'POST',
  //     url: 'https://rapid-translate-multi-traduction.p.rapidapi.com/t',
  //     headers: {
  //       'x-rapidapi-key': 'e6034941d2msh770829ccd669659p140c6ajsn42e79fb66b0d',
  //       'x-rapidapi-host': 'rapid-translate-multi-traduction.p.rapidapi.com',
  //       'Content-Type': 'application/json'
  //     },
  //     data: data
  //   };

  //   await axios.request(options)
  //     .then(response => {
  //       setTranslatedTitle(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, [category.title]);


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
      <div className={`w-full h-12 flex justify-between items-center px-4 border-x-2 border-b-2 rounded-b md:rounded-b-lg md:h-[100px] md:flex-col-reverse md:${language === 'ar' ? 'items-end' : 'items-start'} md:justify-evenly`}>
        <button
          className="font-cairo rounded-full px-2 py-1 text-white bg-[#34B190] text-xs text-center font-semibold md:px-3 md:text-xs lg:text-sm 2xl:text-base hover:transition hover:scale-110"
          onClick={handleCategoryClick}
        >
          {language === "ar" ? "المزيد" : "More"}
        </button>
        <h1 className="font-cairo font-semibold text-sm text-[#EA543F] md:text-lg lg:text-xl xl:tex-2xl 2xl:text-[30px]">
          {language === "ar" ? category.title : translatedTitle}
        </h1>
      </div>
    </div>
  );
}

export default CategoryBox;
