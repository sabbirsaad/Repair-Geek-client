import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import './FeaturesList.css';

const FeaturesList = ({data}) => {
  return (
    <div className="features_container">
      <Card style={{ width: "25rem",border:'none' }}>
        <Row>
        <Col md={4}>
         <img src={data.img} alt=""/>
        </Col>
        <Col md={8} style={{padding:"10px 40px 10px 20px"}}>
        <h4>{data.name}</h4>
        <p className="text-justify">{data.description}</p>
        </Col>
        </Row>
      </Card>
    </div>
  );
};

export default FeaturesList;
