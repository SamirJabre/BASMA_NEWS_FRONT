import React from "react";
import newsBackground from "../../Assets/Images/NewsBack.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function HeroSection() {
  const customIndicator = (onClickHandler, isSelected, index, label) => {
    return (
      <li
        className={`inline-block mx-2 cursor-pointer ${
          isSelected
            ? "bg-[#E64128] border border-[#E64128]"
            : "border-[#E64128] border"
        }`}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        aria-label={`${label} ${index + 1}`}
      >
        <span className="block w-2 h-2 rounded-full"></span>
      </li>
    );
  };

  return (
    <section className="w-full h-fit bg-green-500 select-none">
      <Carousel
        autoPlay={false}
        swipeable={true}
        showThumbs={false}
        showStatus={false}
        renderIndicator={customIndicator}
      >
        <div className="bg-newsBackground bg-no-repeat bg-cover w-full h-full py-12 flex items-end justify-center">
          <div className="w-full h-fit px-5 flex flex-col justify-evenly items-end">
            <div className="w-fit pl-2 h-7 border-b">
              <h1 className="text-white font-bold">خلافا للاعتقاد</h1>
            </div>
            <div className="h-fit w-full flex justify-between items-center">
              <button className="bg-[#E64128] rounded-full px-2 text-sm text-white">المزيد</button>
              <h1 className="text-xs text-right text-white w-5/6">
                لوريم ايبسوم ليس نصا عشوائيا, بل له جذور في الادب الاتيني
                الكلاسيكي منذ العام 45 قبل الميلاد, مما يجعله اكثر من 2000 عام
                في القدم
              </h1>
            </div>
          </div>
        </div>
        <div>
          <img src={newsBackground} alt="News Background 2" />
        </div>
        <div>
          <img src={newsBackground} alt="News Background 3" />
        </div>
      </Carousel>
    </section>
  );
}

export default HeroSection;
