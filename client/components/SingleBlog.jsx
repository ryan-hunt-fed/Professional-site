import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { thunkPost } from '../actions/blogAction'

function SingleBlog() {
    const dispatch = useDispatch()
    const blog = useSelector((store) => store.blog)
    // useSelector
    console.log(blog, 'from single');
    let { id } = useParams()

    useEffect(() => {
        dispatch(thunkPost(id))
    }, [])


    return (
        <>

            <div className='load-animation'>
                <div className='blog-title'>
                    <h1>Blog</h1>
                </div>
                <div>
                    <h2>Title: {blog?.title}</h2>
                </div>
                <div>
                    <p>Post:{blog?.post}</p>
                </div>
                <div>
                    <button>edit</button>
                </div>
            </div>

        </>
    )
}

export default SingleBlog