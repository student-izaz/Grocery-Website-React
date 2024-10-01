import React, { useContext } from "react";
import { ProductList } from '../ItemStore.jsx/Context';


function ProductItem({item}) {

  const { cartItem, addToCart, deleteCart } = useContext(ProductList);

  return (
    <>
      <div className="single-item">
        <div className="item-image">
          <img src={item.image} alt="ITEM" />
        </div>
        <div className="item-desc">
          <div className="brand-name">
            <p>{item.brand}</p>
          </div>
          <div className="item-name">
            <p>{item.item_name}</p>
          </div>
          <div className="price-detail">
            <div className="discount-amount">
              <p>₹{item.amount}</p>
            </div>
            <div className="total-amount">
              <p>₹{item.discount_amount}</p>
            </div>
            <div className="discount">
              <p>({item.discount}% OFF)</p>
            </div>
          </div>
          <div className="addAndwishlist">
            {!cartItem[item.id]?
            <div className="add-item-btn" onClick={()=>addToCart(item)}>
              <p>Add +</p>
            </div>:
            <div className="count-item-opt">
              <p className="inc-count" onClick={()=>deleteCart(item)}>-</p>
              <span className="no-of-item-count">{cartItem[item.id]}</span>
              <p className="dec-count" onClick={()=>addToCart(item)}>+</p>
            </div>
            }
            <div className="add-To-Wishlist">
              <i className="fa-solid fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
