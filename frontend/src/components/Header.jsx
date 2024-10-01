import React, { useContext, useState, useRef } from "react";
import "./Header.css";
import { ProductList } from "../ItemStore.jsx/Context.jsx";
import { Link } from "react-router-dom";

const Header = ({ setUserToggle, userToggle }) => {

  const {products} = useContext(ProductList);
  const [searchItem, setSearchItem] = useState(products);

  const inputelement = useRef();

  const getElement = () => {
    let val = inputelement.current.value.toUpperCase();

    products.map((item)=>{
     let elm = item.item_name;

     if(elm.toUpperCase().indexOf(val) > -1){
      console.log(item)
      setSearchItem(item)
     }else{
      return "";
     }
    })
  }

  const toggleUser = () => {
    setUserToggle(!userToggle)
  }

  return (
    <>
      <div className="header">
        <Link className="logo" to="/">
          <h3>HARYANA STORE</h3>
          <span>SUPER MARKET</span>
        </Link>
        <div className="searchbar">
          <input
            type="search"
            ref={inputelement}
            onKeyUp={getElement}
            placeholder="Search for Product..."
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="left_part">
          <div className="helpline flex">
            <p>
              <i className="fa-solid fa-phone"></i>18000-203-204
            </p>
            <p>
              <i className="fa-solid fa-gift"></i>Offers
            </p>
            <p>
              <i className="fa-solid fa-circle-question"></i>Help
            </p>
          </div>
          <div className="wishlist flex">
            <i className="fa-solid fa-heart"></i>
            <span className="noOfWishlistItem">0</span>
          </div>
          <div className="user flex" onClick={toggleUser}>
            <img src="images/user.png" />
            <p>
              John Doe<i className="fa-solid fa-angle-down"></i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
