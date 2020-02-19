import React from 'react'

export const themes = {
  blue: {
    forground: '#2196f3',
    color: '#ffffff'
  },
  green: {
    forground: '#4caf50',
    color: '#000000'
  },
  red: {
    forground: '#f44336',
    color: '#ffffff'
  }
}

export default React.createContext({
  theme: themes.blue,
  switchTheme: (color: string) => {}
})