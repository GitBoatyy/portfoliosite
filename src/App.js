import "./App.css";
import AboutSD from "./components/AboutSD";
import ContactSD from "./components/ContactSD";
import NavbarSD from "./components/NavbarSD";
import ProjectsSD from "./components/ProjectsSD";
import SkillsSD from "./components/SkillsSD";
import AboutAvi from "./components/AboutAvi";
import ProjectsAvi from "./components/ProjectsAvi";
import SkillsAvi from "./components/SkillsAvi";
import email from "./img/email.png";
import github from "./img/github.png";
import linkedin from "./img/linkedin.png";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <div className="container1">
        <div id="frontpage">
          <a href="#aboutsd" className="frontlink rightline" id="softwaredev">
            Software Development
          </a>
          <a href="#aboutavi" className="frontlink leftline" id="aviation">
            Aircraft Maintenance
          </a>
        </div>
      </div>
      <NavbarSD />
      <AboutSD />
      <ProjectsSD />
      <SkillsSD />
      <AboutAvi />
      <ProjectsAvi />
      <SkillsAvi />
      <ContactSD />
      <div id="footer">
        <a href="mailto:bcou94@gmail.com">
          <img src={email} className="footerimg" alt="" />
        </a>
        <a href="https://github.com/GitBoatyy">
          <img src={github} className="footerimg" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/bcoulthard94/">
          <img src={linkedin} className="footerimg" alt="" />
        </a>
      </div>
    </div>
  );
}

export default App;
