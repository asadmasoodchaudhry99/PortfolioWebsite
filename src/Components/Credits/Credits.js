import React, { useState } from "react";
import "./Credits.css";
import CreditsModal from "./CreditsModal/CreditsModal";

const Credits = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = (experience) => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const links = {
    link1: {
      url: "https://www.flaticon.com/free-icons/react",
      title: "react icons",
      innerText: "React icons created by Kiranshastry - Flaticon",
    },
    link2: {
      url: "https://www.flaticon.com/free-icons/html-5",
      title: "html 5 icons",
      innerText: "Html 5 icons created by Freepik - Flaticon",
    },
    link3: {
      url: "https://www.flaticon.com/free-icons/css-3",
      title: "css 3 icons",
      innerText: "Css 3 icons created by Freepik - Flaticon",
    },
    link4: {
      url: "https://www.flaticon.com/free-icons/javascript",
      title: "javascript icons",
      innerText: "Javascript icons created by Freepik - Flaticon",
    },
    link5: {
      url: "https://www.flaticon.com/free-icons/typescript",
      title: "typescript icons",
      innerText: "Typescript icons created by Freepik - Flaticon",
    },
    link6: {
      url: "https://www.flaticon.com/free-icons/node-js",
      title: "node js icons",
      innerText: "Node js icons created by Freepik - Flaticon",
    },
    link7: {
      url: "https://www.flaticon.com/free-icons/python",
      title: "python icons",
      innerText: "Python icons created by Freepik - Flaticon",
    },
    link8: {
      url: "https://www.flaticon.com/free-icons/docker",
      title: "docker icons",
      innerText: "Docker icons created by Freepik - Flaticon",
    },
    link9: {
      url: "https://www.flaticon.com/free-icons/commit-git",
      title: "commit git icons",
      innerText: "Commit git icons created by Afian Rochmah Afif - Flaticon",
    },
    link10: {
      url: "https://www.flaticon.com/free-icons/bootstrap",
      title: "bootstrap icons",
      innerText: "Bootstrap icons created by Freepik - Flaticon",
    },
    link11: {
      url: "https://www.flaticon.com/free-icons/figma",
      title: "figma icons",
      innerText: "Figma icons created by Freepik - Flaticon",
    },
    link12: {
      url: "https://www.flaticon.com/free-icons/database",
      title: "database icons",
      innerText: "Database icons created by phatplus - Flaticon",
    },
    link13: {
      url: "https://www.flaticon.com/free-icons/github",
      title: "github icons",
      innerText: "Github icons created by Pixel perfect - Flaticon",
    },
    link14: {
      url: "https://www.flaticon.com/free-icons/linkedin",
      title: "linkedin icons",
      innerText: "Linkedin icons created by Freepik - Flaticon",
    },
    link15: {
      url: "https://www.flaticon.com/free-icons/instagram-logo",
      title: "instagram logo icons",
      innerText: "Instagram logo icons created by Laisa Islam Ani - Flaticon",
    },
  };
  
  return (
    <div>
      <div className="creditsButton" onClick={() => openModal(links)}>
        Credits
      </div>
      
      <CreditsModal show={showModal} onHide={closeModal} links={links} />
    </div>
  );
};

export default Credits;
