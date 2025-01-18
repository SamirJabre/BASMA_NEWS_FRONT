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
    <section className="w-full h-1/3 bg-green-500 select-none">
      <Carousel
        autoPlay={false}
        swipeable={true}
        showThumbs={false}
        showStatus={false}
        renderIndicator={customIndicator}
      >
        <div className="bg-newsBackground bg-no-repeat bg-cover w-full h-full py-10 flex items-end justify-center">
          <div className="w-full h-2/5 px-5 flex justify-end items-center">
            <div className="w-fit pl-2 h-7 border-b">
              <h1 className="text-white font-bold">خلافا للاعتقاد</h1>
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
