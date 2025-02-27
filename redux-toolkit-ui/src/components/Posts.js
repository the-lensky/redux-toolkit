import React from 'react'
import PostItem from './PostItem'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../features/post/postSlice'

const Posts = () => {
    const posts = useSelector(state => state.post.posts)
    const dispatch = useDispatch()
    const getPostsHandler = () => {
        dispatch(getPosts())
    }
    return (
        <div>
            <button
                type="submit"
                className="bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm"
                onClick={getPostsHandler}
            >
                Get posts
            </button>
            {
                posts.map(post => (
                    <PostItem key={post.id} {...post} />
                ))
            }
        </div>
    )
}

export default Posts
