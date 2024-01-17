import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

function SEO({ description, lang, meta, title, bodyScrollDisabled, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <>
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      <meta name="description" content={metaDescription} />
      <meta name="lang" content={lang} />
      <meta name="og:title" content={title}/>
      <meta name="og:description" content={metaDescription}/>
      <body className={bodyScrollDisabled ? "no-scroll" : ""}/>
      {children}
    </>
  )
}

SEO.defaultProps = {
  lang: `en`,
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  bodyScrollDisabled: PropTypes.bool,
}

export default SEO
