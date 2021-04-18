import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ServiceList.css';

const ServicesList = (props) => {
  const {imageURL, name, description, _id } = props.service;
  return (
    <div className="list_container">
      <Card style={{ width: "19rem",border:'none'}} >
        <div className="list-card">
          <img src={imageURL} alt=""/>
        </div>
        {/* <Card.Img variant="top" src={imageURL} /> */}
        <Card.Body>
          <Card.Title style={{textAlign:"center",color:"tomato"}}>{name}</Card.Title>
          <Card.Text className="text-justify">
            {description}
          </Card.Text>
          <Card.Footer style={{border:"none",background:"none",textAlign:"center"}}>
           
            <Link to={`/book/${_id}`}>
              <button className="btn-main">Get Now</button>
            </Link>
          </Card.Footer>
        
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServicesList;
