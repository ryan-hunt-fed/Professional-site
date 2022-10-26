import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Home from './Home'
import Nav from './Nav'
import Portfolio from './Portfolio'
import Blog from './Blog'
import SingleBlog from './SingleBlog'
import AddBlog from './AddBlog'
import About from './About'
import PictureOfDay from './PictureOfDay'

import { thunkPost } from '../actions/blogAction'


//TODO use authentication for a login for myself to make new blog posts
//TODO add three.js to site in some way
//TODO change background, possible animated background, possibly change colour scheme
//TODO get picture of the day to work or transform it to some form of three.js thing
//TODO look over content and see if things need to be culled
//TODO look into webGL possibilities
//TODO  have some form of js functionality to display that

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(thunkPost())
  }, [])

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Blog/:id' element={<SingleBlog />} />
        <Route path='/Blog/add' element={<AddBlog />} />
        <Route path='/About' element={<About />} />
        <Route path='/PictureOfDay' element={<PictureOfDay />} />
      </Routes>
    </>
  )
}

export default App
