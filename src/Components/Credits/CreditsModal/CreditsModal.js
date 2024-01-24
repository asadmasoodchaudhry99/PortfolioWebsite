// Modal.js

import React from "react";
import { Modal } from "react-bootstrap";
import './CreditsModal.css';
import Container from "react-bootstrap/Container";

const CreditsModal = ({ show, onHide, links }) => {
  return (
    
    <Modal show={show} onHide={onHide} centered size="lg" className="ModelDetails">
      <Modal.Header closeButton>
        <h3>Credits:</h3>
      </Modal.Header>
      <Modal.Body>
        <Container>
              {Object.values(links).map((link, index) => (
                <div key={index} className="Credit">
         <div className="CodeIcon">
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
                    </div> <code className="linkcredits">
        <a href={link.url} title={link.title}>{link.innerText}</a>
            </code>
            <br/><br/>
            </div>
      ))}
                
        </Container>
      </Modal.Body>

    </Modal>
  );
};

export default CreditsModal;
