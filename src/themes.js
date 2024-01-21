const colors = {
  //brand colors
  primaryAccentColor: "rgba(47,211,183,1)",
  secondaryAccentColor: "rgba(252,155,90,1)",
  //text colors
  primaryTextColorDark: "rgba(204,209,214,1)",
  secondaryTextColorDark: "rgba(204,209,214,0.7)",
  primaryTextColorLight: "rgba(40,41,42,1)",
  secondaryTextColorLight: "rgba(40,41,42,0.7)",
  //surface colors
  DarkSurfaceColor: "rgba(40, 41, 42, 1)",
  lightSurfaceColor: "rgba(243,250,251,1)",
}

export const darkTheme = {
  name: "dark",
  body: colors.DarkSurfaceColor,
  bodyCopyColor: colors.primaryTextColorDark,
  bodyCopyColorInverted: colors.primaryTextColorLight,
  secondaryCopyColor: colors.secondaryTextColorDark,
  bodyTransparent: "rgba(40, 40, 40, 0.8)",
  primaryColor: colors.primaryAccentColor,
  tagBackgroundColor: "transparent",
  tagTextColor: colors.primaryTextColorDark,
  tag: colors.primaryTextColorDark,
  buttonColor: colors.secondaryTextColorDark,
  buttonShadowOnHover: "rgba(255,255,255,0.3)",
  headerShadow: "rgba(235, 237, 245, 0.1)",
  footerBorder: "rgba(255, 255, 255, 0.25)",
  footerText: "rgba(255, 255, 255, 0.5)",
}

export const lightTheme = {
  name: "light",
  body: colors.lightSurfaceColor,
  bodyCopyColor: colors.primaryTextColorLight,
  bodyCopyColorInverted: colors.primaryTextColorDark,
  secondaryCopyColor: colors.secondaryTextColorLight,
  bodyTransparent: "rgba(243, 250, 251, 0.8)",
  primaryColor: colors.primaryAccentColor,
  tagBackgroundColor: "transparent",
  tagTextColor: colors.primaryTextColorLight,
  tag: colors.primaryTextColorLight,
  buttonColor: colors.secondaryTextColorLight,
  buttonShadowOnHover: "rgba(0,0,0,0.3)",
  headerShadow: "rgba(30, 36, 49, 0.1)",
  footerBorder: "rgba(0, 0, 0, 0.25)",
  footerText: "rgba(0, 0, 0, 0.5)",
}
