import React, { useState,useEffect,useRef } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./ContactMe.css";
import { Row, Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ContactMe = () => {

  const submitMessageRef = useRef();

  const [isHidden, setisHidden] = useState(true);
  const [SubmitMessage, setSubmitMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNo: "",
    question: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear error message when the user starts typing
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form fields
    const newErrors = {};
    if (!formData.firstname.trim()) {
      newErrors.firstname = "First Name is required";
    }
    if (!formData.lastname.trim()) {
      newErrors.lastname = "Last Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid Email Address";
    }
    if (!formData.phoneNo.trim()) {
      newErrors.phoneNo = "Phone Number is required";
    } else if (!/^\d+$/.test(formData.phoneNo)) {
      newErrors.phoneNo = "Phone Number should only contain numbers";
    }
    if (!formData.question.trim()) {
      newErrors.question = "Query is required";
    }

    // If there are errors, set them and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setIsLoading(true); // Set loading state to true
      // Form is valid, perform form submission logic here
      console.log("Form submitted:", formData);
    
      // Send email using Email.js API
      const template_params = {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        phone: formData.phoneNo,
        query: formData.question,
      };
      try {
        const result = await emailjs.send(
          "service_sczhf8g",
          "template_z3xh099",
          template_params,
          "5SXRj8NkoXu-ob-7z"
        );
        if (result.status === 200) {
          setSubmitMessage("Contact Request Successfully Submitted");
        } else {
          setSubmitMessage("Contact Request Failed to Submit");
        }
      } catch (error) {
        console.error("Error:", error);
        setSubmitMessage("Contact Request Failed to Submit");
      } finally {
        setisHidden(false);
        ToggleSubmitMessage();
        setIsLoading(false);




      }
      // Reset form data after submission if needed
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phoneNo: "",
        question: "",
      });
    }
  };
  const ToggleSubmitMessage = ()  => {
    const submitMessage = submitMessageRef.current;
    if(!(submitMessage.classList.contains("hidden"))){
        submitMessage.classList.add('hidden');
        setisHidden(true);
    }
    else{
        submitMessage.classList.remove('hidden');
        setisHidden(false);
    }
}
useEffect(() => {
  if (!isHidden) {
    const timeoutId = setTimeout(() => {
      ToggleSubmitMessage();
      setisHidden(true);
    }, 5000);

    return () => clearTimeout(timeoutId); // Clear timeout on component unmount
  }
}, [isHidden]);

  return (
    <Card.Body className="CardBodyArea DetailsAboutMeSec" id="contactSection">
      <Container className="ContainerAboutus">
        <Row>
          <Col lg={6}>
            <Fade direction="left">
              <div className="titleAboutDetails">
                Have <span className="contactQuestiontitle">Questions?</span>
              </div>

              <div className="contactMeDets">
                <div className="title">Get in touch!</div>
                <div className="description">
                  Contemplating a new project, pondering over a tricky problem,
                  or interested in discussing job opportunities? Let's make
                  things happen!
                  <br />
                  <br />
                  Use the form on this page or get in touch by other means.
                </div>
                <div className="socials">
                  <div className="title">Accounts:</div>
                  <div className="accounts">
                    <a
                      className="account"
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/in/asadmasoodchaudhry/"
                    >
                      <img src="/icons/linkedin.png" alt="LinkedIn" />
                    </a>
                    <a
                      className="account"
                      rel="noreferrer"
                      target="_blank"
                      href="https://github.com/asadmasoodchaudhry99"
                    >
                      <img src="/icons/github.png" alt="GitHub" />
                    </a>
                    <a
                      className="account"
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.instagram.com/asadmasoodchaudhry/"
                    >
                      <img src="/icons/instagram.png" alt="Instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
          </Col>
          <Col lg={6}>
            
              <form className="formContact" onSubmit={handleSubmit}>
              <Fade cascade direction="right">
                <Row>
                
                  <Col lg={6}>
                    <div className="inputContactMe">
                      <input
                        className="form-control "
                        name="firstname"
                        id="firstname"
                        placeholder="First Name(s)"
                        type="text"
                        value={formData.firstname}
                        onChange={handleChange}
                      />
                      {errors.firstname && (
                        <span className="errorMessage">{errors.firstname}</span>
                      )}
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="inputContactMe">
                      <input
                        className="form-control"
                        name="lastname"
                        id="lastname"
                        placeholder="Last Name"
                        type="text"
                        value={formData.lastname}
                        onChange={handleChange}
                      />
                      {errors.lastname && (
                        <span className="errorMessage">{errors.lastname}</span>
                      )}
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="inputContactMe">
                      <input
                        className="form-control "
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <span className="errorMessage">{errors.email}</span>
                      )}
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="inputContactMe">
                      <input
                        className="form-control "
                        name="phoneNo"
                        id="phoneNo"
                        placeholder="Phone Number"
                        type="text"
                        value={formData.phoneNo}
                        onChange={handleChange}
                      />
                      {errors.phoneNo && (
                        <span className="errorMessage">{errors.phoneNo}</span>
                      )}
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="inputContactMe">
                      <textarea
                        className="form-control "
                        name="question"
                        id="question"
                        placeholder="Enter your query...."
                        value={formData.question}
                        onChange={handleChange}
                      />
                      {errors.question && (
                        <span className="errorMessage">{errors.question}</span>
                      )}
                    </div>
                  </Col>

                  <Col lg={12}>
                    <div className="ResumeBtn SubmitContact">
                    <div className={`submitLoader ${isLoading ? "" : "hiddenformelement"}`}>
                    <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
   <circle className="path" fill="none" stroke-width="6"  cx="33" cy="33" r="30"></circle>
</svg></div>
<div className={`${isLoading ? "hiddenformelement" : ""}`}>
<button type="submit" className="ResumeDownloadbtn">

                        <p>Submit Request</p>
                      </button>
                      <div className="Bg"></div>
                      </div>
                    </div>
                    
                  </Col>
                  
                </Row>
                </Fade>
              </form>
            
          </Col>
        </Row>
      </Container>
      <div className="SubmissionStatus hidden" 
      ref={submitMessageRef}
      >
        <div className="iconCross" 
        onClick={ToggleSubmitMessage}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
        {SubmitMessage}
      </div>
    </Card.Body>
  );
};

export default ContactMe;
