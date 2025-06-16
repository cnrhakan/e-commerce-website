import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductsList from "./components/productsList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsList />} />
      </Routes>
    </>
  );
}

export default App;
