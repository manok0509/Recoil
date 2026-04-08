import React from 'react'
import { useRecoilState } from 'recoil'
import TodoState from '../../states/TodoAtom'
import TodoInput from './TodoInput'
export default function TodoList() {
    const [taskList, setTaskList] = useRecoilState(TodoState)
    return (
        <div>
            <TodoInput></TodoInput>
            <p>{taskList.name}</p>
        </div>
    )
}
