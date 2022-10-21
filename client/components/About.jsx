import React from 'react'





function About() {
  return (
    <>
      <div className='load-animation'>
        <div className='about-title'>
          <h1>About</h1>
        </div>
        <div className='about-content'>
          <div>
            <p>Link to CV: CV can be found <a href='https://www.linkedin.com/in/ryanhuntfwd/overlay/1635504017595/single-media-viewer/' className='links'>here</a></p>

          </div>
          <div className='about-profile-image right-animation'>
            <img src='https://avatars.githubusercontent.com/u/107533048?v=4' alt='Ryan' />
          </div>

        </div>
      </div>
    </>
  )
}

export default About