import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Nav from './Nav'
// import Header from './Header'
import PictureOfDay from './PictureOfDay'
import Blog from './Blog'
import Portfolio from './Portfolio'
import Career from './Career'

function App() {
  return (
    <>
     {/* <Header /> */}
     <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path='/Career' element={<Career/>}/>
        <Route path='/PictureOfDay' element={<PictureOfDay/>}/>

      </Routes>
    </>
  )
}

export default App
