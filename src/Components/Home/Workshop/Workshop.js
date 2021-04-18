import React from "react";
import "./Workshop.css";
import gallery_1 from "../../../Images/workshop/gallery_1.jpg";
import gallery_2 from "../../../Images/workshop/gallery_2.jpg";
import gallery_3 from "../../../Images/workshop/gallery_3.jpg";
import gallery_4 from "../../../Images/workshop/gallery_4.jpg";
import gallery_5 from "../../../Images/workshop/gallery_5.jpg";
import gallery_6 from "../../../Images/workshop/gallery_6.jpg";
import { Carousel, Col, Row } from "react-bootstrap";

const Workshop = () => {
  return (
    <div className="workshop_container">
      <h2>Workshop collection</h2>
      <div className="workshop_box">
        <Carousel className="d-flex align-items-center">
          <Carousel.Item>
            <Row>
                <Col md={4}>
                    <img src={gallery_1} alt=""/>
                </Col>
                <Col md={4}>
                <img src={gallery_2} alt=""/>
                </Col>
                <Col md={4}>
                <img src={gallery_3} alt=""/>
                </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
          <Row>
                <Col md={4}>
                    <img src={gallery_4} alt=""/>
                </Col>
                <Col md={4}>
                <img src={gallery_5} alt=""/>
                </Col>
                <Col md={4}>
                <img src={gallery_6} alt=""/>
                </Col>
            </Row>
          </Carousel.Item>

        </Carousel>
      </div>
    </div>
  );
};

export default Workshop;
