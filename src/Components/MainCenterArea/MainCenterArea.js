import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import { Fade } from 'react-awesome-reveal';
import { TypeAnimation } from 'react-type-animation';

import './MainCenterArea.css';

const MainCenterArea = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contactSection'); // Replace 'contactSection' with the actual ID of your ContactMe section
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    
      <>
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
          <a className="SocialLink" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/asadmasoodchaudhry/">
             <img src='/linkedin.png' alt='Linkedin' width='100'/>
            </a>
          
            <a className="SocialLink" rel="noreferrer" target="_blank" href="https://www.instagram.com/asadmasoodchaudhry/">

            <img src='/instagram.png' alt='Instagram' width='100'/>
              </a>
              
              <a className="SocialLink"  rel="noreferrer" target="_blank" href="https://www.facebook.com/asad.masood3">
              <img src='/facebook.png'  alt='Facebook' width='100'/>
              </a>
             
          </div>
          </Navbar.Text>
        </Navbar.Collapse>
        </Fade>
      </Container>
    </Navbar>
      
      
      <Row>
        <Col lg={7}>
        <Fade direction='left'>
        <div className='BasicInfo'>
        
          <div className="Name">
            <span className='codeTag'>
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
            <span className='typing'>
           <code>
           <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    "",
    1000,
    'Asad Masood',
    
  ]}
  speed={0.3}
  
  repeat={0}
/>
            </code>
            </span>
          </div>
          
          
          <div className='Title'>
            Software Engineer <span>&</span> <br/> Growth Consultant
          </div>
          
          
          <div >
            <div className='SelfDescription'>
            As a Software Engineer and Growth Consultant, I blend technical prowess with business strategy to engineer innovative solutions and drive sustainable growth. My expertise lies in developing scalable software and providing strategic insights for businesses to thrive in dynamic markets.
            </div>

            <div className='CodeServiceDesc'>
              <div className='CodeFragment'>
              <div className='NumberLineCode'> 
              1
              </div>
              <div className='CodeLine'>
                <code>const <span className='variableName'>skills</span> = [</code>
              </div>
              </div>
              <div className='CodeFragment Services'>
              <div className='NumberLineCode'> 
            2
              </div>
              <div className='CodeLine'>
                <code>'Software Development',</code>
              </div>
              </div>
              <div className='CodeFragment Services'>
              <div className='NumberLineCode'> 
              3
              </div>
              <div className='CodeLine'>
              <code>'UI/UX Design',</code>
              </div>
              </div>
              <div className='CodeFragment Services'>
              <div className='NumberLineCode'> 
              4
              </div>
              <div className='CodeLine'>
              <code>'Digital Strategy Consulting'</code>
              </div>
              </div>
              <div className='CodeFragment'>
              <div className='NumberLineCode'> 
              5
              </div>
              <div className='CodeLine'>
              <code>]</code>
              </div>
              </div>
              <div className='CodeFragment'>
              <div className='NumberLineCode'> 
              6
              </div>
              <div className='CodeLine'>
              <code>if (<span className='variableName'>have_a_project</span>) navigate('<span className='ScrollButton' onClick={scrollToContact} >/contact</span>');</code>
              </div>
              </div>
            </div>
            <div className='ResumeBtn'>
          <a href="/Resume/CV-AsadMasoodChaudhry.pdf" rel="noreferrer" target="_blank" className='ResumeDownloadbtn'>
            <p>Download Resume</p>
          </a>
          <div className='Bg'></div>
          </div>
          

          
          </div>
          
        </div>
        </Fade>
        </Col>
        <Col lg={5} >
          <div className='imageMe'>
          <img  src='meimage1rotate.png' alt='Asad Masood Chaudhry' width='650'/>
          </div>
        </Col>
        </Row>
      </Card.Body>
      </>

    
  )
}

export default MainCenterArea
