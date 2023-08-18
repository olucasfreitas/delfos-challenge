import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobileSmall: true;
    mobileLarge: true;
    mobileMedium: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
  breakpoints: {
    values: {
      mobileSmall: 375,
      mobileMedium: 500,
      mobileLarge: 640,
      tablet: 768,
      laptop: 1024,
      desktop: 1440,
    },
  },
});

export default theme;
