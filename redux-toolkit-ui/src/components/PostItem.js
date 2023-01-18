import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePostById } from '../features/post/postSlice'

const PostItem = ({ title, id }) => {
    const dispatch = useDispatch()
    const deleteHandler = () => {
        dispatch(deletePostById(id))
    }
    return (
        <div
            className="flex w-full bg-indigo-500 hover:bg-indigo-300 transition-all py-1 px-2 text-white rounded-sm cursor-pointer mt-4"
            onClick={deleteHandler}
        >
            {title}
        </div>
    )
}

export default PostItem
