import React from 'react'
import { Link } from 'react-router-dom'

import Background from './Background'

function About() {
  return (
    <>
      <Background />
      <div className='load-animation'>
        <div className='about-title'>
          <h1>About</h1>
        </div>


        <div className='about-content'>
          <div className='about-text-container'>
            <div className='about-standard-title'>
              <h3>Overview of Myself</h3>
              <p className='about-standard-text'>Hello there, I&#39;m a New Zealand citizen trying to make my way in the world. A seeker of knowledge for improving the various skills I&#39;m interested in, a respectful and kind person. What I&#39;m wanting to do is to find what I enjoy and then reach a sense of acomplishment with it, if given the chance to. I&#39;m a recent graduate of Dev Academy for Web Development and a former graduate of Yoobee College of Creative Innovation for 3D Modelling & Animation. Currently I&#39;m at the stage of my life where I want to move onto what&#39;s next, so I&#39;m hoping that I can make that change soon. </p>
              <p className='about-standard-text'>As of now, I currently work as a part time short course tutor at Yoobee College of Creative Innovation in Wellington, but I am still on the hunt for my main job.</p>
              <h3>Career Interests</h3>
              <p className='about-standard-text'>Currently my Career interests for Web Design and Development are to have a mix of each with a UI focus, I&#39;m open to other avenues should they be presented in such a way but these are my main goals of being involved with UI. I ideally would like to lean more into the design side more than the development but as long as I have some form of design in my work, that should be enough as one of my main career goals is to have a creative side to it, at the very least would take me some time to evaluate if it is for me. Spending my time on youtube and looking at the differeent tutorials for CSS, animation and WebGL has really peaked my interest, so this is why I&#39;m reiterating why UI is a focus for me. I&#39;m always eager to learn as I just want to improve my skills generally. As I would like to learn areas of Three.js, WebGL, C# for game development and other code knowledge on my journey, while also improving my CSS and Javascript skills. I&#39;m open to having a mentor in order to imporve my UI skills and other areas I have mentioned. While I have not had any professional training as a UI designer, I&#39;m also interested in this area and have the notion that if code is not working for me, I would try to transition to a UI Designer with the proper help (ideally within a company if they would agree). With this I would be open to any training or advice on transistioning to a UI Designer should I fully make that decision.</p>
              <p className='about-standard-text'>My other intentions would be to try to earn a living with my 3D art, which I have studied originally at Yoobee College of Creative Innovation and also in my own time. I will always have a spot in my mind of wanting to work on games, but I know that the games industry is tough in many different ways from experience, even just trying to get my foot in the door I have found it difficult here in New Zealand. However I&#39;m still interested in this area to this day and while I have only had personal expereience, I have not had any work experience in a studio. So for now I&#39;m open to any internships if they are offered to see how a work pipeline works or any entry level positions if training is included. Should things still not work out in that way, I fully intend on trying to make my own designs to sell, wheather they be my own games or my own minature line for a tabletop game. As I have stated previously I just enjoy making different things. I&#39;m looking to improve my skills when I can so I reach a point I&#39;m happy with and I&#39;m up to learning new programs such as zBrush and Substance Painter. Ideally down the road I would like to get involed with character sculpting and 3D printing. For my current 3D portfolio check my <Link to='/Portfolio' className='links'><>portfolio</></Link> page</p>
              <p className='about-standard-text'> For other possible anvenues I&#39;m interested in as stated before I would be interested in UI/UX design, Game Delevopment, Motion Designer, interior Design and Digital Marketing.</p>
              <p className='about-standard-text'>As an additonal note for previous study, I previously did a year and a half of Architecture study at Weltec. However due to personal reasons and how the schedule changed while studying part time, I decided to leave it. </p>
              <h3>Hobbies & Personal Interests</h3>
              <p className='about-standard-text'>In my personal life, I like to play video games, get together with friends to either play Magic the Gathering or Dungeons and Dragons, drawing (Both digitally and physically), miniature painting, the previously mentioned 3D modeling and animation which for the moment is working on my on IP to possibly make into a game or minature line, catching up on the various media I&#39;m interested in, all the while trying to maintain a healthy wellbeing.</p>
              <p className='about-standard-text'>Things I would like to get into at some stage would be learning piano, getting my guitar out again, video editing, photography/astrophotography, astronomy, writing for storytelling, previously mentioned 3D printing and archery.</p>

              <h1 className='contact-title'>Contact</h1>
              <ul className='about-standard-text'>
                <li><a className='links' href='mailto: rhuntwd@gmail.com'>Email</a></li>
                <li><a href='https://www.linkedin.com/in/ryanhuntfwd/overlay/1635537186460/single-media-viewer/?profileId=ACoAABKA5PgBGTaKr2IB7emEU4tJxtFXJRMEf2k' className='links'>CV</a></li>
                <li><a className='links' href='https://www.linkedin.com/in/ryanhuntfwd/'>Linkedin</a></li>
                <li><a className='links' href='https://github.com/ryan-hunt-fed'>GitHub</a></li>
                <li><a className='links' href='https://ryan_hunt.artstation.com/'>Artstation - 3D Portfolio</a></li>
                <li><a className='links' href='https://www.instagram.com/cresityryan/'>Instagram</a></li>
              </ul>
            </div>

          </div>
          <div className='about-profile-image right-animation grow'>
            <img src='https://avatars.githubusercontent.com/u/107533048?v=4' alt='Ryan' />
          </div>
        </div>
      </div>

    </>
  )
}

export default About