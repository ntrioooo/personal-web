import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import imgProject from "../../project-1.png";

function CardProject() {
  return (
    <div>
      <Row className="d-flex align-items-center mt-5">
        <Col md={6}>
          <img src={imgProject} alt="" className="img-fluid" />
        </Col>
        <Col md={6}>
          <h1>Project Title</h1>
          <p>Project description goes here</p>
        </Col>
      </Row>
      <Row className="d-flex align-items-center mt-5">
        <Col md={6}>
          <h1>Project Title</h1>
          <p>Project description goes here</p>
        </Col>
        <Col md={6}>
          <img src={imgProject} alt="" className="img-fluid" />
        </Col>
      </Row>
      <Row className="d-flex align-items-center mt-5">
        <Col md={6}>
          <img src={imgProject} alt="" className="img-fluid" />
        </Col>
        <Col md={6}>
          <h1>Project Title</h1>
          <p>Project description goes here</p>
        </Col>
      </Row>
    </div>
  );
}

export default CardProject;
