import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from '../features/todo/todoSlice'

const TodoItem = ({ id, text, complete }) => {
    const dispatch = useDispatch()
    const toggleTodoHandler = (id) => {
        dispatch(toggleTodo(id))
    }
    const removeTodoHandler = (id) => {
        dispatch(removeTodo(id))
    }
    return (
        <div className="flex justify-between items-center my-2">
            <div
                className="text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400"
                onClick={() => toggleTodoHandler(id)}
            >
                Complete
            </div>
            <div className={`text-sm ${complete ? 'line-through font-medium text-lime-400' : ''}`}>
                {text}
            </div>
            <div
                className="text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer"
                onClick={() => removeTodoHandler(id)}
            >
                Delete
            </div>
        </div>
    )
}

export default TodoItem
