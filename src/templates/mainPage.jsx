import React, { useEffect } from "react"
import SiteHeader from "../components/siteHeader"
import Footer from "../components/footer"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../themes.js"
import { GlobalStyles } from "../globalStyles"
import { useDarkMode } from "../hooks/useDarkMode"
import PropTypes from "prop-types"

const MainPage = ({ children, className, pageTitle }) => {
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme

  const handleThemeToggleClick = (e) => {
    e.preventDefault()
    toggleTheme()
  }

  useEffect(() => {
    const metaThemeTags = document.querySelectorAll(`meta[name=theme-color]`)
    const inverseTheme = theme === "light" ? "dark" : "light"

    metaThemeTags &&
      metaThemeTags.forEach((tag) => {
        if (tag.parentNode) {
          tag.parentNode.removeChild(tag)
        }
      })

    const newMetaThemeTag = document.createElement("meta")
    newMetaThemeTag.setAttribute("name", "theme-color")
    newMetaThemeTag.setAttribute("content", themeMode.body)
    newMetaThemeTag.setAttribute(
      "media",
      `(prefers-color-scheme: ${inverseTheme})`
    )
    document.head.appendChild(newMetaThemeTag)
  }, [theme, themeMode.body])

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <SiteHeader
        onClickThemeToggle={handleThemeToggleClick}
        pageTitle={pageTitle}
      />
      <div className={"page " + className}>{children}</div>
      <Footer />
    </ThemeProvider>
  )
}

MainPage.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  pageTitle: PropTypes.string,
}

export default MainPage
