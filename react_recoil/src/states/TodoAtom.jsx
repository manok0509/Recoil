import { atom } from "recoil"

const TodoState = atom({
    key: "TodoState",
    default: [{
        name: ""
    }]
})

export default TodoState