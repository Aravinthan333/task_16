import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Cart from "./Cart.jsx";
import data from "../src/products.json";
// import { Route } from "react-router-dom";
// import Cards from "./shop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {data.products.map((product) => (
      <Cart key={product.id} {...product} />
    ))}
  </React.StrictMode>
);
