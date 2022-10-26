import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>

      <div className='navbar'>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/Portfolio'>Portfolios</Link>
        </div>
        <div>
          <Link to='/Blog'>Blog</Link>
        </div>
        <div>
          <Link to='/About'>About</Link>
        </div>
        {/* <div>
          <Link to='/PictureOfDay'>Picture</Link>
        </div> */}
        <div></div>
        <br />
        <div className='navbar-icons'>
          <div>
            <a href='mailto: rhuntwd@gmail.com'><img className='icons grow-icon' src='https://img.icons8.com/ios-filled/344/circled-envelope.png' alt='email' /></a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/ryanhuntfwd/'><img className='icons grow-icon' src='https://img.icons8.com/ios-filled/344/linkedin-circled--v1.png' alt='Linkdin' /></a>
          </div>
          <div>
            <a href='https://github.com/ryan-hunt-fed'><img className='icons grow-icon' src='https://img.icons8.com/ios-filled/344/github.png' alt='Github' /></a>
          </div>
          <div>
            <a href='https://ryan_hunt.artstation.com/'><img className='icons grow-icon' src='https://img.icons8.com/windows/344/artstation.png' alt='Artstation' /></a>
          </div>
          <div>
            <a href='https://www.instagram.com/cm_primus/'><img className='icons grow-icon' src='https://img.icons8.com/ios-filled/344/instagram-new--v1.png' alt='Instagram' /></a>
          </div>

        </div>

      </div>

    </>
  )
}

export default Nav