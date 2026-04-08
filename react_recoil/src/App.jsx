import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ComA from './Components/ComA'
import ComB from './Components/ComB'
import { useRecoilValue } from 'recoil'
import ThemeState from './states/ThemeAtom'
import ChangeTheme from './Components/ChangeTheme'
function App() {
  var theme = useRecoilValue(ThemeState)

  useEffect(() => {
    localStorage.setItem('theme', theme)
    console.log(theme);

  }, [theme])
  return (
    <>
      <div className={theme ? 'dark' : 'light'}>
        <ComA></ComA>
        <ComB></ComB>
        <ChangeTheme></ChangeTheme>
      </div>

    </>
  )
}

export default App
