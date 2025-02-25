import BottomButtons from "../BottomButtons/BottomButtons"
import TodoInput from "./components/TodoInput/TodoInput"
import TodoList from "./components/TodoList/TodoList"

const TodoCreater = () => {
    return (
        <div className="max-w-[500px] w-full">
            <TodoInput/>
            <TodoList/>
            <BottomButtons/>
        </div>
    )
}

export default TodoCreater