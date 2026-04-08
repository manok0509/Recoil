import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import TodoState from '../../states/TodoAtom'
export default function TodoInput() {
    const [val, setVal] = useState("")
    const [taskList, setTaskList] = useRecoilState(TodoState)
    function handleAddTask() {
        setTaskList(...taskList, { name: val })
    }
    return (
        <div>
            <input value={val} type="text" onChange={(e) => setVal(e.target.value)} />
            <button onClick={handleAddTask}>Them moi</button>
        </div>
    )
}
