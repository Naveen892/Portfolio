import React, { Component, useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

function Projects(props) {
  const [state, setState] = useState();
  let detailsModalShow = (data) => {
    setState({ detailsModalShow: true, deps: data });
  };

  let detailsModalClose = () => setState({ detailsModalShow: false });
  if (props?.resumeProjects && props?.resumeBasicInfo) {
    var sectionName = props?.resumeBasicInfo?.section_name?.projects;
    var projects = props?.resumeProjects?.map(function (projects) {
      const image = require("../../public/images/" + projects?.images[0]);
      return (
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          key={projects?.title}
          style={{ cursor: "pointer" }}
        >
          <span className="portfolio-item d-block">
            <div className="foto" onClick={() => detailsModalShow(projects)}>
              <div>
                <img
                  src={image}
                  alt="projectImages"
                  height="230"
                  style={{
                    marginBottom: 0,
                    paddingBottom: 0,
                    position: "relative",
                  }}
                />
                <span className="project-date">{projects?.startDate}</span>
                <br />
                <p className="project-title-settings mt-3">{projects?.title}</p>
              </div>
            </div>
          </span>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: "black" }}>
          <span>{sectionName}</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto justify-content-center">{projects}</div>
        </div>
        <ProjectDetailsModal
          show={state?.detailsModalShow}
          onHide={detailsModalClose}
          data={state?.deps}
        />
      </div>
    </section>
  );
}

export default Projects;
