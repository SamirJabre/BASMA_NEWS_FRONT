import React from "react";
import Header from "../../Components/Header/Header";
import back from "../../Assets/Icons/back-arrow.svg";
import {useNavigate} from 'react-router-dom'

function CategoryNews() {
    const navigate = useNavigate();
  return (
    <>
      <Header />
      <article className="w-full h-screen bg-red-300 flex flex-col justify-start items-end p-5">
        <div className="w-full h-fit flex justify-between items-center mb-5" onClick={()=>navigate('/')}>
          <div className="w-10 h-10">
            <img src={back} alt="Back" className="w-full h-full" />
          </div>
          <h1>اخر الاخبار و التطورات في </h1>
        </div>

        <div className="w-full h-52 mb-5 bg-blue-300"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          provident voluptatum ullam voluptatem tempore dolore, natus blanditiis
          ad quod dolorem asperiores ea quia aspernatur adipisci eaque nihil aut
          rerum odio dicta quam quisquam. Deleniti dolor velit in repellat
          facere quae nisi consectetur provident hic assumenda, exercitationem
          quas! Dolorem quae dolores neque enim obcaecati aut impedit ipsa
          veritatis fugiat omnis deserunt quia a rem cupiditate repellendus
          sapiente, tenetur adipisci nobis id commodi est corporis explicabo
          sequi? Temporibus odit aut magni magnam officia. Iste ipsum fugiat
          officia nobis, at, reprehenderit expedita unde modi accusamus qui
          deserunt dicta cumque beatae magni provident quam.
        </p>
      </article>
    </>
  );
}

export default CategoryNews;
