import React, { Component } from "react"
import projectList from "../data/projects.json"
import Carousel from "react-bootstrap/Carousel"

class Projects extends Component {
  render() {
    return (
      <div>
        <h1> project list starts here </h1>
        {projectList.map(project => {
          return (
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  href="{project.img1}"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{project.name}</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="http://fillmurray.com/600/400"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="http://fillmurray.com/600/400"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          )
        })}
      </div>
    )
  }
}

export default Projects
