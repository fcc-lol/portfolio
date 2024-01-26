import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { ThemeConsumer } from "styled-components"
import { MDXProvider } from "@mdx-js/react"
import PostNav from "../components/postNav"
import MainPage from "../templates/mainPage"
import SiteButton from "../components/siteButton.jsx"
import PropTypes from "prop-types"
import Seo from "../components/seo.jsx"
import { lightTheme, darkTheme } from "../themes.js"

const PostDetail = ({ data: { mdx }, children, pageContext }) => {
  const shortcodes = { SiteButton }
  const { next, prev } = pageContext
  const nextPost = next ? next.fields.slug : null
  const prevPost = prev ? prev.fields.slug : null

  const frontmatter = mdx.frontmatter
  const galleryImages = mdx.frontmatter.imageGallery
  const accentColor = mdx.frontmatter.accentColor

  return (
    <MainPage className="post-detail" pageTitle={frontmatter.title}>
      <MDXProvider components={shortcodes}>
        <ThemeConsumer>
          {(theme) => {
            const postColor = accentColor
              ? theme.name === "dark"
                ? accentColor.dark
                : accentColor.light
              : theme.primaryColor
            return (
              <div className="post-detail__row-wrapper">
                <div className={"post-detail__info-container"}>
                  <PostNav
                    nextPost={nextPost}
                    prevPost={prevPost}
                    closeTo={"/"}
                  />
                  <h3
                    className="post-detail__info-container__post-title"
                    style={{ color: theme.bodyCopyColor }}
                  >
                    {frontmatter.title}
                  </h3>

                  <p className="post-detail__info-container__post-by-line">
                    <span
                      className="post-by-line__author"
                      style={{
                        color: postColor,
                      }}
                    >
                      By {frontmatter.author + " "}
                    </span>
                    <span
                      className="post-by-line__date"
                      style={{ color: theme.bodyCopyColor }}
                    >
                      {frontmatter.date}
                    </span>
                  </p>

                  <div className="post__info__categories">
                    {frontmatter.categories.map((category, index) => (
                      <p
                        key={index}
                        className="categories__tag"
                        style={{
                          backgroundColor: `transparent`,
                          border: `1px solid`,
                          color: postColor,
                        }}
                      >
                        {category.tag}
                      </p>
                    ))}
                  </div>
                  <div className="post-detail__text-container">{children}</div>
                </div>

                <div className="post-detail__main-content-wrapper">
                  {galleryImages.map((figure, index) => (
                    <div
                      key={index}
                      className="post-detail__main-content-wrapper__image"
                    >
                      <GatsbyImage
                        image={figure.image.childImageSharp.feature}
                        alt=""
                      />
                      <p
                        className="post-detail__main-content-wrapper__caption"
                        style={{
                          color: postColor,
                        }}
                      >
                        <b className="caption-leadin">
                          {"Exhibit 00" +
                            (index + 1) +
                            (figure.caption ? ": " : "")}
                        </b>
                        <span className="caption-body">
                          {figure.caption && figure.caption}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          }}
        </ThemeConsumer>
      </MDXProvider>
    </MainPage>
  )
}

PostDetail.propTypes = {
  data: PropTypes.object,
  search: PropTypes.object,
  pageContext: PropTypes.object,
}

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
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
              thumbnail: gatsbyImageData(
                width: 240
                height: 180
                transformOptions: { cropFocus: CENTER, fit: COVER }
                quality: 100
              )

              feature: gatsbyImageData(
                width: 815
                transformOptions: { fit: COVER }
                quality: 100
                formats: [AUTO, WEBP]
              )
            }
          }
          caption
        }
        accentColor {
          light
          dark
        }
      }
    }
  }
`
export default PostDetail

export const Head = ({ data: { mdx } }) => {
  return (
    <Seo pageTitle={mdx.frontmatter.title}>
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
