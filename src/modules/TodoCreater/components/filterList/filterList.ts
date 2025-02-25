import { ITodo } from "@/store/reducers/appSlice/appType"

export const filterList =  (listValue:string,todoList:ITodo[]) => {
    switch (listValue) {
        case 'Active':{
            return todoList.filter(todo => todo.check === false)
        }
        case 'Completed':{
            return todoList.filter(todo => todo.check === true)
        }
        default:{
            return todoList
        }
    }
}