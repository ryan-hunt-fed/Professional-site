import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { thunkDelPost } from '../actions/blogAction'
import { logoutUser } from '../actions/auth'

function Blog() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const blog = useSelector((store) => store.blog)
  const auth = useSelector((store) => store.auth)
  console.log(blog)

  const logout = () => {
    const confirmSuccess = () => navigate('/Blog')
    dispatch(logoutUser(confirmSuccess))
  }

  return (
    <>
      <div className='load-animation'>
        <div className='blog-title'>
          <h1>Blog</h1>
        </div>
        <div className='blog-new'>
          {auth.isAuthenticated ? <Link to='/Blog/add' className='links'>Add New Post</Link> : <></>}
          {auth.isAuthenticated ? <Link to="/Blog" onClick={logout} className="links">
            Logout
          </Link> : < Link to='/Login' className='links'>Admin Login</Link>}
        </div>
        <br />
        <div className='blog-posts-container'>
          {blog.map((post, idx) => {
            return (
              <>
                <div className='blog-posts grow' key={idx}>
                  <h2><a href={`/Blog/${post.id}`} className='links'>{post.title}</a></h2>
                  <p className='blog-posts-text'>{post.summary}</p>
                  {/* <Link to={`/Blog/${post.id}`} className='blog-posts-text'>View Post</Link> */}
                  {auth.isAuthenticated ? <button onClick={(evt) => {
                    evt.preventDefault()
                    dispatch(thunkDelPost(post.id))
                  }}>delete post</button> : <></>}
                </div>
              </>
            )
          }
          )}
        </div>


      </div>

    </>
  )
}

export default Blog