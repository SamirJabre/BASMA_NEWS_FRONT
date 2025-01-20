import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import HeroSection from "../../Components/HeroSection/HeroSection";
import NewsCategories from "../../Components/NewsCatergories/NewsCategories";
import LoginForm from "../../Components/LoginForm/LoginForm";

function LandingPage() {
  return (
    <div className="h-screen w-screen bg-red-300">
      <Header />
      <HeroSection />
      <NewsCategories />
    </div>
  );
}

export default LandingPage;
