import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./AboutSection.css";
import { Tooltip } from "react-tooltip";
import { Fade } from 'react-awesome-reveal';
import { Row, Col } from "react-bootstrap";

const AboutSection = () => {
  const icons = {
  lane1:{
    skill1: {
      link: "html.png",
      title: "HTML",
      id: "html"
    },
    skill2: {
      link: "css.png",
      title: "CSS",
      id: "css"
    },
    skill3: {
      link: "bootstrap.png",
      title: "Bootstrap",
      id: "bootstrap"
    }
  },
  lane2:{
    skill1: {
      link: "js.png",
      title: "JavaScript",
      id: "javascript"
    },
    skill2: {
      link: "typescript.png",
      title: "TypeScript",
      id: "typescript"
    },
    skill3: {
      link: "python.png",
      title: "Python",
      id: "python"
    }

  },
  lane3:{
    skill1: {
      link: "react.png",
      title: "ReactJS",
      id: "react"
    },
    skill2: {
      link: "node.png",
      title: "NodeJS",
      id: "node"
    },
    skill3: {
      link: "docker.png",
      title: "Docker",
      id: "docker"
    }

  },
  lane4:{
    skill1: {
      link: "databases.png",
      title: "MongoDB, MySQL, PostgreSQL, Etc.",
      id: "databases"
    },
    skill2: {
      link: "figma.png",
      title: "Figma",
      id: "figma"
    },
    skill3: {
      link: "git.png",
      title: "GIT",
      id: "bootstrap"
    }
  }
  
  }
  return (
    <>
      <Card.Body className="CardBodyArea AboutSection">
        <Container className="ContainerAboutus">
          <Row>
            <Col lg={6}>
            <Fade direction='left'>
              <div className="titleAbout">Life in a Nutshell</div>
              <div className="greenyellowline"></div>
              <div className="AboutMeDetails">
                Front-End Developer with a strong focus on creating seamless
                user experiences, particularly through my expertise in React JS.
                My proficiency in this framework is complemented by a solid
                foundation in HTML, CSS, and JavaScript, allowing me to
                construct responsive, intuitive web interfaces.
                <br />
                <br />
                I have a robust skill set that includes advanced React JS
                development, ensuring dynamic and efficient web applications.
                Additionally, my skills extend to Node.js, Express.js,
                TypeScript and Docker, enhancing my capacity to develop, scale,
                and maintain full-stack solutions.
                <br />
                <br />
                In my pursuit of comprehensive skill enhancement, I am also
                engaged in a Master's program in Data Science. This academic
                endeavour not only broadens my analytical capabilities but also
                equips me to infuse data-driven methodologies into the
                development process, ensuring that my web solutions are both
                innovative and impactful.
                <br />
                <br />
                With a commitment to the latest technologies and best practices,
                and a specialised focus on React JS, I am poised to deliver
                sophisticated, data-enhanced web solutions. Let's connect to
                discuss how my expertise can contribute to the evolution of your
                digital presence.
              </div>
              </Fade>
            </Col>
            
            <Col lg={6}>
            <Fade direction='right'>
              <div className="titleAbout">Skillz that Pay the Billz</div>
              <div className="greenyellowline"></div>

              <div className="Skills">
              {Object.keys(icons).map((laneKey) => (
        <div key={laneKey} className="SkillsLane">
          {Object.keys(icons[laneKey]).map((key) => (
            <div
              key={icons[laneKey][key].id}
              className="Skill"
              data-tooltip-id={icons[laneKey][key].id}
              data-tooltip-content={icons[laneKey][key].title}
              data-tooltip-place="top"
            >
              <img
                src={`/icons/${icons[laneKey][key].link}`}
                alt={icons[laneKey][key].title}
              />
              <Tooltip id={icons[laneKey][key].id} />
            </div>
          ))}
        </div>
      ))}
              </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </>
  );
};

export default AboutSection;
