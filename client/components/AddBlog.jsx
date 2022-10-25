import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'

import { thunkAddPost } from '../actions/blogAction'


function AddBlog() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    // useSelector
    const [post, setPost] = useState([])
    const submitHandler = async (evt) => {
        evt.preventDefault()
        dispatch(thunkAddPost(post))
        navigate('/Blog')
    }

    const typingHandler = (evt) => {
        // setPost(evt.target.value)
        // evt.preventDefault()
        setPost({
            [evt.target.name]: evt.target.value,
        })
    }


    return (
        <>
            <div className='load-animation'>
                <div className='blog-title'>
                    <h1>New Blog Post</h1>
                </div>
                <div>
                    <form onSubmit={submitHandler}>
                        <label htmlFor='add'>Title:</label>
                        <input type='text' id='add' onChange={typingHandler} ></input>
                        <label htmlFor='add'>Summary:</label>
                        <input type='text' id='add' onChange={typingHandler} ></input>
                        <label htmlFor='add'>Post:</label>
                        <input type='text' id='add' onChange={typingHandler} ></input>
                        <button>Add Blog Post</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default AddBlog