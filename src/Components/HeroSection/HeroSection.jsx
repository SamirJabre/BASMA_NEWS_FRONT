import React, { useState } from "react";
import newsBackground from "../../Assets/Images/NewsBack.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";

function HeroSection() {
  const [width, setWidth] = useState(window.innerWidth);
  const language = useSelector((state) => state.auth.language);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  const customIndicator = (onClickHandler, isSelected, index, label) => {
    return (
      <li
        className={`inline-block mx-2 cursor-pointer ${
          isSelected
            ? "border-[#E64128] border"
            : "bg-[#E64128] border border-[#E64128]"
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
    <section className="w-screen h-fit select-none sm:w-full">
      <Carousel
        autoPlay={false}
        swipeable={true}
        showThumbs={false}
        showStatus={false}
        renderIndicator={customIndicator}
      >
        <div className="bg-background2 bg-no-repeat bg-cover w-full h-[250px] py-12 flex items-end justify-center sm:h-[800px] sm:flex sm:flex-col sm:items-center sm:justify-between sm:py-0 sm:pb-10">
          {width > 640 ? (
            <>
              <Navbar />
              <div className={`w-full sm:px-7 md:px-10 lg:px-20 xl:px-28 2xl:px-32 flex flex-col ${language==='ar' ? 'sm:items-end' : 'sm:items-start'} sm:justify-between`}>
                <div className="w-fit h-fit pb-2 pl-4 border-b">
                <h1 className="font-messiri text-white font-extrabold sm:text-[15px] md:text-[20px] lg:text-[30px] xl:text-[35px] 2xl:text-[45px] ">
                  {language==='ar'? 'خلافا للاعتقاد' : 'Contrary to belief'}
                </h1>
                </div>
                <h1 className={`sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-normal ${language==='ar' ? 'text-right' : 'text-left'} my-5 text-white w-full`}>
                  {language==='ar'? 'لوريم ايبسوم ليس نصا عشوائيا, بل له جذور في الادب الاتيني الكلاسيكي منذ العام 45 قبل الميلاد, مما يجعله اكثر من 2000 عام في القدم لوريم ايبسوم ليس نصا عشوائيا, بل له جذور في الادب الاتيني الكلاسيكي منذ العام 45 قبل الميلاد, مما يجعله اكثر من 2000 عام في القدم لوريم ايبسوم ليس نصا عشوائيا, بل له جذور في الادب الاتيني الكلاسيكي منذ العام 45 قبل الميلاد, مما يجعله اكثر من 2000 عام في القدم' : 'Lorem Ipsum is not random text, but has roots in classical Latin literature since 45 BC, making it more than 2000 years old. Lorem Ipsum is not random text, but has roots in classical Latin literature since 45 BC, making it more than 2000 years old. Lorem Ipsum is not random text, but has roots in classical Latin literature since 45 BC, making it more than 2000 years old.'}
                </h1>
                <button className="bg-[#E64128] rounded-full px-4 py-1 text-center text-base text-white hover:text-[#E64128] hover:bg-white hover:scale-110 hover:transition-all">
                  {language==='ar'? 'المزيد' : 'More'}
                </button>
              </div>
            </>
          ) : (
            <div className="w-full h-fit px-5 flex flex-col justify-evenly items-end">
              <div className="w-fit pl-2 h-7 border-b">
                <h1 className="font-messiri text-white font-extrabold sm:text-[15px] md:text-[20px] lg:text-[30px] xl:text-[35px] 2xl:text-[45px]">خلافا للاعتقاد</h1>
              </div>
              <div className="h-fit w-full flex justify-between items-center">
                <button className="bg-[#E64128] rounded-full px-2 text-sm text-white">
                  المزيد
                </button>
                <h1 className="text-xs text-right text-white w-4/5">
                  لوريم ايبسوم ليس نصا عشوائيا, بل له جذور في الادب الاتيني
                  الكلاسيكي منذ العام 45 قبل الميلاد, مما يجعله اكثر من 2000 عام
                  في القدم
                </h1>
              </div>
            </div>
          )}
        </div>
        <div className="bg-background2 bg-no-repeat bg-cover w-full h-[250px] py-12 flex items-end justify-center sm:h-[800px] sm:flex sm:flex-col sm:items-center sm:justify-between sm:py-0 sm:pb-10">
          {width > 640 ? (
            <>
              <Navbar />
              <div className={`w-full sm:px-7 md:px-10 lg:px-20 xl:px-28 2xl:px-32 flex flex-col ${language==='ar' ? 'sm:items-end' : 'sm:items-start'} sm:justify-between`}>
                <div className="w-fit h-fit pb-2 pl-4 border-b">
                <h1 className="font-messiri text-white font-extrabold sm:text-[15px] md:text-[20px] lg:text-[30px] xl:text-[35px] 2xl:text-[45px] ">
                  {language==='ar'? 'خلافا للاعتقاد' : 'Contrary to belief'}
                </h1>
                </div>
                <h1 className={`sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-normal ${language==='ar' ? 'text-right' : 'text-left'} my-5 text-white w-full`}>
                  {language==='ar'? 'لوريم ايبسوم ليس نصا عشوائيا, بل له جذور في الادب الاتيني الكلاسيكي منذ العام 45 قبل الميلاد, مما يجعله اكثر من 2000 عام في القدم لوريم ايبسوم ليس نصا عشوائيا, بل له جذور في الادب الاتيني الكلاسيكي منذ العام 45 قبل الميلاد, مما يجعله اكثر من 2000 عام في القدم لوريم ايبسوم ليس نصا عشوائيا, بل له جذور في الادب الاتيني الكلاسيكي منذ العام 45 قبل الميلاد, مما يجعله اكثر من 2000 عام في القدم' : 'Lorem Ipsum is not random text, but has roots in classical Latin literature since 45 BC, making it more than 2000 years old. Lorem Ipsum is not random text, but has roots in classical Latin literature since 45 BC, making it more than 2000 years old. Lorem Ipsum is not random text, but has roots in classical Latin literature since 45 BC, making it more than 2000 years old.'}
                </h1>
                <button className="bg-[#E64128] rounded-full px-4 py-1 text-center text-base text-white hover:text-[#E64128] hover:bg-white hover:scale-110 hover:transition-all">
                  {language==='ar'? 'المزيد' : 'More'}
                </button>
              </div>
            </>
          ) : (
            <div className="w-full h-fit px-5 flex flex-col justify-evenly items-end">
              <div className="w-fit pl-2 h-7 border-b">
                <h1 className="font-messiri text-white font-extrabold sm:text-[15px] md:text-[20px] lg:text-[30px] xl:text-[35px] 2xl:text-[45px]">خلافا للاعتقاد</h1>
              </div>
              <div className="h-fit w-full flex justify-between items-center">
                <button className="bg-[#E64128] rounded-full px-2 text-sm text-white">
                  المزيد
                </button>
                <h1 className="text-xs text-right text-white w-4/5">
                  لوريم ايبسوم ليس نصا عشوائيا, بل له جذور في الادب الاتيني
                  الكلاسيكي منذ العام 45 قبل الميلاد, مما يجعله اكثر من 2000 عام
                  في القدم
                </h1>
              </div>
            </div>
          )}
        </div>
        <div className="bg-background2 bg-no-repeat bg-cover w-full h-[250px] py-12 flex items-end justify-center sm:h-[800px] sm:flex sm:flex-col sm:items-center sm:justify-between sm:py-0 sm:pb-10">
          {width > 640 ? (
            <>
              <Navbar />
              <div className={`w-full sm:px-7 md:px-10 lg:px-20 xl:px-28 2xl:px-32 flex flex-col ${language==='ar' ? 'sm:items-end' : 'sm:items-start'} sm:justify-between`}>
                <div className="w-fit h-fit pb-2 pl-4 border-b">
                <h1 className="font-messiri text-white font-extrabold sm:text-[15px] md:text-[20px] lg:text-[30px] xl:text-[35px] 2xl:text-[45px] ">
                  {language==='ar'? 'خلافا للاعتقاد' : 'Contrary to belief'}
                </h1>
                </div>
                <h1 className={`sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-normal ${language==='ar' ? 'text-right' : 'text-left'} my-5 text-white w-full`}>
                  {language==='ar'? 'لوريم ايبسوم ليس نصا عشوائيا, بل له جذور في الادب الاتيني الكلاسيكي منذ العام 45 قبل الميلاد, مما يجعله اكثر من 2000 عام في القدم لوريم ايبسوم ليس نصا عشوائيا, بل له جذور في الادب الاتيني الكلاسيكي منذ العام 45 قبل الميلاد, مما يجعله اكثر من 2000 عام في القدم لوريم ايبسوم ليس نصا عشوائيا, بل له جذور في الادب الاتيني الكلاسيكي منذ العام 45 قبل الميلاد, مما يجعله اكثر من 2000 عام في القدم' : 'Lorem Ipsum is not random text, but has roots in classical Latin literature since 45 BC, making it more than 2000 years old. Lorem Ipsum is not random text, but has roots in classical Latin literature since 45 BC, making it more than 2000 years old. Lorem Ipsum is not random text, but has roots in classical Latin literature since 45 BC, making it more than 2000 years old.'}
                </h1>
                <button className="bg-[#E64128] rounded-full px-4 py-1 text-center text-base text-white hover:text-[#E64128] hover:bg-white hover:scale-110 hover:transition-all">
                  {language==='ar'? 'المزيد' : 'More'}
                </button>
              </div>
            </>
          ) : (
            <div className="w-full h-fit px-5 flex flex-col justify-evenly items-end">
              <div className="w-fit pl-2 h-7 border-b">
                <h1 className="font-messiri text-white font-extrabold sm:text-[15px] md:text-[20px] lg:text-[30px] xl:text-[35px] 2xl:text-[45px]">خلافا للاعتقاد</h1>
              </div>
              <div className="h-fit w-full flex justify-between items-center">
                <button className="bg-[#E64128] rounded-full px-2 text-sm text-white">
                  المزيد
                </button>
                <h1 className="text-xs text-right text-white w-4/5">
                  لوريم ايبسوم ليس نصا عشوائيا, بل له جذور في الادب الاتيني
                  الكلاسيكي منذ العام 45 قبل الميلاد, مما يجعله اكثر من 2000 عام
                  في القدم
                </h1>
              </div>
            </div>
          )}
        </div>
      </Carousel>
    </section>
  );
}

export default HeroSection;
