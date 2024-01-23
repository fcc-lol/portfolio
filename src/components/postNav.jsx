import React from "react"
import SiteButton from "./siteButton"
import PropTypes from "prop-types"

const PostNav = ({ nextPost, prevPost, closeTo }) => {
  return (
    <nav className="post-nav">
      {prevPost ? (
        <SiteButton to={prevPost}>Prev</SiteButton>
      ) : (
        <SiteButton isDisabled={true}>Prev</SiteButton>
      )}

      <SiteButton
        className="post-nav__button--close"
        to={closeTo}
        buttonType={"text"}
      >
        Home
      </SiteButton>

      {nextPost ? (
        <SiteButton to={nextPost}>Next</SiteButton>
      ) : (
        <SiteButton isDisabled={true}>Next</SiteButton>
      )}
    </nav>
  )
}

PostNav.propTypes = {
  nextPost: PropTypes.string,
  prevPost: PropTypes.string,
  closeTo: PropTypes.string,
}

export default PostNav
