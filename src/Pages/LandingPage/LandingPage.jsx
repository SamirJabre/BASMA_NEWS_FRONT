import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import HeroSection from "../../Components/HeroSection/HeroSection";
import NewsCategories from "../../Components/NewsCatergories/NewsCategories";
import Passion from "../../Components/Passion/Passion";
import MostRead from "../../Components/MostRead/MostRead";
import Footer from "../../Components/Footer/Footer";

function LandingPage() {
  return (
    <div className="h-full w-fit sm:bg-white sm:px-28 sm:rounded-xl">
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
      <Passion />
      <hr
        style={{
          backgroundColor: "gray",
          opacity: "0.3",
          height: "2px",
          width: "90%",
          margin: "25px auto",
        }}
      />
      <MostRead />
      <hr
        style={{
          backgroundColor: "gray",
          opacity: "0.3",
          height: "2px",
          width: "90%",
          margin: "0px auto 25px auto",
        }}
      />
      <Footer />
    </div>
  );
}

export default LandingPage;
