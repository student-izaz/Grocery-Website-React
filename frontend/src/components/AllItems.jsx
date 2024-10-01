import React, { useContext } from "react";
import "./AllItems.css";
import ProductItem from "./ProductItem";
import { ProductList } from "../ItemStore.jsx/Context";

const AllItems = () => {
  const { products } = useContext(ProductList);

  return (
    <div className="all-product-section">
      <div className="items-section">
        <h2>All ITEMS</h2>
        <div className="all-items">
          {products.map((item, index) => {
            return ( <ProductItem
              key={index}
              item={item}
            />
            );
            }   
          )}
        </div>
      </div>
    </div>
  );
};

export default AllItems;
