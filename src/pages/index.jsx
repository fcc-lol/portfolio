import React from "react"
import { graphql } from "gatsby"
// import HighlightsSection from "../components/highlightsSection"
import MainPage from "../templates/mainPage"
import Post from "../components/post"
import SectionHeading from "../components/sectionHeading"
import PropTypes from "prop-types"
import Seo from "../components/seo.jsx"
import { lightTheme, darkTheme } from "../themes.js"

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
        {data.allMdx.edges.map(({ node }, index) => (
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
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { contentType: { eq: "post" } } }
    ) {
      totalCount
      edges {
        node {
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

export const Head = () => {
  return (
    <Seo>
      <meta
        name="theme-color"
        content={lightTheme.body}
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content={darkTheme.body}
        media="(prefers-color-scheme: dark)"
      />
    </Seo>
  )
}
