import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

import Background from './Background'

function Home() {

    return (
        <>
            <Background />
            <div className="header">
                <div className="header-title">
                    <h1>Ryan Hunt</h1>
                </div>
                <h2 className='icon grow-icon'>RH</h2>
            </div>
            <div className='intro-text'>
                <h2>Frontend Web Developer || 3D Artist</h2>

                <p>
                    I am currently based in Wellington, New Zealand. I would consider myself a relaible, honest and hardworking person. I have a large interest in design elements, for instance with UI and 3D art, as I want my career to have a creative side to it. From my skills listed below I have had a mix of study with the most recent being my completed Web Development studies at Dev Academy. I am very eager to learn areas of UI and improve my overall skill level for code with such pieces as CSS, Javascript and other areas of code I&#39;m interested in. To the other side of this I also want to improve my 3D art and general art skills to help with my creative designs and process. My current focus is coding but I&#39;m open to any 3D oppertunities if offered. My overall career goal is to keep creating things as that is what I find myself enjoying the most. With this knowledge, if put in the right position I would strive to be an integral part of any team and would be very eager to learn and hone my array of skillsets. For a more in depth description of myself and my career interests, please see my <Link to='/About' className='links'><>about</></Link>.
                </p>
                <div className='intro-skillsets'>
                    <div>
                        <p className='skills-title'>Code Skillset</p>
                        <ul>
                            <li>HTML</li>
                            <div className='progress-line html'>
                                <span></span>
                            </div>
                            <li>CSS</li>
                            <div className='progress-line css'>
                                <span></span>
                            </div>
                            <li>Javascript</li>
                            <div className='progress-line js'>
                                <span></span>
                            </div>
                            <li>React.js</li>
                            <div className='progress-line react'>
                                <span></span>
                            </div>
                            <li>SASS</li>
                            <div className='progress-line sass'>
                                <span></span>
                            </div>
                            <li>Git</li>
                            <div className='progress-line git'>
                                <span></span>
                            </div>
                            <li>Node.js</li>
                            <div className='progress-line node'>
                                <span></span>
                            </div>
                        </ul>
                        <p className='skills-title'>Code Areas of Interest for Learning</p>
                        <ul>
                            <li>UI - for both code and design</li>
                            <li>Web Design</li>
                            <li>Bootstrap</li>
                            <li>WebFlow</li>
                            <li>Vue.js</li>
                            <li>CSS Frameworks</li>
                            <li>WebGL</li>
                            <li>Three.js</li>
                            <li>Game Development</li>
                            <li>C#/C++ - For Game Development</li>
                            <li>VR and AR</li>
                        </ul>
                    </div>
                    <div>
                        <p className='skills-title'>3D & Art Skillset</p>
                        <ul>
                            <li>Modelling using Autodesk Maya</li>
                            <div className='progress-line mod'>
                                <span></span>
                            </div>
                            <li>Animation using Autodesk Maya</li>
                            <div className='progress-line ani'>
                                <span></span>
                            </div>
                            <li>Texturing using Autodesk Maya and Photoshop</li>
                            <div className='progress-line tex'>
                                <span></span>
                            </div>
                            <li>Video Editing using Adobe After Effects</li>
                            <div className='progress-line video'>
                                <span></span>
                            </div>
                            <li>Drawing using Adobe Photoshop</li>
                            <div className='progress-line draw'>
                                <span></span>
                            </div>
                        </ul>
                        <p className='skills-title'>3D & Art Areas of Interest for Learning</p>
                        <ul>
                            <li>Character Modelling</li>
                            <li>Character Sculpting</li>
                            <li>Environment Modelling</li>
                            <li>3D Printing, Resin Curing and Better Painting Practices</li>
                            <li>Good Drawing Practices and Improvements</li>
                            <li>VR Games</li>
                            <li>Good Minature Painting Practices and Improvements</li>
                            <li>Motion Capture</li>
                            <li>3D Animation Practices</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p>If you are a company wanting to hire a Frontend Web Developer, who is very eager to have a mix of design and development tasks, a large interest in UI and further learning in a range of areas, please <a href='mailto: rhuntwd@gmail.com' className='links'>contact me</a>. If you are a Game company who are currently looking for people to take internships for 3D modelling roles, please also <a href='mailto: rhuntwd@gmail.com' className='links'>contact me</a>. I additionally have my <a href='https://www.linkedin.com/in/ryanhuntfwd/overlay/1635522548497/single-media-viewer/?profileId=ACoAABKA5PgBGTaKr2IB7emEU4tJxtFXJRMEf2k' className='links'>CV</a> avaiable for view at your interest.</p>
                </div>

            </div>
            <Fade bottom>
                <div className='main-container' >
                    <div className='scroller-container snap' >
                        <div className='scroller-item-1 grow' >
                            <Link to='/Portfolio'>
                                <h3 className='scroller-text'>Portfolio</h3>
                            </Link>
                        </div>
                        {/* <div className='scroller-item-2 grow'>
                            <Link to='/Blog'>
                                <h3 className='scroller-text'>Blog</h3>
                            </Link>
                        </div> */}
                        <div className='scroller-item-5 grow'>
                            <Link to='/About'>
                                <h3 className='scroller-text'>About</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default Home