import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function Contact() {
  return (
    <div className="contact">
      <div className="sub-header">
        <div className="link">
          <Link to="/">Home / </Link>
          <Link
            to="/contact"
            className="Active"
            style={{ color: "rgb(241, 137, 15)" }}
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="contact-area flex-col">
        <div className="heading flex-col rg-2">
          <h2>Submit customer service request</h2>
          <div className="head-text">
            <p>
              If you have a question about our service or have an issue to
              report, please send a request and we will get back to you as soon
              as possible.
            </p>
          </div>
        </div>
        <div className="main flex">
          <div className="contact-form">
            <form action="" className="flex-col rg-3">
              <div className="inputField flex-col rg-2">
                <label htmlFor="">FullName *</label>
                <input type="text" name="name" placeholder="Your Name" />
              </div>
              <div className="inputField flex-col rg-2">
                <label htmlFor="">Email Address *</label>
                <input type="email" name="email" placeholder="Your Email" />
              </div>
              <div className="inputField flex-col rg-2">
                <label htmlFor="">Subject *</label>
                <input type="text" name="sub" placeholder="Subject" />
              </div>
              <div className="inputField flex-col rg-2">
                <label htmlFor="">Message</label>
                <textarea
                  rows={4}
                  cols={15}
                  name="messg"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <button className="submit-btn" type="submit">
                Submit Request
              </button>
            </form>
          </div>
          <div className="contact-location">
            <div className="all-locations flex-col rg-2">

              <div className="locat-option flex-col rg-2">
                <div className="location">
                  <MdOutlineLocationOn className="loca-icon" />
                  <p>Hyderabad</p>
                  <div className="check-icon">
                    <IoCheckmarkCircleOutline />
                  </div>
                </div>
                <div className="about-location">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora unde voluptate aspernatur voluptatum corrupti eos,
                  pariatur quas nostrum reiciendis modi?
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
