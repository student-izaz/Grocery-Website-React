import React, { useContext, useEffect } from "react";
import "./CartItem.css";
import CartItem from "./CartItem";
import CartMessg from "./CartMessg";
import CartAmountSummary from "./CartAmountSummary";
import { ProductList } from "../ItemStore.jsx/Context";

const CartItems = ({ setCart }) => {
  const { products, cartItem, getTotalAmount, noOfCartItem } = useContext(ProductList);
  

  return (
    <>
      <div className="card-toggle">
        <div className="item-card">
          <div className="cart_header">
            <div className="left">
              <p>
                My Cart
                <span>
                  (
                  <span className="noOfCartItem">
                    {noOfCartItem().length === 0 ? "No Item" : `${noOfCartItem().length} Items`}
                  </span>
                  )
                </span>
              </p>
            </div>
            <div className="closeCart" onClick={() => setCart("hide")}>
              <p>X</p>
            </div>
          </div>

          {getTotalAmount()===0 ? <CartMessg/> : <></>}

          <div className="displayItems">
            {products.map((item, index) => {
              if(cartItem[item.id]>0){
                return (
                  <CartItem key={index} item={item} />
                )
              }
            })}
          </div>

          {getTotalAmount()===0 ? <></> : <CartAmountSummary/>}
        </div>
      </div>
    </>
  );
};

export default CartItems;
