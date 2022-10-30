import React from "react";
import airplane from "../img/airplane1.JPG"
import airplane2 from "../img/airplane2.JPG"

export default function ProjectsAvi(){
    return(
        <section id="projectsSD">
            <div id='containerprojectAvi'>
                <h1 className="projecttitle grayf" >
                    Projects 
                </h1>
                <p className="grayf">I have been involved, supervised or planned all stages
                of Aircraft maintence checks, A B C and D checks, Cargo door conversions, interior
                and avionics retrofit and modification programs. I bring a wealth of knowledge of 
                aircraft systems on the Boeing 737, Dash 8 Q400, and ATR42/72 families. As well 
                as effective project management ability to oversee maintenance checks to ensure safety
                and timely delivery.  </p>
                <div id="projectgalleryav">
                    <div id="project1" className="projects"> 
                    <img src={airplane} alt="" width='100%' className="projectimg" />
                    </div>
                    <div id="project2" className="projects">
                        <img src={airplane2} alt=""  width='100%' className="projectimg"/>
                    </div>

                </div>
            </div>
        </section>
    )
}