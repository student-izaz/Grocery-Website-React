import React from 'react';
import './Footer.css';

function Footer() {
  
  return (
    <footer className="footer">
          <div className="row">
            <div className="col">
              <h5>Useful Links</h5>
              <ul className="nav flex-column">
                <li className=""><a href="#" className="nav_link">Home</a></li>
                <li className=""><a href="#" className="nav_link">Features</a></li>
                <li className=""><a href="#" className="nav_link">Pricing</a></li>
                <li className=""><a href="#" className="nav_link">FAQs</a></li>
                <li className=""><a href="#" className="nav_link">About</a></li>
              </ul>
            </div>
      
            <div className="col">
              <h5>Categories</h5>
              <ul className="nav flex-column">
              <li className=""><a href="#" className="nav_link">Fruits and Vegetables</a></li>
              <li className=""><a href="#" className="nav_link">Grocery & Staples</a></li>
              <li className=""><a href="#" className="nav_link">Dailry & Eggs</a></li>
              <li className=""><a href="#" className="nav_link">Beverages</a></li>
              <li className=""><a href="#" className="nav_link">Snacks</a></li>
              <li className=""><a href="#" className="nav_link">Home Care</a></li>
              <li className=""><a href="#" className="nav_link">Noodles & Sauces</a></li>
              </ul>
            </div>
      
            <div className="col">
              <h5>Top Cities</h5>
              <ul className="nav flex-column">
                <li><a href="#" className="nav_link">Gurugram</a></li>
                <li><a href="#" className="nav_link">New Delhi</a></li>
                <li><a href="#" className="nav_link">Bangaluru</a></li>
                <li><a href="#" className="nav_link">Mumbai</a></li>
                <li><a href="#" className="nav_link">Hyderabad</a></li>
                <li><a href="#" className="nav_link">Ludhiana</a></li>
                <li><a href="#" className="nav_link">Kolkata</a></li>
              </ul>
            </div>
      
            <div className="col">
              <div className="download-banner">
                <h5>Download App</h5>
                <div className="down-opt">
                  <div className="opt">
                    <img src="images/googlePlay.jpg"/>
                  </div>
                  <div className="opt">
                    <img src="images/app store.png"/>
                  </div>
                </div>
              </div>

              <div className="payment-banner">
                <h5>Payment Method</h5>
                <div className="pay-opt">
                  <div className="opt">
                    <img src="images/googlepay.png"/>
                  </div>
                  <div className="opt">
                    <img src="images/apppay.jpg"/>
                  </div>
                  <div className="opt">
                    <img src="images/visa.png"/>
                  </div>
                  <div className="opt">
                    <img src="images/pay apl.avif"/>
                  </div>
                </div>
              </div>

              <form>
                  <h5>Newsletter</h5>
                <div className="newsletter">
                  <input type="text" className="form-control"/>
                  <button className="btn" type="button"><i className="fa-regular fa-paper-plane"></i></button>
                </div>
              </form>
            </div>
          </div>
      
          <div className="xyz">
            <p>© 2024 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled">
              <li><a className="" href="#"></a></li>
              <li><a className="" href="#"></a></li>
              <li><a className="" href="#"></a></li>
            </ul>
          </div>
        </footer>
  )
}

export default Footer
