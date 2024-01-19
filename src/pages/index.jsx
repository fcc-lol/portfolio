import React from "react"
import { graphql } from "gatsby"
// import HighlightsSection from "../components/highlightsSection"
import MainPage from "../templates/mainPage"
import Post from "../components/post"
import SectionHeading from "../components/sectionHeading"
import PropTypes from "prop-types"

const Index = ({ data }) => {
  return (
    <MainPage className="home" pageTitle="Full Circuit Collective">
      <div className="masthead">
        <h1 className="masthead__heading">
          Full Circuit<span>Collective</span>
        </h1>
        <p className="masthead__tagline">Stuff gets made here</p>
      </div>
      {/* <HighlightsSection /> */}
      <section className="page__main-content">
        <SectionHeading title="Recent Work" />
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <Post
            key={node.id}
            index={index}
            path={node.fields.slug}
            author={node.frontmatter.author}
            categories={node.frontmatter.categories}
            date={node.frontmatter.date}
            title={node.frontmatter.title}
            heroImage={node.frontmatter.imageGallery[0].image}
            accentColor={node.frontmatter.accentColor}
          />
        ))}
      </section>
    </MainPage>
  )
}

Index.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { contentType: { eq: "post" } } }
    ) {
      totalCount
      edges {
        node {
          html
          fields {
            slug
          }
          id
          frontmatter {
            title
            date(fromNow: true)
            author
            categories {
              tag
            }
            accentColor {
              light
              dark
            }
            imageGallery {
              image {
                childImageSharp {
                  gatsbyImageData(
                    aspectRatio: 1.5
                    transformOptions: { fit: COVER, cropFocus: ATTENTION }
                    quality: 100
                  )
                }
              }
              caption
            }
          }
        }
      }
    }
  }
`
export default Index
