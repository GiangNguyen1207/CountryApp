import React from 'react'
import { red, blue, green } from '@material-ui/core/colors'
import { white, black } from 'color-name';

export const themes = {
  blue: {
    forground: blue[500],
    color: white
  },
  green: {
    forground: green[500],
    color: black
  },
  red: {
    forground: red[500],
    color: white
  }
}

export default React.createContext({
  theme: themes.blue,
  switchTheme: () => {}
})