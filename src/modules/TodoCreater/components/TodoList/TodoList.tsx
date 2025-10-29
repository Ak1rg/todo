'use client';
import { changeTodoCheck } from '@/store/reducers/appSlice/appSlice';
import { ITodo } from '@/store/reducers/appSlice/appType'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { useCallback, useMemo,  } from 'react'
import { filterList } from '../filterList/filterList';
import { TodoItem } from './TodoItem';


const TodoList = () => {

    const dispatch = useAppDispatch()

    const todoList = useAppSelector(s => s.app.todosList)
    const listValue = useAppSelector(s => s.app.listValue)

    const changeCheck = useCallback((todo: ITodo) => {
        dispatch(changeTodoCheck({
            string: todo.string,
            check: !todo.check,
        }));
    }, [dispatch]);
    
    const filteredList = useMemo(() => {
        return filterList(listValue, todoList);
    }, [listValue, todoList]);

    return (
        [...filteredList].reverse().map((e:ITodo) => (
            <TodoItem 
                key={e.string}
                e={e} 
                changeCheck={changeCheck}
            />
        ))
    )
}

export default TodoList