import React from "react";
import { Link } from "react-router-dom";
import "./HeaderMain.css";
const HeaderMain = () => {
  return (
    <section className="main_header">
      <div className="header_box">
        <div className="header_content col-lg-5 col-md-7 p-5">
          <h1>Repair Your Laptop Mac & Computer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium quisquam ipsum ratione harum repellendus ad voluptate
            soluta officia perspiciatis doloremque.
          </p>
          <Link to="/contact-us">
            <button class="btn-main">Contact Us</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeaderMain;
