import React from "react";

export default function ProjectsSD() {
  return (
    <section id="projectsSD">
      <div id="containerprojectsSD" className="containerprojectsSD">
        <h1 className="projecttitle grayf">Apps I've Built</h1>

        <div id="projectgallery">
          <div id="project1" className="projects">
            <div className="projectimage">
              <a
                href="https://omftrainer.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.imgur.com/1ybDtXU.gif"
                  alt="Boeing 737 OMF trainer. Click for Live Site"
                />
              </a>
            </div>
            <div className="projectdescription">
              A Boeing 737 Max Onboard Maintenance Function simulator. It is
              built entirely in vanilla JS, with hand coded CSS to match the
              Boeing OMF system exactly. Used by Aircraft maintenance personnel
              during training to familiarize themselves with navigating the
              system. Pages are being added daily to fill out the simulation.
            </div>
          </div>
          <div id="project2" className="projects">
            <div className="projectdescription">
              A media search website built with React.js and utilizing OMDb API
              to pull and display media information.
            </div>
            <div className="projectimage">
              <a
                href="https://medsearch.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.imgur.com/4R96XUX.png"
                  alt="MediaSearch website - built with React and utilizing OMDb API"
                />
              </a>
            </div>
          </div>
          <div id="project3" className="projects">
            <div className="projectimage">
              <a
                href="https://boatweather.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.imgur.com/q1awlmG.png"
                  alt="Weather app using openweathermap api and unsplash api. click for live site."
                />
              </a>
            </div>
            <div className="projectdescription">
              A Weather app coded in vanilla JS, pulling data from
              openweathermap API and sourcing local background images from
              unsplashed API. Uses localstorage to save where you left off. I am
              still working on fading between the location images for a smoother
              transition.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
