import { useEffect, useState } from "react"

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light")
  const [componentMounted, setComponentMounted] = useState(false)

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark")
    } else {
      setMode("light")
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches

    if (!localTheme) {
      prefersDarkMode ? setMode("dark") : setMode("light")
    } else {
      setTheme(localTheme)
    }

    const handleThemeChange = (e) => setMode(e.matches ? "dark" : "light")

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleThemeChange)

    setComponentMounted(true)

    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleThemeChange)
  }, [])

  return [theme, toggleTheme, componentMounted]
}
