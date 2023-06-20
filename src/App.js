import React, { Component, useEffect, useState } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App(props) {
  const [state, setState] = useState({});
  const [state2, setState2] = useState({});
  useEffect(() => {
    loadSharedData();
    loadResumeFromPath("res_primaryLanguage.json");
  }, []);

  function loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        setState2({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  function loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        setState({ sharedData: data });
        document.title = `${data?.basic_info?.name}`;
      }?.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  return (
    <div>
      <Header sharedData={state?.sharedData?.basic_info} />
      <About
        resumeBasicInfo={state2?.resumeData?.basic_info}
        sharedBasicInfo={state?.sharedData?.basic_info}
      />
      <Experience
        resumeExperience={state2?.resumeData?.experience}
        resumeBasicInfo={state2?.resumeData?.basic_info}
      />
      <Skills
        sharedSkills={state?.sharedData?.skills}
        resumeBasicInfo={state2?.resumeData?.basic_info}
      />
      <Projects
        resumeProjects={state2?.resumeData?.projects}
        resumeBasicInfo={state2?.resumeData?.basic_info}
      />
      <Footer sharedBasicInfo={state?.sharedData?.basic_info} />
    </div>
  );
}

export default App;
