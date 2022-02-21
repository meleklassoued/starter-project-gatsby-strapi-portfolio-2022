import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
export default ({ data }) => {
  console.log(data)
  const {
    allStrapiApiProjectsPopulateStacksImages: {
      nodes: [Array],
    },
  } = data
  const dataStrapi = Array.data[0].attributes
  console.log(dataStrapi)
  return (
    <>
      <Layout>
        <Hero />
        <Services />
        <Jobs />
        <Projects projects={dataStrapi} title="featured projects" showLink />
      </Layout>
    </>
  )
}
export const query = graphql`
  {
    allStrapiApiProjectsPopulateStacksImages(
      filter: {
        data: { elemMatch: { attributes: { featured: { eq: true } } } }
      }
    ) {
      nodes {
        data {
          attributes {
            github
            description
            title
            images {
              data {
                attributes {
                  url
                }
              }
            }
            stacks {
              stack_name
              id
            }
          }
        }
      }
    }
  }
`
// ...GatsbyImageSharpFluid
