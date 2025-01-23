import React from "react";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import CategoryNews from "./Pages/CategoryNewsPage/CategoryNews.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen min-w-full sm:bg-background sm:px-28 sm:py-16 bg-contain flex justify-center items-center">
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
