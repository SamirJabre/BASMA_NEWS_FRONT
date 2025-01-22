import React from "react";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import CategoryNews from "./Pages/CategoryNewsPage/CategoryNews.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="h-fit w-fit sm:bg-background sm:px-20 sm:py-12 bg-contain ">
      <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage/>} />
        <Route path="/category/:id" element={<CategoryNews/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
