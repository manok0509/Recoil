import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ComA from './Components/ComA'
import ComB from './Components/ComB'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import ThemeState from './states/ThemeAtom'
import ChangeTheme from './Components/ChangeTheme'
import User from './Components/User'
import UserState from './states/UserAtom'
function App() {
  var theme = useRecoilValue(ThemeState)
  const [user, setUser] = useRecoilState(UserState)
  const reset = useResetRecoilState(UserState)
  useEffect(() => {
    localStorage.setItem('theme', theme)
    console.log(theme);

  }, [theme])

  function handleLogin() {
    setUser({
      username: "Man Huynh",
      isLogin: true
    })
  }
  return (
    <>
      <div className={theme ? 'dark' : 'light'}>
        <ComA></ComA>
        <ComB></ComB>
        <ChangeTheme></ChangeTheme>
      </div>

      <button onClick={handleLogin}>Login</button>
      <button onClick={reset}>Logout</button>
      <div>
        <User></User>
      </div>

    </>
  )
}

export default App
