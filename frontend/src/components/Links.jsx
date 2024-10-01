import React, { useContext } from 'react';
import './Links.css';
import { ProductList } from '../ItemStore.jsx/Context';
import { Link } from 'react-router-dom';

const Links = ( {setCart} ) => {
  const { cartItem, noOfCartItem } = useContext(ProductList);

  return (
    <div>
      <div className="main-links flex">
        <div className="category flex">
          <i className="fa-solid fa-list"></i>
          <p>Select Category</p>
        </div>
        <ul className="flex">
          <Link to="/" className="active">Home</Link>
          <li>New Product</li>
          <li>Feature Product</li>

          <div className="dropdown">
            <li className="dropbtn">Blog<i className="fa-solid fa-angle-down"></i></li>
            <div className="dropdown-content">
              {/* BLOG LINK DROPDOWN */}
              <div className="blog-link">
                <a href="#">Our Blog</a>
              </div>
              <div className="blog-link">
                <a href="#">Our Blog Two No Sidebar</a>
              </div>
              <div className="blog-link">
                <a href="#">Our Blog with Left Sidebar</a>
              </div>
              <div className="blog-link">
                <a href="#">Our Blog with Right Sidebar</a>
              </div>
              <div className="blog-link">
                <a href="#">Blog Detail View</a>
              </div>
              <div className="blog-link">
                <a href="#">Blog Detail View with Sidebar</a>
              </div>
            </div>
          </div>


          <div className="dropdown">
            <li className="dropbtn">Pages<i className="fa-solid fa-angle-down"></i></li>
            <div className="dropdown-content">
              {/* PAGE LINK DROPDOWN */}
                <div className="dropdown-links">
                  <div className="pages-link">
                    <a href="#">Account</a>
                  </div>
                  <div className="pages-link">
                    <a href="#">About Us</a>
                  </div>
                  <div className="pages-link">
                    <a href="#">Online Shop</a>
                  </div>
                  <div className="pages-link">
                    <a href="#">Single Product View</a>
                  </div>
                  <div className="pages-link">
                    <Link to="/checkout">Checkout</Link>
                  </div>
                  <div className="pages-link">
                    <a href="#">Product Request</a>
                  </div>
                  <div className="pages-link">
                    <a href="#">Order Placed</a>
                  </div>
                  <div className="pages-link">
                    <a href="#">Bill Slip</a>
                  </div>
                  <div className="pages-link">
                    <a href="#">Sign In</a>
                  </div>
                  <div className="pages-link">
                    <a href="#">Sign Up</a>
                  </div>
                  <div className="pages-link">
                    <a href="#">Forgot Password</a>
                  </div>
                </div>
            </div>
          </div>

          <Link to="/contact">Contact Us</Link>
        </ul>
        
        <div className="cart-btn flex" onClick={()=>setCart("show")}>
          <i className="fa-solid fa-cart-shopping"><span className="noOfItem">{noOfCartItem().length===0?"":noOfCartItem().length
            }</span></i>
          <p>Cart</p>
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>
    </div>
  )
}

export default Links
