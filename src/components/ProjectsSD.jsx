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
              system.
            </div>
          </div>
          <div id="project2" className="projects">
            <div className="projectdescription">
              A Media search website built with React.js and utilizing OMDb API
              to pull Poster, Title, Type of media, and Year made
            </div>
            <div className="projectimage">
              <a
                href="https://medsearch.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.imgur.com/8Yf5uNe.png"
                  alt="MediaSearch website - built with React and utilizing OMDb API"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
