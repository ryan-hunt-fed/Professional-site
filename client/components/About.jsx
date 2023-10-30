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
              <h3>About Me</h3>
              <p className='about-standard-text'>Hello there, I&#39;m a New Zealand citizen trying to make my way in the world. A seeker of knowledge for improving the various skills I&#39;m interested in, a respectful and kind person. What I&#39;m wanting to do is to find what I enjoy and then reach a sense of acomplishment with it, if given the chance to. I&#39;m a graduate of Dev Academy for Web Development and a graduate of Yoobee College of Creative Innovation for 3D Modelling & Animation. Currently I&#39;m at the stage of my life where I want to move onto what&#39;s next, so I&#39;m trying to make that change. </p>
              <p className='about-standard-text'>Currently I work as a part time Short Course Tutor at Yoobee College of Creative Innovation in Wellington, mainly during the school holidays but I am still on the hunt for my main job. I have currently been through a rough spot and have been trying to land a job wheather I have the proper skills or to be open to training, so any sorts of oppertunities I would be open to disscusing at this stage.</p>
              <h3>Career Interests</h3>
              <p className='about-standard-text'>Currently my Career interests for Web Design and Development are to have a mix of a creative focus. I ideally would like to lean more into the design side more than the development but as long as I have some form of design in my work, that should be enough as one of my main career goals is to have a creative side to it. I&#39;m always eager to learn as I just want to improve my skills generally. As I would like to learn areas of Three.js, WebGL, C# for game development and other code knowledge on my journey, while also improving my CSS and Javascript skills. So any graduate or internship role for this area would be a great help to start out my career in this section of work. I have also have an interest in UX design and while I may only have small certifications in that area, if given the oppertunity, I would be open to any internships or on the job learning for that area as it also has a mix of skills that I have used in the past with my previous jobs. I&#39;m also open to having a mentor in order to improve my UX design skills and other areas I have mentioned. </p>
              <p className='about-standard-text'>My other intentions would be to try to earn a living with my 3D art, which I have studied originally at Yoobee College of Creative Innovation and also in my own time. I will always have a spot in my mind of wanting to work on games, but I know that the games industry is tough in many different ways from experience, even just trying to get my foot in the door I have found it difficult here in New Zealand. However I&#39;m still interested in this area to this day and while I have only had personal expereience, I have not had any work experience in a studio. So for now I&#39;m open to any internships if they are offered to see how a work pipeline works or any entry level positions if training is included. Should things still not work out in that way, I fully intend on trying to make my own designs to sell, wheather they be my own games or my own minature line for a tabletop game which is my currewnt side project, that way I know myself that I gave it all my effort. As I have stated previously I just enjoy making different things. I&#39;m looking to improve my skills when I can so I reach a point I&#39;m happy with and I&#39;m up to learning new programs such as zBrush, Unreal Engine and Substance Painter. Ideally down the road I would like to get involed with character sculpting and 3D printing. For my current 3D portfolio check my <Link to='/Portfolio' className='links'><>portfolio</></Link> page</p>
              <p className='about-standard-text'> For other possible anvenues I&#39;m interested in but do not have the desired training as stated before I would be interested in UX design, Game Delevopment, Motion Designer, Interior Design, Baker/Baking and Digital Marketing. For these areas I would be intereseted in any sorts of internships or on the job training if offered. Should these be out of the question I am open to any sort of work oppertunities that are offered my way even if I might be lacking certain skills but I am always eager to learn new skills, as I am open to working in different areas and I am still trying to find that particular route to satisfy what I am after. I also have a list of areas on my <Link to='/' className='links'><>home</></Link> page of areas I am aware of that I would be interested in.</p>
              <br></br>
              <h3>Hobbies & Personal Interests</h3>
              <p className='about-standard-text'>In my personal life, I like to play video games, get together with friends to either play Magic the Gathering or Dungeons and Dragons, drawing (Both digitally and physically), miniature painting, the previously mentioned 3D modeling and animation which for the moment is working on my personal IP to make into a game or minature line, catching up on the various media I&#39;m interested in and all the while trying to maintain a healthy wellbeing and finding other activites to add to my list of interests.</p>
              <p className='about-standard-text'>Things I would like to get into at some stage would be learning piano, getting my guitar out again, video editing, photography/astrophotography, astronomy, writing for storytelling, baking, rock climbing, previously mentioned 3D printing and archery.</p>

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