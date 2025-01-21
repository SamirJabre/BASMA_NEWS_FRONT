import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
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
    <>
      <Header />
      <article className="w-full h-screen flex flex-col justify-start items-end p-5">
        <div
          className="w-full h-fit flex justify-between items-center mb-5"
          onClick={() => navigate("/")}
        >
          <div className="w-10 h-10">
            <img src={back} alt="Back" className="w-full h-full" />
          </div>
          <h1>اخر الاخبار و التطورات في {data.title}</h1>
        </div>

        <div className="w-fit h-fit mb-5">
          <img src={data.image} alt="News Image" className="w-full h-full"/>
        </div>
        <p className="text-right">{data.body}
        </p>
      </article>
    </>
  );
}

export default CategoryNews;
