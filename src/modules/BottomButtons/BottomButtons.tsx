'use client';
import { changeValue, clearCompleted } from '@/store/reducers/appSlice/appSlice';
import { useAppDispatch, useAppSelector } from '@/store/store'
import React, { useEffect, useState } from 'react'
import { ITodo } from '@/store/reducers/appSlice/appType';
import { filterList } from '../TodoCreater/components/filterList/filterList';

export const filterItemsLeft = (listValue:string,todoList:ITodo[]) => {
    return filterList(listValue,todoList).filter(e => e.check!==true).length
}

const BottomButtons = () => {

    const dispatch = useAppDispatch()

    const todoList = useAppSelector(s => s.app.todosList)
    const listValue = useAppSelector(s => s.app.listValue)

    const [listLength, setlistLength] = useState<number>(0)

    const btnsArr:string[] = ['All','Active','Completed']

    const changeListValue = (string:string) => {
        dispatch(changeValue(string))
    }

    const clear = () => {
        dispatch(clearCompleted())
    }

    useEffect(() => {
        setlistLength(filterItemsLeft(listValue,todoList))
    },[todoList,listValue])

    return (
        <div className='flex py-[5px] justify-between'>
            <p>{listLength} items left</p>
            <div className='flex gap-[5px]'>
                {
                    btnsArr.map((e,i) => (
                        <div
                            key={i} 
                            onClick={() => changeListValue(e)}
                            className={`border ${e===listValue?'border-gray':'border-transparent'} px-[5px] cursor-pointer`}
                        >
                            {e}
                        </div>
                    ))
                }
            </div>
            <button onClick={clear} data-testid='clear'>
                Clear completed
            </button>
        </div>
    )
}

export default BottomButtons