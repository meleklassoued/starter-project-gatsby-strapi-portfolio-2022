import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiApiJobs(sort: { order: DESC }) {
      nodes {
        data {
          attributes {
            company
            date
            description
            position
          }
        }
      }
    }
  }
`
const Jobs = () => {
  return <h2>jobs component</h2>
}

export default Jobs
