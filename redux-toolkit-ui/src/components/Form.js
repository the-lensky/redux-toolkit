import uuid4 from 'uuid4'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addTodo } from '../features/todo/todoSlice'

const Form = () => {
    const dispatch = useDispatch()
    const [todoValue, setTodoValue] = useState('')

    const addTodoHandler = () => {
        const todo = {
            id: uuid4(),
            text: todoValue,
            complete: false
        }
        dispatch(addTodo(todo))
    }

    return (
        <form className="w-full flex" onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                placeholder="Type something..."
                className="w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm"
                value={todoValue}
                onChange={e => setTodoValue(e.target.value)}
            />
            <button
                type="submit"
                className="shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm"
                disabled={!todoValue.length}
                onClick={addTodoHandler}
            >
                Submit
            </button>
        </form>
    )
}

export default Form
