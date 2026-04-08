import {atom} from "recoil"

const CounterState = atom({
    key:"Counter",
    default:0
})

export default CounterState