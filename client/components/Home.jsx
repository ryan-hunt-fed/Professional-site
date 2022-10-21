import React from 'react'
import { Link } from 'react-router-dom'


function Home() {

    return (
        <>
            <div className="header">
                <h1 className='name-title'>Ryan Hunt</h1>
            </div>
            <div className='intro-text'>
                <h4>Frontend Web Developer // 3D Artist</h4>
                <p>I am currently based in Wellington, New Zealand. I have a large interest in design elements and want to continue my journey with it even if it&#39;s my own personal asperations for both Web and 3D Design</p>
                <p></p>
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
                    <div className='scroller-item-3 grow'>
                        <Link to='/Career'>
                            <h3 className='scroller-text'>Career Interets</h3>
                        </Link>
                    </div>
                    <div className='scroller-item-4 grow'>
                        <Link to='/PictureOfDay'>
                            <h3 className='scroller-text'>Hobbies and Personal Interets</h3>
                        </Link>
                    </div>
                    <div className='scroller-item-5 grow'>
                        <Link to='/About'>
                            <h3 className='scroller-text'>About</h3>
                        </Link>
                    </div>
                    <div className='scroller-item-6 grow'>
                        <Link to='/PictureOfDay'>
                            <h3 className='scroller-text'>Picture of the Day</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home