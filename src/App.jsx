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
  );
}

export default App;
