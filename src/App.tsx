import React, { useState } from 'react'

import ThemeContext, { themes } from './Context';
import Routes from './pages/routes'
import { Theme } from './type'

function App() {
  const [context, setContext] = useState<any>({
    theme: themes.blue,
    switchTheme: (color: string) => {
      let currentTheme: object = themes.blue
      if(color === 'Blue') {
        currentTheme = themes.blue
      } if (color === 'Green') {
        currentTheme = themes.green
      } if (color === 'Red') {
        currentTheme = themes.red
      } 
      setContext((current: Theme) => ({
        ...current,
        theme: currentTheme
      }))
    }
    })

  return (
    <>
      <ThemeContext.Provider value={context} >
        <Routes />
      </ThemeContext.Provider>
    </>
  )
}

export default App
