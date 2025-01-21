import React from "react";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import CategoryNews from "./Pages/CategoryNewsPage/CategoryNews.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage/>} />
        <Route path="/category/:id" element={<CategoryNews/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
