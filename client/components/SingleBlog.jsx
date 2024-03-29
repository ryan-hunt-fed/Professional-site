import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

import { thunkPost } from '../actions/blogAction'

function SingleBlog() {
    const dispatch = useDispatch()
    const blog = useSelector((store) => store.blog)
    console.log(blog, 'store from single current test');
    let { id } = useParams()
    id === blog.id
    // console.log(id, 'id from single')

    useEffect(() => {
        dispatch(thunkPost(id))
    }, [id])


    return (
        <>
            <div className='load-animation'>
                <div className='blog-title'>
                    <h1>Blog</h1>
                </div>
                <div className='blog-single-container' key={blog.id}>
                    <div className='blog-single-title'>
                        <h2 className='blog-single-tab-title'>{blog[id - 1]?.title}</h2>
                    </div>
                    <div className='blog-single-text'>
                        <p>{blog[id - 1]?.post}</p>
                    </div>
                    <div className='blog-single-text'>
                        <Link to='/blog' className='links'>Back</Link>
                    </div>

                </div>
            </div>

        </>
    )
}

export default SingleBlog