import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import SiteButton from "./siteButton"
import PropTypes from "prop-types"

const MainNav = ({ orientation, theme, onClickThemeToggle }) => {
  const { menuLinks } = useSiteMetadata()

  return (
    <ul
      className={
        "header-menu" +
        (orientation === "horizontal" ? " header-menu--horizontal" : "") +
        (orientation === "vertical" ? " header-menu--vertical" : "")
      }
    >
      {menuLinks.map((item, index) => (
        <li className="header-menu__item" key={index}>
          <Link
            className="header-menu__link"
            activeClassName="header-menu__link--active"
            to={item.link}
          >
            {item.name}
          </Link>
        </li>
      ))}
      <li className="header-menu__item">
        <SiteButton onClick={onClickThemeToggle}>
          {theme.name === "dark" ? "Dark" : "Light"}
        </SiteButton>
      </li>
    </ul>
  )
}

MainNav.propTypes = {
  orientation: PropTypes.string,
}

MainNav.defaultProps = {
  orientation: "horizontal",
}

export default MainNav
