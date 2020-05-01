import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.scss";
import "../Navbar/Navbar";
import "../TourList/TourList";
import Navbar from "../Navbar/Navbar";
import TourList from "../TourList/TourList";

function App() {
  return (
    <>
      <Navbar />
      <TourList />
    </>
  );
}

export default App;
