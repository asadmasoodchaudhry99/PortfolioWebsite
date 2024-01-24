import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./DetailsAboutMe.css";
import { Row, Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import DetailsModal from "./DetailsModal/DetailsModal";

const DetailsAboutMe = () => {

  const [showModal, setShowModal] = useState(false);
  const [currentExperience, setCurrentExperience] = useState(null); // Store the current experience

  const openModal = (experience) => {
    setCurrentExperience(experience); // Set the current experience before opening the modal
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentExperience(null);
  };
  const education = {
    edu1: {
        title: "Master of Science - MS, Data Science",
        company: "FAU Erlangen-Nürnberg",
        duration: "2022 - 2024",
        location: "Bavaria, Germany"
    },
    edu2: {
        title: "Bachelor of Science - BS, Computer Science",
        company: "Government College University (GCU)",
        duration: "2017 - 2021",
        location: "Punjab, Pakistan",
    },
    edu3: {
        title: "FSc, Pre-Engineering",
        company: "Government College University (GCU)",
        duration: "2015 - 2017",
        location: "Punjab, Pakistan",
    }
  }
  const experience = {
    exp1: {
      title: "Working Student - Software Engineer",
      company: "AI-SSISTANT",
      duration: "Sep 2023 - Present",
      location: "Bavaria, Germany . Remote",
      jobdescription: {
        task1:
          "Collaborate with cross-functional teams to craft intuitive and user-friendly user interfaces (UI) that elevate the overall user experience (UX).",
        task2:
          "Apply industry-leading practices and creative problem-solving to translate UI designs into flawless, functional websites using React.",
        task3:
          "Seamlessly integrate front-end solutions with the backend, creating cohesive, end-to-end web applications.",
        task4:
          "Actively engage in brainstorming sessions to foster innovative ideas for enhancing the product's effectiveness and market impact.",
        task5:
          "Contribute to developing and maintaining scalable, high-performance, and responsive web applications.",
        task6:
          "Work closely with team members to uphold code quality, conduct code reviews, and ensure continuous integration for meeting project milestones.",
        task7:
          "Identify and resolve technical issues to guarantee the seamless and efficient operation of the software.",
        task8:
          "Offer valuable insights and feedback on technical decisions, architectural designs, and development strategies.",
        task9:
          "Support in documentation and knowledge sharing to keep team members well-informed and operating efficiently.",
      },
    },
    exp2: {
      title: "Associate Software Engineer",
      company: "Multilynx",
      duration: "Jan 2021 - Sep 2022 · 1 yr 9 mos",
      location: "Punjab, Pakistan · On-site",
      jobdescription: {
        task1:
          "Conducted requirement elicitation sessions with stakeholders, translating business requirements into detailed specifications and functional requirements.",
        task2:
          "Prepared comprehensive SRS documents encompassing functional requirements, system architecture, use cases, and user stories.",
        task3:
          "Collaborated with design and development teams, ensuring alignment of software features with project objectives and contributing to project planning.",
        task4:
          "Developed high-performance web applications using HTML, CSS, JavaScript, and Python for seamless functionality and user experience.",
        task5:
          "Employed Agile methodologies for on-time and on-scope project delivery.",
        task6:
          "Executed comprehensive testing protocols to optimize performance and maximize user satisfaction.",
        task7:
          "Utilized analytical tools and data visualization techniques to monitor and improve website performance metrics.",
        task8:
          "Collaborated effectively within cross-functional teams to achieve project goals and objectives.",
        task9:
          "Deployed Docker containers, reducing application deployment time by 30%.",
        task10:
          "Automated web testing using Selenium and performed API testing with Postman, reducing testing time by 40%.",
        task11:
          "Translated Figma designs into pixel-perfect and responsive web pages.",
        task12:
          "Integrated dynamic web applications with RESTful APIs for seamless data exchange.",
        task13:
          "Created RESTful endpoints with input and output traffic validation.",
        task14:
          "Contributed to feature design and workflow implementation, increasing development efficiency by 15%.",
        task15:
          "Swiftly resolved bugs in web applications using troubleshooting and debugging skills.",
        task16:
          "Implemented Git for version control, ensuring efficient collaboration and code management.",
        task17:
          "Mentored peers, providing insights and conducting code reviews to ensure quality and best practices.",
        task18:
          "Leveraged Google API Services, specifically the Places API, for seamless integration of location-based functionality into web applications.",
      },
    },
    exp3: {
        title: "Software Integration Associate",
        company: "InstaCare",
        duration: "Jul 2019 - Aug 2019 · 2 mos",
        location: "Punjab, Pakistan · On-site",
        jobdescription: {
          task1:
            "Improved web applications strategically to increase user engagement by 20% and conversion rates by 5% every quarter, driving significant business growth.",
          task2:
            "Built reusable front-end components and libraries to boost efficiency and decrease development time.",
          task3:
            "Incorporated industry-standard security measures into code development, safeguarding confidential information and mitigating risks for both clients and the company.",
          task4:
            "Actively engaged in software testing and quality assurance processes to ensure optimal software functionality and exceptional usability.",
        
        },
      }
  };
  return (
    <Card.Body className="CardBodyArea DetailsAboutMeSec">
      <Container className="ContainerAboutus">
        <Row>
          <Col lg={6}>
            <Fade direction="left" >
              <div className="titleAboutDetails">Employment</div>
              <div className="purpleblueline"></div>
              
              <div className="Details">
              <Fade direction="left" cascade >
                {Object.values(experience).map((exp, index) => (
                  <div key={index} className="Detail">
                    <div className="CodeIcon">
                      <span className="codeTag">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="3em"
                          height="3em"
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
                    <div className="Dets" key={index}>
                      <div className="info">
                        <div className="Title">{exp.title}</div>
                        <div className="CompanyName">{exp.company}</div>
                        <div className="others">
                          <div className="duration">{exp.duration}</div>
                          <div className="location">{exp.location}</div>
                        </div>

                        <div className="ReadMoreButton" onClick={() => openModal(exp)}>
                          
                          Read More
                        </div>
                      </div>
                  
                    </div>
                  </div>
                ))}
                                        {currentExperience && (
                          <DetailsModal
                            show={showModal}
                            onHide={closeModal}
                            experienceData={currentExperience}
                          />
                        )}
                        </Fade>
              </div>
              
            </Fade>
          </Col>
          <Col lg={6}>
            <Fade direction="right">
              <div className="titleAboutDetails">Education</div>
              <div className="purpleblueline"></div>
              
              <div className="Details">
              <Fade direction="right" cascade >
                {Object.values(education).map((edu, index) => (
                  <div key={index} className="Detail">
                    <div className="CodeIcon">
                      <span className="codeTag">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="3em"
                          height="3em"
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
                    <div className="Dets" key={index}>
                      <div className="info">
                        <div className="Title">{edu.title}</div>
                        <div className="CompanyName">{edu.company}</div>
                        <div className="others">
                          <div className="duration">{edu.duration}</div>
                          <div className="location">{edu.location}</div>
                        </div>

                   
                      </div>
                  
                    </div>
                  </div>
                ))}
                </Fade>
              </div>
              
            </Fade>
          </Col>
        </Row>
      </Container>
    </Card.Body>
  );
};

export default DetailsAboutMe;
