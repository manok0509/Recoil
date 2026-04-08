import React from 'react'
import { useRecoilValue } from 'recoil'
import CounterState from '../states/CounterAtom'
export default function ComA() {
    var countVal = useRecoilValue(CounterState)
  return (
    <div>
      <p>Count:{countVal}</p>
    </div>
  )
}
