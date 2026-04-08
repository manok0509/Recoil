import { atom } from "recoil"

const ThemeState = atom({
    key: "ThemeState",
    default: localStorage.getItem('theme') == null ? true : JSON.parse(localStorage.getItem('theme'))
})

export default ThemeState