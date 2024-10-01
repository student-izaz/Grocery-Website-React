import React from 'react';
import './Categories.css';

const Categories = () => {
  return (
    <div className="categories">
        <div className="heading">
          <button>Shop By</button>
          <h2>Categories</h2>
        </div>
        <div className="cate_slider">
          <div className="cate_option">
            <img src="images/c3.avif" />
          </div>
          <div className="cate_option">
            <img src="images/c1.avif" alt="" />
          </div>
          <div className="cate_option">
            <img src="images/c2.avif" alt="" />
          </div>
          <div className="cate_option">
            <img src="images/c4.avif" alt="" />
          </div>
          <div className="cate_option">
            <img src="images/c5.jpg" alt="" />
          </div>
          <div className="cate_option">
            <img src="images/c6.avif" alt="" />
          </div>
          <div className="cate_option">
            <img src="images/c7.avif" alt="" />
          </div>
          <div className="cate_option"><img src="images/c8.avif" alt="" /></div>
        </div>
    </div>
  )
}

export default Categories
