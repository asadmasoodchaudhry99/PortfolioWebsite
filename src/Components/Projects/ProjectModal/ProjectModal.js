// Modal.js

import React from "react";
import { Modal } from "react-bootstrap";
import './ProjectModal.css';
import Container from "react-bootstrap/Container";

const ProjectModal = ({ show, onHide, projectData }) => {
  return (
    
    <Modal show={show} onHide={onHide} centered size="xl" className="ModelDetails">
      <Modal.Header closeButton>
        
      </Modal.Header>
      <Modal.Body>
        <Container>
        <div className="projectinfo">
        <div className="heading">
      {projectData.desc.heading}
      </div>
      <div className="description">
      {projectData.desc.description}
      </div>

      
      <div className="DetailsPoints">
      {Object.values(projectData.desc.keycontributions).map((desc, descIndex) => (
        <>
         <code key={descIndex} className="codeDescriptionProjects">  
         <div>
                      <span className="codeTag">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="none"
                            strokeLinecap="square"
                            strokeMiterlimit="10"
                            strokeWidth="48"
                            d="M184 112l144 144-144 144"
                          ></path>
                        </svg>
                      </span>
                      </div>
                  <div>  {desc} </div></code>
         <br/><br/>
         </>
         ))}
            {projectData.desc.link && (
    <code> <a target="_blank" rel="noreferrer" href={projectData.desc.link}  >Visit the website</a></code>
      )}
      </div>
      {projectData.desc.image && (
      <div className="ImageProject">
        <img src={projectData.desc.image} alt={projectData.title} loading="lazy"/>
      </div>
      )}
       
      </div>

        </Container>
      </Modal.Body>

    </Modal>
  );
};

export default ProjectModal;
