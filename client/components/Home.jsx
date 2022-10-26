import React from 'react'
import { Link } from 'react-router-dom'


function Home() {

    return (
        <>
            <div className="header">
                <h1 className='name-title'>Ryan Hunt</h1>
                <h2>Frontend Web Developer // 3D Artist</h2>
            </div>
            <div className='intro-text'>
                <p>I am currently based in Wellington, New Zealand. I have a large interest in design elements and want to continue my journey with it even if it&#39;s my own personal asperations for both Web and 3D Design. My overall goal is to keep creating things as that is what I enjoy and keep coming back to.</p>
                <p>If you are a company wanting to hire a Frontend Web Developer who is very eager to have a mix of development and design experience while also learning new skills in their career, please <a href='mailto: rhuntwd@gmail.com' className='links'>contact me</a>. If you are a Game company who would be willing to offer an internship for 3D modelling roles, please also <a href='mailto: rhuntwd@gmail.com' className='links'>contact me</a>.</p>
            </div>
            <div className='main-container' >
                <div className='scroller-container snap' >
                    <div className='scroller-item-1 grow' >
                        <Link to='/Portfolio'>
                            <h3 className='scroller-text'>Portfolio</h3>
                        </Link>
                    </div>
                    <div className='scroller-item-2 grow'>
                        <Link to='/Blog'>
                            <h3 className='scroller-text'>Blog</h3>
                        </Link>
                    </div>
                    <div className='scroller-item-5 grow'>
                        <Link to='/About'>
                            <h3 className='scroller-text'>About</h3>
                        </Link>
                    </div>
                    {/* <div className='scroller-item-6 grow'>
                        <Link to='/PictureOfDay'>
                            <h3 className='scroller-text'>Picture of the Day</h3>
                        </Link>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Home