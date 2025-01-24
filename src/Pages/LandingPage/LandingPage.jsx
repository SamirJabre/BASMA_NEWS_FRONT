import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import HeroSection from "../../Components/HeroSection/HeroSection";
import NewsCategories from "../../Components/NewsCatergories/NewsCategories";
import Passion from "../../Components/Passion/Passion";
import MostRead from "../../Components/MostRead/MostRead";
import Footer from "../../Components/Footer/Footer";

function LandingPage() {
  return (
    <div className="h-full w-fit sm:w-full sm:bg-white sm:px-28 sm:rounded-xl">
      <Header />
      <HeroSection />
      <NewsCategories />
      <hr
        style={{
          backgroundColor: "gray",
          opacity: "0.3",
          height: "2px",
          width: "90%",
          margin: "25px auto",
        }}
      />
      <div className="w-full h-fit xl:flex xl:flex-row-reverse justify-between items-start">
      <Passion />
      <hr
        className="xl:hidden"
        style={{
          backgroundColor: "gray",
          opacity: "0.3",
          height: "2px",
          width: "90%",
          margin: "25px auto",
        }}
      />
      <MostRead />
      </div>
      <hr
        className="mx-auto mb-[25px] sm:my-[25px]"
        style={{
          backgroundColor: "gray",
          opacity: "0.3",
          height: "2px",
          width: "90%",
        }}
      />
      <Footer />
    </div>
  );
}

export default LandingPage;
