import React from "react";


export default function ProjectsSD(){

    return(
        <section id="projectsSD">
            <h1 className="projecttitle grayf" >
                Apps I've Built
            </h1>
            <p className="grayf">Below are some samples of projects I have 
            developed or contributed to, from a Boeing maintenance simulator, 
            to a local small business webpage to a pi visualizer.</p>
            <div id="projectgallery">
                <div id="project1" className="projects" > 
                <a href="https://omftrainer.com" target="_blank" rel="noopener noreferrer">
                <img  src='https://i.imgur.com/ui3Gbfm.gif' alt="" className="projectimg" width='100%'/>
                </a>
                </div>
                <div id="project2" className="projects">
                    <a href="https://gitboatyy.github.io/pi/" target="_blank" rel="noopener noreferrer">
                        <img src='https://i.imgur.com/FI4Uju8.gif' alt="" width='100%' className="projectimg" />
                    </a>
                </div>
                <div id="project3" className="projects">p3</div>
                <div id="project4" className="projects">p4</div>
                <div id="project5" className="projects">p5</div>
            </div>
        </section>
    )
}