import React from "react";
import "./About.css";
import aboutImage from "../../../Images/aboutPhoto.jpg";
import abouticon1 from "../../../Images/about_icon1.svg";
import abouticon2 from "../../../Images/about_icon2.svg";

const About = () => {
  return (
    <section className="about_container">
      <div className="about_box">
       <div className="row">
       <div className="col-md-6">
           <div className="box_image">
           <img src={aboutImage} alt="" />
           </div>
        </div>

        <div className="about_content col-md-6 mt-3">
          <h2>Welcome to Repair Geek</h2>
          <div className="content_box">
            <img src={abouticon1} alt="" />
            <div>
                <h5>Our Mission</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
                autem. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="content_box">
            <img src={abouticon2} alt="" />
            <div>
                <h5>Professional Team</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
                autem. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
       </div>
      </div>
    </section>
  );
};

export default About;
