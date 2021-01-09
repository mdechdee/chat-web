import { withTheme } from "@emotion/react";

// example theme.js
export default{
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f9',
    gray: '#7f7f7f',
    highlight: 'hsla(205, 100%, 40%, 0.125)'
  },
  fonts: {
    body: 'Lato, sans-serif',
    heading: 'Poppins, sans-serif',
    subtitle: 'Poppins, sans-serif',
    title: 'Poppins, sans-serif',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    subtitle: 500,
    bold: 700,
    title: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
    subtitle: 0.25,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    avatar: 48
  },
  radii: {
    "default": 99999,
    circle: 99999
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, .125)'
  },
  // rebass variants
  text: {
    title:{
      fontFamily: 'title',
      fontWeight: 'title'
    },
    subtitle:{
      fontFamily: 'subtitle',
      lineHeight: 'subtitle',
      fontWeight: 'subtitle',
    },
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading'
    },
    display: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: [5, 6, 7]
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    },
  },
  variants: {
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle'
    },
    card: {
      p: 2,
      bg: 'background',
      boxShadow: 'card'
    },
    link: {
      color: 'primary'
    },
    nav: {
      fontSize: 1,
      fontWeight: 'bold',
      display: 'inline-block',
      p: 2,
      color: 'inherit',
      textDecoration: 'none',
      ':hover,:focus,.active': {
        color: 'primary'
      }
    },
    flexColumn: {
      justifyContent: 'center',
      justifySelf: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      mx: 'auto',
    },
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'bold',
      color: 'text',
      borderRadius: 'default'
    },
    outline: {
      variant: 'buttons.primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 2px'
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary'
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    }
  },
  forms: {
    input: {
      color: 'gray',
      borderRadius: 'circle',
    },
    select: {
      borderRadius: 9999,
    },
    textarea: {},
    label: {},
    radio: {},
    checkbox: {},
  },
}