import React, { useState, useContext } from 'react';
import { ProductList } from '../ItemStore.jsx/Context';

function CartItem({ item }) {
  const {cartItem, addToCart, deleteCart} = useContext(ProductList);
    
  return (
    <div>
      <div className="carditem">
              <div className="cart_image">
                <img src={item.image} alt="" />
              </div>
              <div className="item_detail cd">
                <div className="item_title"><p>{item.brand}</p></div>
                <div className="item_name">{item.item_name}</div>
                <div className="price-detail cart-price">
                  <div className="discount-amount"><p>₹{item.amount}</p></div>
                  <div className="total-amount"><p>₹{item.discount_amount}</p></div>
                  <div className="discount"><p>({item.discount}% OFF)</p></div>
                </div>
                <div className="item-quantity">
                  <button className="Dec" onClick={()=>deleteCart(item)}>-</button>
                  <p className="qty">{cartItem[item.id]}</p>
                  <button className="Inc" onClick={()=>addToCart(item)}>+</button>
                </div>
              </div>
              <div className="deleteCartitem" onClick={()=>deleteCart(item)}><p>X</p></div>
            </div>
    </div>
  )
}

export default CartItem
