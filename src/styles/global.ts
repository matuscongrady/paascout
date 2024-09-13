import { colors, mainBackground, minScreenWidth, onMaxW750, typographyCss } from './variables';

export const globalCss: Css = {
  '*': {
    boxSizing: 'border-box',
    minWidth: 0,
    minHeight: 0,
    fontFamily: 'Montserrat, sans-serif'
  },
  html: {
    minHeight: '100%',
    position: 'relative',
    body: {
      margin: '0',
      padding: '0',
      minHeight: '100%',
      height: '100%',
      minWidth: minScreenWidth,
      backgroundColor: 'rgb(28,34,34)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      [onMaxW750]: {
        background: mainBackground
      },
      overflowX: 'hidden'
    }
  },
  h1: {
    fontStyle: 'normal',
    fontWeight: 700,
    maxWidth: '100%',
    backgroundColor: colors.fontColorPrimary,
    backgroundImage: 'linear-gradient(to bottom, #d5d5d5, #ebebeb)',
    backgroundSize: '100%',
    WebkitBackgroundClip: 'text',
    MozBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    MozTextFillColor: 'transparent',
    margin: 0
  },
  h2: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: 1.5,
    textShadow: '2px 2px #161616',
    color: colors.fontColorPrimary,
    marginBottom: '40px',
    textAlign: 'center',
    marginTop: 0
  },
  h3: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '1rem',
    lineHeight: 1.5,
    margin: '0px',
    color: colors.fontColorPrimary
  },
  h4: {
    ...typographyCss,
    fontWeight: 'bold',
    margin: '10px 0px 5px 0px'
  },
  ul: {
    marginBlockStart: '0.5rem',
    paddingInlineStart: '1rem'
  },
  'p,li,a,th,td,input,button,textarea': typographyCss,
  '*:focus': {
    outline: 'none'
  },
  '*:focus-visible': {
    outline: 'none'
  },
  'input:-webkit-autofill': {
    WebkitTextFillColor: colors.fontColorPrimary
  },
  'input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active': {
    boxShadow: `0 0 0 30px ${colors.primary} inset`
  },
  'button,input': {
    backgroundColor: 'transparent',
    border: 'none'
  },
  'a,button': {
    textDecoration: 'none',
    WebkitTapHighlightColor: 'transparent',
    cursor: 'pointer'
  }
};
