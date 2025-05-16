import React, { useContext } from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

const buttonStyle = css`
  font-family: "franklin-gothic-urw", helvetica, arial, sans-serif;
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

  ${(props) =>
    props.isDisabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;

      &:hover {
        box-shadow: none;
      }
    `}
`

const GatsbyLinkButton = styled(({ buttonType, isDisabled, ...props }) => (
  <Link {...props} />
))`
  ${buttonStyle}
`

const ExtLinkButton = styled(
  ({ buttonType, isDisabled, children, ...props }) => (
    <a {...props}>{children}</a>
  )
)`
  ${buttonStyle}
`

const ButtonButton = styled(({ buttonType, isDisabled, ...props }) => (
  <button disabled={isDisabled} {...props} />
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
        <GatsbyLinkButton
          buttonType={buttonType}
          isDisabled={isDisabled}
          to={to}
          {...restProps}
        >
          {children}
        </GatsbyLinkButton>
      ) : linkType === "external" ? (
        <ExtLinkButton
          buttonType={buttonType}
          isDisabled={isDisabled}
          href={to}
          {...restProps}
        >
          {children}
        </ExtLinkButton>
      ) : (
        <ButtonButton
          buttonType={buttonType}
          isDisabled={isDisabled}
          {...restProps}
        >
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
