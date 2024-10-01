import React from "react";
import './UserToggle.css';

function UserToggle() {
  return (
    <div className="user-toggle">
      <div className="user-options">
        <div className="us-option mode">
          <i className="fa-regular fa-moon"></i>
          <p>Night Mode</p>
          <div className="light-mode Mode">
            <i className="fa-solid fa-toggle-off"></i>
          </div>
        </div>
        <div className="us-option s1">
          <a href="#">
            <i className="fa-solid fa-border-all"></i>
            <p>Dashboard</p>
          </a>
        </div>
        <div className="us-option s1">
          <a href="#">
            <i className="fa-brands fa-first-order"></i>
            <p>My Order</p>
          </a>
        </div>
        <div className="us-option s1">
          <a href="#">
            <i className="fa-solid fa-heart"></i>
            <p>My Wishlist</p>
          </a>
        </div>
        <div className="us-option s1">
          <a href="#">
            <i className="fa-solid fa-location-dot"></i>
            <p>My Address</p>
          </a>
        </div>
        <div className="us-option s1">
          <a href="#">
            <i className="fa-solid fa-dollar-sign"></i>
            <p>My Wallet</p>
          </a>
        </div>
        <div className="us-option s1">
          <a href="#">
            <i className="fa-solid fa-gift"></i>
            <p>Offers</p>
          </a>
        </div>
        <div className="us-option s1">
          <a href="#">
            <i className="fa-solid fa-circle-question"></i>
            <p>FAQ</p>
          </a>
        </div>
        <div className="us-option s1">
          <a href="#">
            <i className="fa-solid fa-lock"></i>
            <p>Logout</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserToggle;
