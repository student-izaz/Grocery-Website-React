import React, { useContext } from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import { ProductList } from "../ItemStore.jsx/Context";

function Checkout() {

  const { cartItem } = useContext(ProductList);
  return (
    <>
      <div className="sub-header">
        <div className="link">
          <Link to="/">Home / </Link>
          <Link to="/checkout" className="Active">
            Checkout
          </Link>
        </div>
      </div>

    </>
  );
}

export default Checkout;
