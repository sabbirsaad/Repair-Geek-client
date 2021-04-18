import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const FeaturesList = ({data}) => {
  return (
    <div>
      <Card style={{ width: "29rem" }}>
        <Row>
        <Col md={4}>
         <img src="" alt=""/>
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
