import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    background-color: ${({ theme }) => theme.body};
  }

  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.bodyCopyColor};
  }

  .categories__tag {
    color: ${({ theme }) => theme.tag};
  }

  .post__info__title {
    color: ${({ theme }) => theme.bodyCopyColor};
  }

  .post-detail__info-container {
    color: ${({ theme }) => theme.bodyCopyColor};
  }

  .post-nav__button--disabled {
    color: ${({ theme }) => theme.bodyCopyColor} !important;
  }

  .caption-body {
    color: ${({ theme }) => theme.bodyCopyColor};
  }

  .post-detail__text-container > p {
    color: ${({ theme }) => theme.bodyCopyColor};
  }

  .site-header {
    background-color: ${({ theme }) => theme.bodyTransparent};
    box-shadow: 0px 1px 0px 0px ${({ theme }) => theme.headerShadow};
  }

  .header-menu--vertical {
    background-color: ${({ theme }) => theme.bodyTransparent};
  }

  .mobile-nav-toggle__bar {
    background-color: ${({ theme }) => theme.bodyCopyColor};
  }

  .footer__content {
    border-color: ${({ theme }) => theme.footerBorder};
    color: ${({ theme }) => theme.footerText};
  }
`
