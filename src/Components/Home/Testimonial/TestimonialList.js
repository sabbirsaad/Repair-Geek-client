import React from "react";
import { Card } from "react-bootstrap";
import "./TestimonialList.css";

const TestimonialList = (props) => {
  const {
    photo,
    serviceName,
    description,
    date,
    name,
    companyName,
  } = props.review;
  console.log(photo);

  return (
    <div>
      <Card style={{ width: "21rem" }}>
        <div className="testimonial_card">
        <img src={photo} alt="" />
        </div>
        <Card.Body>
          <Card.Title className="text-center text-info">{serviceName}</Card.Title>
          <Card.Text className="text-justify">{description}</Card.Text>
          <Card.Footer
            style={{ border: "none", background: "none", textAlign: "center" }}
          >
            <div className="card_body">
              <p>
                {name} | <span>{companyName}</span>
              </p>
              <p>{new Date(date).toDateString()}</p>
              
            </div>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TestimonialList;
