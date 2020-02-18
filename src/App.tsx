import React, {useState} from 'react'
import ThemeContext, { themes } from './Context';
import Routes from './pages/Routes'

function App() {
  const [context, setContext] = useState({
    theme: themes.blue,
    switchTheme: () => {
      setContext(current => ({
        ...current,
        theme: current.theme === themes.blue? themes.green : themes.blue
      }))
    }
    }
  )

  return (
    <>
      <ThemeContext.Provider value={context}>
        <Routes />
      </ThemeContext.Provider>
    </>
  )
}

export default App
