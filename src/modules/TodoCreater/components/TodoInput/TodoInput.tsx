'use client';
import { addTodo } from '@/store/reducers/appSlice/appSlice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { ChangeEvent, KeyboardEvent, useState } from 'react'

const TodoInput = () => {

    const dispatch = useAppDispatch()
    const todos = useAppSelector(s => s.app.todosList)

    const [todoString, setTodoString] = useState<string>('')

    const inputChange = (event:ChangeEvent<HTMLInputElement>) => {
        setTodoString(event.target.value)
    }

    const checkToSimilar = () => {
        return todos.some(todo => todo.string === todoString);
    }

    const keydownFunc = (event: KeyboardEvent<HTMLInputElement>) => {
        if(checkToSimilar()) return
        if(event.key === 'Enter' && todoString.trim() !== '') {
            dispatch(addTodo({
                string:todoString,
                check:false,
            }))
            setTodoString('')
        }
    }

    return (
        <input 
            className="w-full border border-gray border-solid px-[45px] py-[10px] text-[20px] outline-none"
            type="text" 
            placeholder="What need to be done?"
            value={todoString}
            onChange={inputChange}
            onKeyDown={keydownFunc}
        />
    )
}

export default TodoInput