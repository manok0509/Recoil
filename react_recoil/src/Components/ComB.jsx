import React from 'react'
import { useRecoilState } from 'recoil'
import CounterState from '../states/CounterAtom'
export default function ComB() {
    const [count,setVal] =useRecoilState(CounterState)
  return (
    <div>
      <button onClick={()=>setVal(count+1)}>+</button>
    </div>
  )
}
