import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./Projects.css";
import { Row, Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import ProjectModal from "./ProjectModal/ProjectModal";

const Projects = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentProject, setCurrentProject] = useState(null); // Store the current experience
  
    const openModal = (project) => {
    setCurrentProject(project); // Set the current experience before opening the modal
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
      setCurrentProject(null);
    };
    const projects = {
        pro1: {
          title: "Flaty",
          company: "AI-SSISTANT",
          desc: {
            heading: "Flaty - Innovative Apartment Search Web Application",
            description: "As a developer for the Flaty project, I played a key role in crafting an innovative apartment search web application tailored for the German market. Leveraging my expertise in React (TypeScript), Node.js, and Express.js, I made significant contributions to the project.",
            keycontributions: {
                k1: "Spearheaded the design and implementation of the user-friendly front end using React in TypeScript. Leveraged Figma for designing an intuitive and responsive interface, ensuring a seamless user experience. Notably, the application was designed and implemented to cater to both German and English-speaking users.",
                k2: "Developed an engaging landing page that effectively communicated Flaty's features and benefits to potential users, contributing to increased user engagement.",
                k3: "Engineered a robust back end using Node.js and Express.js to handle contact requests submitted by customers. This backend facilitated the seamless processing of apartment search requests.",
                k4: "Implemented a backend solution that automated the processing of information submitted through the contact form. This information, although I wasn't directly involved in the AI model aspect, was utilized by an advanced AI model to enhance the accuracy and personalization of apartment search results.",
                k5: "Implemented Dockerization for the entire application, ensuring easy deployment, scalability, and consistent performance across various environments."
            },
            ending: "Flaty stands as a testament to my skills in both design and development, showcasing my ability to deliver impactful and user-centric applications within the real estate domain.",
            image: "/projects/flaty.jpg"
          }

      
        },
        pro2: {
          title: "TaxiAir",
          company: "Multilynx",
          desc: {
            heading: "TaxiAir - Netherlands-Based Taxi Services Platform",
            description: "As the lead developer for TaxiAir, I undertook the end-to-end development of a comprehensive taxi services platform based in the Netherlands. My role encompassed not only designing an intuitive user interface but also implementing robust functionalities on both the front end and back end.",
            keycontributions: {
              k1: "Designed visually appealing and user-friendly webpages using Figma, ensuring a seamless and delightful experience for users seeking taxi services in the Netherlands.",
              k2: "Developed the front end using a combination of HTML, CSS, Bootstrap, and JavaScript. The responsive design ensures optimal user experiences across various devices.",
              k3: "Utilized the Python Django framework to develop a powerful back end that handles the core functionalities of TaxiAir. The backend includes features such as user authentication, ride booking, and order management.",
              k4: "Implemented a robust database solution using Postgres, ensuring efficient data storage, retrieval, and management for the platform.",
              k5: "Deployed the entire application on the Heroku platform, ensuring scalability and accessibility for users across the Netherlands.",
              k6: "Provided customers with a comprehensive dashboard, equipped with all the necessary CRUD (Create, Read, Update, Delete) operations. This dashboard empowers users to manage their taxi bookings seamlessly."
            },
            ending: "TaxiAir stands as a testament to my proficiency in full-stack development, from conceptualizing and designing user interfaces to implementing complex functionalities using a Django back end. The successful deployment on Heroku ensures that TaxiAir is easily accessible to users, contributing to a positive and efficient taxi service experience in the Netherlands.",
            image: "/projects/taxiair.jpg"
          }
          
       
        },
        pro3: {
            title: "Garaj - Cloud Platform By Jazz",
            company: "Multilynx",
            desc: {
                heading: "Garaj Cloud - Pakistan's First Cloud Service",
                description: "As the frontend developer behind Garaj Cloud, I played a pioneering role in the end-to-end development of Pakistan's inaugural cloud service. My responsibilities extended beyond crafting an intuitive user interface to encompass the implementation of robust frontend functionalities.",
                keycontributions: {
                  k1: "Conducted thorough requirement elicitation sessions with stakeholders to gather and analyze software requirements and project objectives.",
                  k2: "Translated business requirements into detailed specifications and functional requirements, ensuring clarity and alignment with project goals.",
                  k3: "Prepared comprehensive SRS documents encompassing functional requirements, system architecture, use cases, and user stories.",
                  k4: "Collaborated with design and development teams to ensure the alignment of software features with project objectives, contributing to project planning for timely and successful delivery.",
                  k5: "Developed high-performance, visually appealing web applications using a combination of HTML, CSS, JavaScript, and Python for seamless functionality and unparalleled user experience.",
                  k6: "Employed Agile methodologies to ensure on-time and on-scope delivery of projects consistently.",
                  k7: "Executed comprehensive testing protocols to achieve optimal performance and maximize user satisfaction.",
                  k8: "Utilized analytical tools and data visualization techniques to continuously monitor, measure, analyze, and communicate website performance metrics, resulting in improved user experience, increased conversion rates, and maximized revenue growth."
                },
                ending: "Garaj Cloud stands as a testament to my proficiency in frontend development and strategic collaboration, marking a groundbreaking milestone as Pakistan's inaugural cloud service.",
                link: "https://garajcloud.com/"
              }
  
          },
          pro4: {
            title: "Honda Atlas Cars Pakistan Limited",
            company: "Multilynx",
            desc: {
                heading: "Driving Online Presence: Honda Atlas Cars Pakistan Limited Website Development",
                description: "During my tenure at Multilynx, I spearheaded the end-to-end development of the official website for our esteemed client, Honda Atlas Cars Pakistan Limited. My role involved collaborative efforts within cross-functional teams to ensure the successful achievement of project goals and objectives.",
                keycontributions: {
                  k1: "Implemented Docker containers for consistent and reproducible application deployment, resulting in a 30% reduction in deployment time.",
                  k2: "Proficiently automated web testing using Selenium and conducted API testing with Postman, effectively reducing testing time by 40%.",
                  k3: "Translated Figma designs into pixel-perfect and responsive web pages, ensuring a visually appealing and seamless user experience.",
                  k4: "Integrated dynamic web applications with RESTful APIs for seamless data exchange, enhancing overall functionality.",
                  k5: "Developed RESTful endpoints with input and output traffic validation, contributing to the reliability and stability of the applications.",
                  k6: "Contributed to feature design and workflow implementation in an agile environment, resulting in a 15% increase in development efficiency.",
                  k7: "Swiftly resolved bugs in web applications using expert troubleshooting and debugging skills, ensuring optimal performance.",
                },
                ending: "My pivotal role in developing the website for Honda Atlas Cars Pakistan Limited exemplifies my ability to drive innovation, collaborate effectively, and contribute meaningfully to high-impact projects within dynamic and agile environments.",
                
            }
          },
          pro5: {
            title: "Honda Survey Form Application",
            company: "Multilynx",
            desc: {
                heading: "Development of Honda Survey Form Application",
                description: "As a developer at Multilynx, I played a key role in developing the Honda Survey Form Application for Honda Pakistan. This application served as a comprehensive survey and feedback management system, featuring a user-friendly survey form and a dynamic dashboard to facilitate real-time customer feedback tracking.",
                keycontributions: {
                  k1: "Led the entire development process of the Honda Survey Form Application to ensure seamless functionality and a positive user experience.",
                  k2: "Designed and implemented an intuitive survey form, enabling structured and efficient gathering of customer feedback.",
                  k3: "Developed a robust dashboard allowing Honda Pakistan to track and analyze customer feedback in real-time for informed decision-making.",
                  k4: "Implemented features providing real-time insights into customer feedback, supporting prompt and informed decision-making by Honda Pakistan.",
                  k5: "Ensured a user-friendly interface for both the survey form and the dashboard, enhancing accessibility and usability for Honda Pakistan's staff.",
                  k6: "The application significantly contributed to Honda Pakistan's efforts to streamline feedback collection, analysis, and response for enhanced customer service.",
                },
                ending: "My leadership in developing the Honda Survey Form Application reflects a commitment to leveraging technology for improved customer service and data-driven decision-making.",
            
            }
          },

          
      };
  return (
    <Card.Body className="CardBodyArea AboutSection">
      <Container className="ContainerAboutus">
      <Row>
            <Col lg={6}>
            <Fade direction='left'>
              <div className="titleAbout">Projects</div>
              <div className="greenyellowline"></div>
        Projects
        </Fade>
        </Col>
        <Col lg={6}>

        </Col>
        </Row>
        <Row>
        {Object.values(projects).map((proj, index) => (
            <Col key={index} lg={6}>
            <div className="Details">
              <Fade direction="left" cascade >
                
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
                        <div className="Title">{proj.title}</div>
                        <div className="CompanyName">{proj.company}</div>
                  

                        <div className="ReadMoreButton" onClick={() => openModal(proj)}>
                          
                          Read More
                        </div>
                      </div>
                  
                    </div>
                  </div>
                
              
                        </Fade>
             
              </div>
            </Col>
            ))}
           {currentProject && (
                            <ProjectModal
                            show={showModal}
                            onHide={closeModal}
                            projectData={currentProject}
                            />
                    
                        )}
        </Row>
        </Container>
        </Card.Body>
  )
}

export default Projects
