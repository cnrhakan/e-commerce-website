<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductsList from "./components/productsList";
import ProductDetails from "./components/ProductDetails";
import Basket from "./components/Basket";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<ProductsList />} />
        <Route path="product-details/:id" element={<ProductDetails />} />
        <Route path="mybasket" element={<Basket />} />
      </Route>
    </Routes>
=======
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
>>>>>>> d5490a096bfbe62c920b7536aa8e309f57471808
  );
}

export default App;
