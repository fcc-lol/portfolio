import React from "react"
import { graphql } from "gatsby"
import HighlightsSection from "../components/highlightsSection"
import MainPage from "../templates/mainPage"
import Post from "../components/post"
import SectionHeading from "../components/sectionHeading"
import Footer from "../components/footer"
import PropTypes from "prop-types"

const Index = ({ data }) => {
  return (
    <MainPage className="home" pageTitle="Still Upright Dot Com">
      <div className="masthead">
        <h1 className="masthead__heading">
          DLZ & Assoc. <span>Dot Com</span>
        </h1>
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
            darkThemePrimaryColor={"#03AEEE"}
            darkThemeSecondaryColor={"#EC008D"}
            lightThemePrimaryColor={"#03AEEE"}
            lightThemeSecondaryColor={"#EC008D"}
          />
        ))}
      </section>
      <Footer />
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
      sort: { fields: frontmatter___date, order: DESC }
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
