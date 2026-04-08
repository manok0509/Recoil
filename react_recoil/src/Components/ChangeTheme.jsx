import React from 'react'
import { useRecoilState } from 'recoil'
import ThemeState from '../states/ThemeAtom'
export default function ChangeTheme() {
    const [themeVal, setThemeVal] = useRecoilState(ThemeState)

    function handleChange() {
        if (themeVal) setThemeVal(false)
        else setThemeVal(true)
        // localStorage.setItem('theme', themeVal)
    }
    return (
        <div>
            <button onClick={handleChange} >Switch Theme</button>
        </div>
    )
}
