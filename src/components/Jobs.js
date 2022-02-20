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
  const Data = useStaticQuery(query)
  const {
    allStrapiApiJobs: { nodes: data },
  } = Data
  const [value, setValue] = React.useState(0)

  console.log(...data)
  console.log(data[0].data[value].attributes)
  const { company, date, description, position } = data[0].data[
    value
  ].attributes

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {data[0].data.map((item, index) => {
            const { company, date, description, position } = item.attributes
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"} `}
              >
                {company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          <div className="job-desc">
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>{description}</p>
          </div>
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        More-info
      </Link>
    </section>
  )
}

export default Jobs
