export interface IAppState {
    todosList:ITodo[]
    listValue:string
}

export interface ITodo {
    check:boolean
    string:string
}