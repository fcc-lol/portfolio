import React from "react"
import { Link } from "gatsby"
import { ThemeConsumer } from "styled-components"
import PropTypes from "prop-types"

const PostNav = (props) => {
  return (
    <ThemeConsumer>
      {(theme) => {
        return (
          <nav className="post-nav">
            {props.prevPost ? (
              <Link
                to={props.prevPost}
                className="su-button post-nav__button post-nav__button--prev"
                style={{
                  color: theme.primaryColor,
                  borderColor: theme.primaryColor,
                }}
              >
                Prev
              </Link>
            ) : (
              <p
                className="su-button post-nav__button post-nav__button--disabled"
                style={{ color: theme.primaryColor }}
              >
                Prev
              </p>
            )}

            <Link
              to={props.closeTo}
              className="su-button post-nav__button post-nav__button--close"
              style={{ color: theme.text }}
            >
              Home
            </Link>

            {props.nextPost ? (
              <Link
                to={props.nextPost}
                className="su-button post-nav__button post-nav__button--next"
                style={{
                  color: theme.primaryColor,
                  borderColor: theme.primaryColor,
                }}
              >
                Next
              </Link>
            ) : (
              <p
                className="su-button post-nav__button post-nav__button--disabled"
                style={{ color: theme.primaryColor }}
              >
                Next
              </p>
            )}
          </nav>
        )
      }}
    </ThemeConsumer>
  )
}

PostNav.propTypes = {
  color: PropTypes.string,
  nextPost: PropTypes.string,
  prevPost: PropTypes.string,
  closeTo: PropTypes.string,
}

export default PostNav
