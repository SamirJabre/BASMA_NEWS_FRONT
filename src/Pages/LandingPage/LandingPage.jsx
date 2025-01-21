import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import HeroSection from "../../Components/HeroSection/HeroSection";
import NewsCategories from "../../Components/NewsCatergories/NewsCategories";
import LoginForm from "../../Components/LoginForm/LoginForm";
import Passion from "../../Components/Passion/Passion";
import MostRead from "../../Components/MostRead/MostRead";
import Footer from "../../Components/Footer/Footer";

function LandingPage() {
  return (
    <div className="h-screen w-screen">
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
          margin: "25px auto",
        }}
      />
      <Footer/>
    </div>
  );
}

export default LandingPage;
