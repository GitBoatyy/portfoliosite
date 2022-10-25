import React from "react";
import omftrainer from "../img/omfpic.png"
import pi from "../img/pi.gif"


export default function ProjectsSD(){

    return(
        <section id="projectsSD">
            <h1 className="projecttitle grayf" >
                Apps I've Built
            </h1>
            <p className="grayf">Below are some samples of projects I have 
            developed or contributed to, from a Boeing maintenance simulator, 
            a local small business webpage to a pi visualizer.</p>
            <div id="projectgallery">
                <div id="project1" classNa me="projects" > 
                <a href="https://omftrainer.com" target="_blank" rel="noopener noreferrer">
                <img  src={omftrainer} alt="" className="projectimg" width='100%'/>
                </a>
                </div>
                <div id="project2" className="projects">
                    <a href="https://gitboatyy.github.io/pi/" target="_blank" rel="noopener noreferrer">
                        <img src={pi} alt="" width='100%' className="projectimg" />
                    </a>
                </div>
                <div id="project3" className="projects">p3</div>
                <div id="project4" className="projects">p4</div>
                <div id="project5" className="projects">p5</div>
            </div>
        </section>
    )
}