import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects ">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          console.log()
          return <Project key={index} index={index} projectInfo={project} />
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          show more Projects
        </Link>
      )}
    </section>
  )
}

export default Projects
