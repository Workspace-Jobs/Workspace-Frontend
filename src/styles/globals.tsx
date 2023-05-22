import React from 'react'
import { Global, css } from '@emotion/react'

const lightTheme = `
  --PRIMARY_P1 : #6F7AEC;
  --PRIMARY_P2 : #EEF0FD;
  --PRIMARY_P3 : #C5CAF7;
  --NATURAL_N1: #999999,
  --BACKGROUND_BG : #F7F7F9;
  --BACKGROUND_CARD : #FDFDFD;
  --BACKGROUND_CARD2 : #FDFDFD;
  --SYSTEM_ERROR : #D84D4D;
`

const cssVar = (name: string) => `var(--${name})`

export const Palette = {
  PRIMARY_P1: cssVar('PRIMARY_P1'),
  PRIMARY_P2: cssVar('PRIMARY_P2'),
  PRIMARY_P3: cssVar('PRIMARY_P3'),
  NATURAL_N1: cssVar('NATURAL_N1'),
  BACKGROUND_BG: cssVar('BACKGROUND_BG'),
  BACKGROUND_CARD: cssVar('BACKGROUND_CARD'),
  BACKGROUND_CARD2: cssVar('BACKGROUND_CARD2'),
  SYSTEM_ERROR: cssVar('SYSTEM_ERROR'),
  BLACK: '#000000',
  WHITE: '#ffffff',
}

const style = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
  input:focus::-webkit-input-placeholder {
    color: transparent;
  }
  button {
    cursor: pointer;
    outline: none;
  }
`

const GlobalStyle = () => {
  return <Global styles={style} />
}

export default GlobalStyle
