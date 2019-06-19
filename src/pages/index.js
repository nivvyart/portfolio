import React from "react"
import Title from "../components/title.js"
import Projects from "../components/projects.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/global.css"

export default () => (
  <div style={{ color: `grey` }}>
    <Title />
    <p>
      {" "}
      I have a keen interest in problem solving and overcoming challenges. I
      take a pragmatic approach where possible and make data driven decisions.
      Strong communicator who can get the most out of teams and project
      outcomes.
    </p>
    <div className="project_container">
      <Projects />
    </div>
  </div>
)
