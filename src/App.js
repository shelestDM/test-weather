import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CityContext } from "./context/CityContext.js";
import Home from './pages/home/Home.jsx';
import MonthStatistic from './pages/monthStatistic/MonthStatistic.jsx';
import Header from './pages/shared/header/Header.jsx';
import Popup from "./pages/shared/popup/Popup.jsx";

function App() {

  const options = useContext(CityContext);
  const [City, setCity] = useState(options[0].value);


  return (
    <div className="global-container">
         {/*  <Popup ></Popup> */}
      <div className="container">
        <BrowserRouter>
        <Header options={options} setCity={setCity} City={City}></Header>
              <Routes>
                <Route path="/" element={<Home City={City} ></Home>} ></Route>
                <Route path="/monthstatistic" element={<MonthStatistic></MonthStatistic>}></Route>
              </Routes>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
