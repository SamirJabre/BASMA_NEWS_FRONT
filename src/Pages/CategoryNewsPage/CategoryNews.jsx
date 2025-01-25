import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import back from "../../Assets/Icons/back-arrow.svg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function CategoryNews() {
  const { id } = useParams();
  const [data, setData] = useState([
    {
      title: "",
      image: "",
      body: "",
    },
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://192.168.1.108:8000/api/get_category/${id}`).then((res) => {
      setData({...data, title: res.data.title, image: res.data.image, body: res.data.body});
      console.log(res.data);
    });
  },[]);
  return (
    <div className="w-full h-fit flex flex-col justify-start items-center bg-white sm:px-28 sm:rounded-xl">
      <Header />
      <article className="bg-white w-full h-fit flex flex-col justify-start items-end p-5">
        <div
          className="w-full h-fit flex justify-between items-center mb-5 sm:mb-10"
          onClick={() => navigate("/")}
        >
          <button className="w-10 h-10">
            <img src={back} alt="Back" className="w-full h-full" />
          </button>
          <h1 className="text-[#30B08F] font-bold text-base 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base">اخر الاخبار و التطورات في {data.title}</h1>
        </div>

        <div className="w-full h-fit sm:h-[100%] mb-5">
          <img src={data.image} alt="News Image" className="w-full h-full"/>
        </div>
        <p className="text-right text-lg 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm">{data.body}
        </p>
      </article>
      <hr
        className="mx-auto mb-[25px] sm:my-[25px]"
        style={{
          backgroundColor: "gray",
          opacity: "0.3",
          height: "2px",
          width: "100%",
        }}
      />
      <Footer/>
    </div>
  );
}

export default CategoryNews;
