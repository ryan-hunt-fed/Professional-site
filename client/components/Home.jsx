import React from 'react'
import { Link } from 'react-router-dom'
// import Fade from 'react-reveal/Fade';

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
                <h2>Frontend Web Developer || 3D Artist || Tutor</h2>

                <p>
                    Hi there, I&#39;m based in Wellington, New Zealand. I would consider myself a relaible, honest and hardworking person. I have an interest in design elements, for instance with 3D art, UX Design and Webflow, as I want my career to have a creative side to it. As for the code side of it, I would be wanting to put my skills towards a Frontend Dev role, or an area that after some more training I would be able to do, for example an area involing Three.js.
                </p>
                <p>
                    From my skills listed below I have had a mix of study with my completed Web Development studies at Dev Academy and previous studies of 3D art at Yoobee. I am very eager to learn areas of UX and coding skills, that way I can improve my overall skill level for code with such pieces as CSS, Javascript and other areas of code I&#39;m interested in. To the other side of this, I also want to improve my 3D art and general art skills to help with my creative designs and process. My current focus is coding but I&#39;m open to any 3D oppertunities if offered. I am open to any oppertunity offered, even if it doesn&#39;t align with these skills as I&#39;m in need of work.
                </p>
                <p>
                    My overall career goal is to keep creating things as that is what I find myself enjoying the most so should an oppertunity fit this I would gladly be open to talking about it as I am still trying to find the right path that I want to go on. With this knowledge, if put in the right position I would strive to be an integral part of any team and would be very eager to learn and hone my array of skillsets to be a valued asset. For a more in depth description of myself and my career interests, please see my <Link to='/About' className='links'><>about</></Link>.
                </p>
                <div className='intro-skillsets'>
                    <div>
                        <h3 className='skills-title'>Code Skillset</h3>
                        <ul className='artskills-margin'>
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
                            {/* <li>Node.js</li>
                            <div className='progress-line node'>
                                <span></span>
                            </div> */}
                        </ul>
                        <h3 className='skills-title'>Code & Web Areas of Interest for Learning</h3>
                        <ul>
                            <li>UX Design / Product Design</li>
                            <li>UI - for both code and design</li>
                            <li>Web Design</li>
                            <li>Bootstrap</li>
                            <li>WebFlow</li>
                            <li>CSS Frameworks</li>
                            <li>WebGL</li>
                            <li>Three.js</li>
                            <li>Game Development - I.E C# or C++</li>
                            <li>VR and AR</li>
                            <li>Vue</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='skills-title '>3D & Art Skillset</h3>
                        <ul className='artskills-margin'>
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
                            <li>Miniature Painting and Crafting</li>
                            <div className='progress-line paint'>
                                <span></span>
                            </div>
                        </ul>
                        <h3 className='skills-title'>3D & Art Areas of Interest for Learning</h3>
                        <ul>
                            <li>Character Modelling</li>
                            <li>Character Sculpting</li>
                            <li>Environment Modelling</li>
                            <li>Unreal Engine</li>
                            <li>Z Brush</li>
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
                    <h3>Previous Job Experience</h3>
                    <ul>
                        <li>Short Course Tutor at Yoobee College of Creative Innovation - Current Part Time role</li>
                        <li>HQ Support at NZ Electoral Commission - Temporary role - 3 weeks</li>
                        <li>ICT Support Technician at Aiscorp - Part Time role - 4 years</li>
                        <li>ICT Support Technician at OnestopIT - Part Time role - 3 years, 1 Work Experience year</li>
                    </ul>
                </div>
                <div>
                    <h3>Career Areas of Interest</h3>
                    <p>These are a list of areas I would be interested in looking at making a move to as I am always open to new oppertunities and seeing if they would lead to an area I would like to be in, some areas I have studied and have previously stated I would be interested in and some I would need further training or on the job experience.</p>
                    <p>Areas I have some experience with and/or training.</p>
                    <ul className='ideas-list'>
                        <li>3D Game Artist</li>
                        <li>3D Environment Artist</li>
                        <li>Frontend Web Developer</li>
                        <li>Tutoring</li>
                        <li>Video Editor</li>
                    </ul>
                    <p>Areas I am interetsed in but would need some more training and/or on the job experirence.</p>
                    <ul className='ideas-list'>
                        <li>UX Deisgner</li>
                        <li>3D Printer</li>
                        <li>Unreal Engine Developer/Designer</li>
                        <li>Webflow Designer</li>
                        <li>CMS Management</li>
                        <li>SalesForce</li>
                        <li>Photo Editor/Photo Basher</li>
                        <li>Motion Capture</li>
                        <li>Game Developer</li>
                        <li>VR</li>
                        <li>Interior Designer</li>
                        <li>Motion Designer</li>
                        <li>Graphic Designer</li>
                        <li>Digital Marketing</li>
                        <li>Baking/Cooking</li>
                        <li>Sound Mixer</li>
                        <li>Landscape Architect</li>
                        <li>Furniture Restoration/Furniture Flipper</li>
                        <li>Event Manager</li>
                        <li>More possibilities if I find out about any other oppertunities that give me a drive to excel in.</li>
                    </ul>
                </div>
                <div>
                    <h2 className='contact-title'>Contact</h2>
                    <p>If you are a company wanting to hire a Graduate Frontend Web Developer, a Game company who are currently looking for people to take internships for 3D modelling roles, or if you have any role that you think would fit me or would be open to giving me an oppertunity please <a href='mailto: rhuntwd@gmail.com' className='links'>contact me</a>. I additionally have my <a href='https://rhuntcv.web.app/' target="_blank" rel="noreferrer" className='links'>CV</a> avaiable for viewing on my CV website at your personal interest.</p>
                    {/* <br></br> */}
                    <ul className='contact-links'>
                        <li className='grow-link'><a className='contact-single-links ' href='mailto: rhuntwd@gmail.com'>Email</a></li>
                        <li className='grow-link'><a href='https://rhuntcv.web.app/' target="_blank" rel="noreferrer" className='contact-single-links '>Online CV</a></li>
                        <li className='grow-link'><a className='contact-single-links ' href='https://www.linkedin.com/in/ryanhuntfwd/' target="_blank" rel="noreferrer">Linkedin</a></li>
                        <li className='grow-link'><a className='contact-single-links ' href='https://github.com/ryan-hunt-fed' target="_blank" rel="noreferrer">GitHub</a></li>
                        <li className='grow-link'><a className='contact-single-links ' href='https://ryan_hunt.artstation.com/' target="_blank" rel="noreferrer">3D Portfolio</a></li>
                        <li className='grow-link'><a className='contact-single-links ' href='https://www.instagram.com/cresityryan/' target="_blank" rel="noreferrer">Instagram</a></li>
                    </ul>
                </div>

            </div>
            {/* <Fade bottom>
                <div className='main-container' >
                    <div className='scroller-container snap' >
                        <div className='scroller-item-1 grow' >
                            <Link to='/Portfolio'>
                                <h3 className='scroller-text'>Portfolios</h3>
                            </Link>
                        </div>
                        {/* <div className='scroller-item-2 grow'>
                            <Link to='/Blog'>
                                <h3 className='scroller-text'>Blog</h3>
                            </Link>
                        </div> */}
            {/* <div className='scroller-item-5 grow'>
                            <Link to='/About'>
                                <h3 className='scroller-text'>About</h3>
                            </Link>
                        </div>
                    </div>
                </div> */}
            {/* </Fade>  */}
            <div className='return-arrow-container'>
                <div className='return-arrow grow-menu'>
                    <p><strong><a href='#home-top' className='return-arrow-inside'>&#11014;</a></strong></p>
                </div>
            </div>


        </>
    )
}

export default Home