import React from 'react'

function About() {
  return (
    <>
      <div className='load-animation'>
        <div className='about-title'>
          <h1>About</h1>
        </div>
        <div className='about-content'>
          <div className='about-standard-title'>
            <h3>Overview of Myself</h3>
            <p className='about-standard-text'>Hi, I am a New Zealand citizen trying to make my way in the world. A seeker of knowledge for improving the various skills I&#39;m interested in, a respectful and kind person who wants to find what they enjoy and reach a sense of acomplishment with it. Recent graduate of Dev Academy for web development and a former graduate of Yoobee College of Creative Innovation for 3D modelling & animation.</p>
            <h3>Career Interests</h3>
            <p className='about-standard-text'>Currently my Career interests are to have a mix of development and design for mainly web products and UI, I am open to other avenues should they be presented in such a way but these are my main goals of being involved with UI. I ideally would like to lean more into the design side more than the development but as long as I have some form of design in my work that should be enough as one of my main career goals is to have a creative side to it. I am always eager to learn as I just want to improve my skills generally. As I would like to learn areas of Three.js, webGL, and other code knowledge on my journey. I am open to having a mentor in order to imporve my UI skills and other areas I have mentioned.</p>
            <p className='about-standard-text'>My other intentions would be to try to earn a living with my 3D art, which I have studied originally at Yoobee College of Creative Innovation and also in my own time. I will always have a spot in my mind of wanting to work on games, but I know that the games industry is tough in many different ways from experience, even just trying to get my foot in the door. Should things still not work out in that way, I fully intend on trying to make my own things wheather they be my own games or my own minature line for tabletop games. As I have stated previously I just enjoy making different things. I am looking to improve my skills when I can so I reach a point I am happy with and I am up to learning new programs such as zBrush and Substance Painter. Ideally down the road I would like to get involed with character sculpting and 3D printing. For my current 3D portfolio check my <a href='/Portfolio' className='links'>portfolio</a> page</p>
            <h3>Hobbies & Personal Interests</h3>
            <p className='about-standard-text'>In my personal life, I like to play video games, get together with friends to either play Magic the Gathering or Dungeons and Dragons, drawing (Both digitally and physically), miniature painting, the previously mentioned 3D modeling and animation, catching up on the various media I&#39;m interested in, all the while trying to maintain a healthy wellbeing.</p>
            <p className='about-standard-text'>Things I would like to get into at some stage would be learning piano, getting my guitar out again, video editing, photography/astrophotography, astronomy, writing for storytelling, previously mentioned 3D printing and archery.</p>

            <h3>Contact & Work</h3>
            <ul className='about-standard-text'>
              <li><a className='links' href='mailto: rhuntwd@gmail.com'>Email</a></li>
              <li><a href='https://www.linkedin.com/in/ryanhuntfwd/overlay/1635504017595/single-media-viewer/' className='links'>CV</a></li>
              <li><a className='links' href='https://www.linkedin.com/in/ryanhuntfwd/'>Linkedin</a></li>
              <li><a className='links' href='https://github.com/ryan-hunt-fed'>GitHub</a></li>
              <li><a className='links' href='https://ryan_hunt.artstation.com/'>Artstation - 3D Portfolio</a></li>
              <li><a className='links' href='https://www.instagram.com/cm_primus/'>Instagram</a></li>
            </ul>
          </div>

        </div>
      </div>
      <div className='about-profile-image right-animation grow'>
        <img src='https://avatars.githubusercontent.com/u/107533048?v=4' alt='Ryan' />
      </div>
    </>
  )
}

export default About