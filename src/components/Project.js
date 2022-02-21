import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({ projectInfo, index }) => {
  const { description, github, images, stacks, title } = projectInfo.attributes
  return (
    <article className="projects">
      <img src={images.data.attributes.url} className="project-img" />
    </article>
  )
}

Project.propTypes = {}

export default Project
