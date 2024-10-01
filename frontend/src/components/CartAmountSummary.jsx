import React, { useContext } from "react";
import { ProductList } from '../ItemStore.jsx/Context';
import { Link } from "react-router-dom";

function CartAmountSummary() {

  const { getTotalAmount } = useContext(ProductList);
  // console.log(cartItem)

  // const delvChrg = 100;
  // let totalAmount = 0;
  // cartItem.map((item)=>{
  //   totalAmount = item.item.discount_amount + totalAmount;
  // });


  return (
    <div>
      <div className="cartTotalAmount">
        <div className="delivery_charge">
          <div className="txt1">Delivery Charge</div>
          <div className="amount1">₹100+</div>
        </div>
        <div className="totalAmount">
          <div className="txt">
            <p>Total Amount</p>
          </div>
          <div className="amount">₹{getTotalAmount()+100}</div>
        </div>
        <div className="checkout">
          <p>
            <Link to="/checkout">Proceed To Checkout</Link>
          </p>

        </div>

      </div>
      
    </div>
  );
}

export default CartAmountSummary;
