import React from 'react';
import { Card, Col, Container, Navbar, Row } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import "./ErrorPage.css"

const ErrorPage = () => {
  return (
    
    <Container className='mt-20'>
    <Card className='CardMainArea'>
    <Card.Body className='CardBodyArea'>
      <Navbar className="bg-body-transparent">
      <Container>
        <Fade direction='left'>
        <Navbar.Brand href="/">
          <p className='TextLogo'>amc<span className='LogoDot'>.</span></p>
          </Navbar.Brand>
          
        <Navbar.Toggle />
        </Fade>
        <Fade direction='right'>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <div className='LinksSocial'>
          <a className="SocialLink" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/asadmasoodchaudhry/">
             <img src='/linkedin.png' alt='Linkedin' width='100'/>
            </a>
          
            <a className="SocialLink"  rel="noreferrer" target="_blank" href="https://www.instagram.com/asadmasoodchaudhry/">

            <img src='/instagram.png' alt="Instagram" width='100'/>
              </a>
              
              <a className="SocialLink" target="_blank" rel="noreferrer" href="https://www.facebook.com/asad.masood3">
              <img src='/facebook.png' alt='facebook' width='100'/>
              </a>
             
          </div>
          </Navbar.Text>
        </Navbar.Collapse>
        </Fade>
      </Container>
    </Navbar>

    <div className='pagenotfound'>
    <Container>
    <Row>
        <Col lg={6}>
        <Fade direction='left'>
      <div className='Heading'>404 - Not Found</div>
      <div className='Desc'>
      The page you are looking for does not exist.
      </div>
      
      <div className='ResumeBtn'>
          <a href="/" className='ResumeDownloadbtn'>
            <p>Go to HomePage</p>
          </a>
          <div className='Bg'></div>
          </div>
          </Fade>
          </Col>
          <Col lg={6}>
          <Fade direction='up'>
      <div className='Image'>
      <img src='/meimage2.png' alt='Asad Masood Chaudhry' width={500}/>
      </div>
      </Fade>
      </Col>
      </Row>
    </Container>
    </div>
    
      </Card.Body>
  
    </Card>
    </Container>
  );
};

export default ErrorPage;
