import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { Canvas } from "@react-three/fiber";


import Home from './Home'
import Nav from './Nav'
import Portfolio from './Portfolio'
import Blog from './Blog'
import SingleBlog from './SingleBlog'
import AddBlog from './AddBlog'
import About from './About'
// import PictureOfDay from './PictureOfDay'
import Login from './Login'
import Three from './Three'
// import Background from './Background'
// import Box from './Box'

import { thunkPost } from '../actions/blogAction'

//TODO fix delete issue on blog, once deleted post data won't match up on the specific data
//TODO add edit/update to blog posts
//TODO add three.js to site in some way
//TODO look into webGL possibilities
//TODO  have some form of js functionality to display that - form of blog and some other functionality
//TODO animated background


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(thunkPost())
  }, [])

  return (
    <>
      <Nav />
      {/* <Background /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Blog/:id' element={<SingleBlog />} />
        <Route path='/Blog/add' element={<AddBlog />} />
        <Route path='/About' element={<About />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Three' element={<Three />} />
      </Routes>
    </>
  )
}

export default App
