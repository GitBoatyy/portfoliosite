import React from "react";
import css3 from "../img/css3.png" 
import git from "../img/git.png"
import html5 from "../img/html5.png"
import javascript from "../img/javascript.png"
import typescript from "../img/typescript.png"
import node from "../img/node-js.png"
import react from "../img/react.png"
import webpack from "../img/webpack.png"


export default function SkillsSD(){
   return(
   <section id="skillsd">
        <h1 className="grayf">Technologies</h1>
        <p className="grayf">I am familiar with a host of languages and technologies 
        focusing on front end development, I continue to explore and learn new areas
        of software development daily to grow my knowledge.</p>
        <div id="skillscontainer">
            <img className="techicon"src={javascript} alt="" />
            <img className="techicon"src={typescript} alt="" />
            <img className="techicon"src={node} alt="" />
            <img className="techicon"src={react} alt="" />
            <img className="techicon"src={css3} alt="" />
            <img className="techicon"src={git} alt="" />
            <img className="techicon"src={html5} alt="" />
            <img className="techicon"src={webpack} alt="" />

        </div>
    </section>
   )
}