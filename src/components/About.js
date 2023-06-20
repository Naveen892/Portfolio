import React, { Component } from "react";
import { Icon } from "@iconify/react";
import nodejs from "@iconify/icons-logos/nodejs-icon";
import reactIcon from "@iconify/icons-logos/react";
import javascript from "@iconify/icons-logos/javascript";
import redux from "@iconify/icons-logos/redux-saga";
import androidstudioIcon from '@iconify/icons-devicon/androidstudio';
import xcodeIcon from '@iconify/icons-logos/xcode';
function About(props) {
  if (props?.sharedBasicInfo) {
    var profilepic = require("../../public/images/" +
      props?.sharedBasicInfo?.image);
  }
  if (props?.resumeBasicInfo) {
    var sectionName = props?.resumeBasicInfo?.section_name?.about;
    var hello = props?.resumeBasicInfo?.description_header;
    var about = props?.resumeBasicInfo?.description;
  }
  console.log("profilepic", profilepic);
  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{ color: "black" }}>
          <span>{sectionName}</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                <img height="170px" src={profilepic} alt="Avatar placeholder" />
                
                <Icon
                  icon={reactIcon}
                  style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                   icon={androidstudioIcon}
                  style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                   icon={xcodeIcon}
                  style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={redux}
                  style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={nodejs}
                  style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                />
                
              </span>
            </div>
          </div>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <span
                    className="iconify"
                    data-icon="emojione:red-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:yellow-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:green-circle"
                    data-inline="false"
                  ></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <br />
                  <span className="wave">{hello} :) </span>
                  <br />
                  <br />
                  {about}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
