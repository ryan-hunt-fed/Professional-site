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


    const submitHandler = (evt) => {
        evt.preventDefault()
        dispatch(thunkAddPost(post))
        navigate('/Blog')
    }

    const typingHandler = (evt) => {
        setPost({
            ...post,
            [evt.target.name]: evt.target.value,
        })
    }

    return (
        <>
            <div className='load-animation'>
                <div className='blog-title'>
                    <h1>New Blog Post</h1>
                </div>
                <div className='add-blog-form-container'>
                    <form className='add-blog-form-direction' onSubmit={submitHandler}>
                        <label className='add-blog-form' htmlFor='title'>Title:</label>
                        <input type='text' name='title' id='title' onChange={typingHandler}></input>
                        <label className='add-blog-form' htmlFor='summary'>Summary:</label>
                        <input type='text' name='summary' id='summary' onChange={typingHandler} ></input>
                        <label className='add-blog-form' htmlFor='post'>Post:</label>
                        <textarea type='text' name='post' id='post' onChange={typingHandler} ></textarea>
                        <button className='add-blog-form'>Add Blog Post</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default AddBlog