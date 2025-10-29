import { ITodo } from '@/store/reducers/appSlice/appType'
import React, { memo } from 'react'
interface IProps {
    changeCheck:(e:ITodo) => void,
    e:ITodo
}

export const TodoItem = memo(({
    changeCheck,
    e,
}:IProps) => {
    return (
        <div className='select-none w-full flex items-center gap-[10px] border border-gray border-solid px-[5px] py-[10px] text-[20px]'>
            <div onClick={() => changeCheck(e)} className='w-[30px] h-[30px] rounded-[100%] border border-[gray] flex items-center justify-center'>
                {e.check&&
                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
                        <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                }
            </div>
            <p>{e.string}</p>
        </div>
    )
})
