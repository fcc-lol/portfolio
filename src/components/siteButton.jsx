import React, { useContext } from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

const buttonStyle = css`
  @include bodyFontFamily;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  padding: 0.4em 1.125rem;
  border: 1px solid;
  outline: none;
  font-size: 1em;
  font-weight: 500;
  line-height: 100%;
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.buttonColor};
  background-color: transparent;
  transition: box-shadow 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 0px 4px ${(props) => props.theme.buttonShadowOnHover};
  }

  border: ${(props) =>
    props.buttonType === "bordered" ? "1px solid" : "none"};
  background-color: ${(props) =>
    props.buttonType === "filled" ? props.theme.bodyCopyColor : "transparent"};
  color: ${(props) =>
    props.buttonType === "filled"
      ? props.theme.bodyCopyColorInverted
      : props.theme.buttonColor};
`

const GatsbyLinkButton = styled(({ buttonType, ...props }) => (
  <Link {...props} />
))`
  ${buttonStyle}
`

const ExtLinkButton = styled(({ buttonType, children, ...props }) => (
  <a {...props}>{children}</a>
))`
  ${buttonStyle}
`

const ButtonButton = styled(({ buttonType, ...props }) => (
  <button {...props} />
))`
  ${buttonStyle}
`

const SiteButton = ({ to, isDisabled, buttonType, children, ...restProps }) => {
  const linkType =
    to !== undefined
      ? /^\/(?!\/)/.test(to)
        ? "internal"
        : "external"
      : "button"

  return (
    <>
      {linkType === "internal" ? (
        <GatsbyLinkButton buttonType={buttonType} to={to} {...restProps}>
          {children}
        </GatsbyLinkButton>
      ) : linkType === "external" ? (
        <ExtLinkButton buttonType={buttonType} href={to} {...restProps}>
          {children}
        </ExtLinkButton>
      ) : (
        <ButtonButton buttonType={buttonType} {...restProps}>
          {children}
        </ButtonButton>
      )}
    </>
  )
}

SiteButton.defaultProps = {
  isDisabled: false,
  buttonType: "bordered",
}

export default SiteButton
