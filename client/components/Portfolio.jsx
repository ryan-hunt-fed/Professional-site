import React from 'react'
import Fade from 'react-reveal/Fade';

import Background from './Background';

function Portfolio() {
  return (
    <>
      <Background />
      <div className='portfolio-content load-animation'>
        <div className='portfolio-title'>
          <h1 className='portfolio-title-color'>Portfolios</h1>
        </div>

        <h2 className='portfolio-standard-header'>Web Portfolio</h2>
        <p className='portfolio-standard-text'>
          Here are examples of my work, starting with the creation of this website. Any questions about certain projects feel free to <a href='mailto: rhuntwd@gmail.com' className='links'>contact me</a>. To see my in progress development, feel free to check my <a href='https://github.com/ryan-hunt-fed' className='links'>GitHub</a> profile and look at my public repositories.
        </p>



        <div className='web-project-container'>
          <div className='web-projects grow'>
            <p className='project-title'><strong>Portfolio website</strong></p>
            <p>Solo Project</p>
            <p>
              Frontend & Backend, CSS/SASS, React (Actions, Reducers, Components, Api calls to Backend), Redux, Javascript, CSS Animation & Keyframes, Sever Routes, Knex Migrations & Seeds, Database and Authentication.
            </p>
          </div>
          <div className='web-projects grow'>
            <p className='project-title'>
              <strong>Dev Academy Final Group Project</strong>
            </p>
            <img src="./images/PokeHuman-small.png" alt="Pokehuman"></img>
            <p>
              <a href='https://www.youtube.com/watch?v=McOADYs6mEM' className='links'>Youtube Demo</a>
            </p>
            <p>
              Contributions: CSS/SASS, React Components, Javascript battle screen logic collabriation, Product owner, README documentation.
            </p>
          </div>
          <div className='web-projects grow'>
            <p className='project-title'><strong>Film data website</strong></p>
            <p>Solo Project</p>
            {/* <p><a href='https://film-data-2023.web.app/' className='links'>Live website</a></p> */}
            <p>No longer able to view due to changes with IMDB API, can no longer get data from API</p>
            <p>
              Frontend, CSS/SASS, React (Components, Api calls to IMDB API), Javascript, CSS Animation & Keyframes.
            </p>

          </div>
          <div className='web-projects grow'>
            <p className='project-title'><strong>Pokemon search and generation website</strong></p>
            <p>Solo Project</p>
            <p><a href='https://pokemon-gene.web.app/' className='links'>Live website</a></p>
            <p>
              Frontend, CSS/SASS, React (Components, Api calls to Pokemon API), Javascript.
            </p>

          </div>
        </div>

        <h2 className='portfolio-standard-header'>3D Portfolio</h2>
        <p className='portfolio-standard-text'>
          For the other side of my careeer, I would like work in  3D Art profesionally in the games industry. I have been wanting to work in the games industry since a young age because of the stories and general creation of different worlds. While I have not been able to get my foot in the door with that industry to this day, I still do have my own asperations of trying to make either my own games or minatures when the time comes. So should coding become my main job, I will still continue with my 3D journey in my personal time. I have included my 3D portfolio in case any oppertunities or interships become avaliable, please <a href='mailto: rhuntwd@gmail.com' className='links'>contact me</a> for possible interest. I am more interested in 3D modelling than animation currently.
        </p>

        <Fade bottom>
          <div className='art-project-container'>
            <div className='art-projects grow'>
              <p className='project-title'><strong>Featured 3D Project</strong></p>
              <img src='https://cdna.artstation.com/p/assets/images/images/043/741/370/large/ryan-hunt-001.jpg?1638150461' alt='featured' />
              <br />
              <a href='https://ryan_hunt.artstation.com/projects/9NmoWW?album_id=778023' className='links'>Featured Project</a>
            </div>
            <div className='art-projects grow'>
              <p className='project-title'><strong>3D Modelling</strong></p>
              <img src='https://cdna.artstation.com/p/assets/images/images/021/026/626/large/ryan-hunt-fort-scene-27-redone-fort-scene-camerashape1-beauty-0001.jpg?1570088551' alt='featured' />
              <br />
              <a href='https://ryan_hunt.artstation.com/albums/778023' className='links'>Model Album</a>
            </div>
            <div className='art-projects grow'>
              <p className='project-title'><strong>3D Animation</strong></p>
              <img src='https://cdna.artstation.com/p/assets/images/images/009/370/510/large/ryan-hunt-render-13.jpg?1518596283' alt='featured' />
              <br />
              <a href='https://ryan_hunt.artstation.com/albums/778025' className='links'>Animation Album</a>
            </div>
          </div>
        </Fade>
      </div>
    </>
  )
}

export default Portfolio