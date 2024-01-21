import React from "react"
import SiteHeader from "../components/siteHeader"
import Seo from "../components/seo.jsx"
import Footer from "../components/footer"
import { ThemeProvider } from "styled-components"
import { ThemeConsumer } from "styled-components"
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

export const Head = () => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Seo>
          <meta name="theme-color" content={theme.body}></meta>
        </Seo>
      )}
    </ThemeConsumer>
  )
}
