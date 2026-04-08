import { atom } from "recoil"

const UserState = atom({
    key: "UserState",
    default: {
        username: "",
        isLogin: false
    }
})

export default UserState