import React from 'react'
import { Link } from 'react-router-dom'


function Home() {





    return (
        <>
            <header className="header">
                <h1 className='name-title'>Ryan Hunt</h1>
            </header>
            <p>hello</p>

            <p>Titles:</p>
            <p>Coding & Design Interets: </p>
            <div className='main-container' >
                <div className='scroller-container snap' >

                    <div className='scroller-item-1 grow' >
                        <Link to='/Portfolio'>
                            <h3>Portfolio</h3>
                        </Link>
                    </div>
                    <div className='scroller-item-2 grow'>
                        <Link to='/Blog'>
                            <h3>Blog</h3>
                        </Link>
                    </div>
                    <div className='scroller-item-3 grow'>
                        <Link to='/Career'>
                            <h3>Career Interets</h3>
                        </Link>
                    </div>
                    <div className='scroller-item-4 grow'>
                        <Link to='/PictureOfDay'>
                            <h3>Hobbies and Personal Interets</h3>
                        </Link>
                    </div>
                    <div className='scroller-item-5 grow'>
                        <Link to='/About'>
                            <h3>About</h3>
                        </Link>
                    </div>
                    <div className='scroller-item-6 grow'>
                        <Link to='/PictureOfDay'>
                            <h3>Picture of the Day</h3>
                        </Link>
                    </div>

                </div>
            </div>
            <div>
                <p>For more information about myself please check under the <a href='/About'><strong>about</strong></a> section</p>
            </div>


        </>
    )
}

export default Home