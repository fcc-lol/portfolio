import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import PropTypes from "prop-types"

function SEO({ pageTitle, children }) {
  const { title, description, bodyScrollDisabled } = useSiteMetadata()

  return (
    <>
      <html lang="en" />
      <body className={bodyScrollDisabled ? "no-scroll" : ""} />
      <title>{pageTitle ? `${pageTitle} | ${title}` : `${title}`}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      {children}
    </>
  )
}

SEO.propTypes = {
  pageTitle: PropTypes.string,
}

export default SEO
