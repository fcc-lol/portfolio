import React, { useState, useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import SectionHeading from "./sectionHeading"
import { GatsbyImage } from "gatsby-plugin-image"
import chevronLeftIcon from "../assets/images/icons/chevron-left--dark.svg"
import chevronRightIcon from "../assets/images/icons/chevron-right--dark.svg"

const HighlightsSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { eq: "assets/images/highlights" } }
        sort: { sourceInstanceName: DESC }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                height: 260
                transformOptions: { fit: COVER, cropFocus: CENTER }
                quality: 100
                placeholder: BLURRED
              )
            }
            birthTime(fromNow: true)
          }
        }
      }
    }
  `)

  const [currentLogoIndex, setCurrentLogoIndex] = useState(0)

  const logoImage =
    data.allFile.edges[currentLogoIndex].node.childImageSharp.gatsbyImageData

  // const logoColor = data.allFile.edges[currentLogoIndex].node.colors

  const logoWidth = useRef(0)

  useEffect(() => {
    logoWidth.current =
      260 *
      data.allFile.edges[currentLogoIndex].node.childImageSharp.gatsbyImageData
        .aspectRatio
  }, [currentLogoIndex, data.allFile.edges])

  const increment = () => {
    if (currentLogoIndex < data.allFile.edges.length - 1) {
      setCurrentLogoIndex(currentLogoIndex + 1)
    } else {
      setCurrentLogoIndex(0)
    }
  }

  const decrement = () => {
    if (currentLogoIndex > 0) {
      setCurrentLogoIndex(currentLogoIndex - 1)
    } else {
      setCurrentLogoIndex(data.allFile.edges.length - 1)
    }
  }

  return (
    <section className="logo-section">
      <div className="logo-section__label-container">
        <SectionHeading title="Recent Highlights" />
        <p className="logo-section__label-container__description">
          Here at DLZ & Assoc. we strive to keep things fresh, so we&rsquo;ll
          bring you new &ldquo;highlights&rdquo; every so often to keep things
          from getting stale. We might even put it on some merch if we&rsquo;re
          feeling ambitious.
        </p>
      </div>
      <div
        style={{ backgroundColor: "#03AEEE" }}
        className="logo-section__artwork"
      >
        <div className="logo-section__logo-nav">
          <p className="logo-section__logo-nav__eyebrow">{`Logo 00${
            currentLogoIndex + 1
          } / 00${data.allFile.edges.length}`}</p>
          <div className="logo-section__logo-nav__button-wrapper">
            <button
              className="logo-section__logo-nav__button logo-section__label-container__button--prev"
              onClick={decrement}
              aria-label="view previous image"
            >
              <img src={chevronLeftIcon} alt="left pointing arrow" />
            </button>
            <button
              className="logo-section__logo-nav__button logo-section__label-container__button--next"
              onClick={increment}
              aria-label="view next image"
            >
              <img src={chevronRightIcon} alt="right pointing arrow" />
            </button>
          </div>
        </div>
        <GatsbyImage image={logoImage} style={{ width: logoWidth }} alt="" />
      </div>
    </section>
  )
}

export default HighlightsSection
