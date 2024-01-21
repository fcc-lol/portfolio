import React from "react"
import PropTypes from "prop-types"

const TextHeading = props => {
  return <h1 className="text-heading">{props.title}</h1>
}

TextHeading.propTypes = {
  title: PropTypes.string,
}

export default TextHeading
