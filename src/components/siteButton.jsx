import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledButton = styled(Link)`
  @include bodyFontFamily;
  color: ${(props) => props.theme.buttons};
  outline: none;
  align-items: center;
  background-color: transparent;
  border: 1px solid;
  color: inherit;
  cursor: pointer;
  display: flex;
  font-weight: 500;
  justify-content: center;
  line-height: 100%;
  padding: 0.4em 1.125rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 0px 4px ${(props) => props.theme.buttonHover};
  }
`

const SiteButton = ({ to, isDisabled, children, ...restProps }) => {
  const theme = useContext(ThemeContext)

  return (
    <StyledButton to={to} theme={theme} {...restProps}>
      {children}
    </StyledButton>
  )
}

SiteButton.defaultProps = {
  to: "",
  isDisabled: false,
}

export default SiteButton
