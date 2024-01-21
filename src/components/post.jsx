import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { ThemeConsumer } from "styled-components"
import PropTypes from "prop-types"

const Post = (props) => {
  return (
    <ThemeConsumer>
      {(theme) => {
        const postColor = props.accentColor
          ? theme.name === "dark"
            ? props.accentColor.dark
            : props.accentColor.light
          : theme.primaryColor
        return (
          <article className="post">
            <Link
              to={props.path}
              state={{
                modal: false,
              }}
            >
              <span className="post__link" />
            </Link>

            <div
              className="post__hero-image"
              style={{
                borderColor: postColor,
              }}
            >
              <GatsbyImage
                className="post__hero-image__image"
                image={props.heroImage.childImageSharp.gatsbyImageData}
                alt=""
              />
            </div>

            <div className="post__info">
              <h3 className="post__info__title">{props.title}</h3>
              <p className="post__info__by-line">
                <span
                  className="post__info__by-line__author"
                  style={{
                    color: postColor,
                  }}
                >
                  by {props.author}
                </span>
              </p>

              <div className="post__info__categories">
                {props.categories.map((category, index) => (
                  <p
                    key={index}
                    className="categories__tag"
                    style={{
                      backgroundColor: "transparent",
                      border: `1px solid ${postColor}b3`,
                      color: `${postColor}99`,
                    }}
                  >
                    {category.tag}
                  </p>
                ))}
              </div>
            </div>
          </article>
        )
      }}
    </ThemeConsumer>
  )
}

Post.propTypes = {
  index: PropTypes.number,
  path: PropTypes.string,
  author: PropTypes.string,
  categories: PropTypes.array,
  date: PropTypes.string,
  title: PropTypes.string,
  heroImage: PropTypes.object,
  vibrantColor: PropTypes.string,
  lightVibrantColor: PropTypes.string,
  darkVibrantColor: PropTypes.string,
  darkMutedColor: PropTypes.string,
}

export default Post
