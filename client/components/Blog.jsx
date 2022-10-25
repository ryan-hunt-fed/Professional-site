import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Blog() {

  // useSelector
  const blog = useSelector((store) => store.blog)
  console.log(blog)

  return (
    <>

      <div className='load-animation'>
        <div className='blog-title'>
          <h1>Blog</h1>
        </div>
        <div className='blog-posts-container'>
          {blog.map((post, idx) => {
            return (
              <>
                <div className='blog-posts' key={idx}>
                  <h2>{post.title}</h2>
                  <p className='blog-posts-text'>{post.summary}</p>
                  <Link to={`/Blog/${post.id}`} className='blog-posts-text'>View Post</Link>
                </div>
              </>
            )
          }
          )}
        </div>

        <div>
          <Link to='/Blog/add'>Add New Post</Link>

        </div>
      </div>

    </>
  )
}

export default Blog