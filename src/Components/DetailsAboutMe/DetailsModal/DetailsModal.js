// Modal.js

import React from "react";
import { Modal } from "react-bootstrap";
import './DetailsModal.css';
import Container from "react-bootstrap/Container";

const DetailsModal = ({ show, onHide, experienceData }) => {
  return (
    
    <Modal show={show} onHide={onHide} centered size="lg" className="ModelDetails">
      <Modal.Header closeButton>
        
      </Modal.Header>
      <Modal.Body>
        <Container>
        <div className="Dets">
        <div className="info">
        <div className="Title">
      {experienceData.title}
      </div>
      <div className="CompanyName">
      {experienceData.company}
      </div>
      <div className="others">
      <div className="duration">
      {experienceData.duration}
      </div>
      <div className="location">
      {experienceData.location}
      </div>
      </div>
      </div>
      <div className="DetailsPoints">
      {Object.values(experienceData.jobdescription).map((task, taskIndex) => (
        <>
         <code key={taskIndex}>{task}</code>
         <br/><br/>
         </>
         ))}
      </div>
      </div>

        </Container>
      </Modal.Body>

    </Modal>
  );
};

export default DetailsModal;
