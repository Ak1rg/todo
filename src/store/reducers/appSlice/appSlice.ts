import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAppState, ITodo } from './appType'


const initialState: IAppState = {
    todosList:[],
    listValue:'All'
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        addTodo(state,action:PayloadAction<ITodo>) {
            state.todosList.push(action.payload)
        },
        changeValue(state,action:PayloadAction<string>) {
            state.listValue = action.payload
        },
        changeTodoCheck(state,action:PayloadAction<ITodo>) {
            const string = action.payload.string
            const index = state.todosList.findIndex(todo => todo.string === string)
            state.todosList[index] = action.payload
        },
        clearCompleted(state) {
            state.todosList = state.todosList.filter(e => e.check !== true)
        },
    },
})

export const { addTodo, changeTodoCheck, changeValue,clearCompleted } = appSlice.actions

export default appSlice.reducer