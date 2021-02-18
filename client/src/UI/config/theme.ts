

  export interface DefaultTheme {
    colors: any,
    fonts: string[],
    fontSizes:any,
    breakpoints: object
  }


export const theme:DefaultTheme = {
  colors: {
    social:{
      facebook:"#3B5998",
      linkedin:"#0077B5",
      twitter:"#1DA1F2",
      email:"#7C7C7C"
    },
    font:{
      primary:"#333131"
    },
    background:"#dbe0e0",
    eq: "#999797",
    borders:"#333131"
  },
  fonts: [],
  fontSizes: {
    sm: "1.4rem",
    md:"1.8rem",
    bg: "2.2rem",
  },
  breakpoints: {}
};