import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"
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
      <ul className="header-menu__links">
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
        ))
        }
      </ul>
      <li className="header-menu__item">
        <button
          onClick={onClickThemeToggle}
          className="su-button site-header__theme-toggle"
        >
          {theme.name === "dark" ? "Dark" : "Light"}
        </button>
      </li>
    </ul >
  )
}

MainNav.propTypes = {
  orientation: PropTypes.string,
}

MainNav.defaultProps = {
  orientation: "horizontal",
}

export default MainNav;