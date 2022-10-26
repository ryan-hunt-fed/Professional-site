import React from 'react'

function Portfolio() {
  return (
    <>
      <div className='portfolio-content load-animation'>
        <div className='portfolio-title'>
          <h1>Portfolios</h1>
        </div>

        <h2 className='portfolio-standard-header'>Web Portfolio</h2>
        <p className='portfolio-standard-text'>The creation of ths website also goes towards my portfolio. Here are more examples of my work. Any questions about certain projects feel free to <a href='mailto: rhuntwd@gmail.com' className='links'>contact me</a>.</p>

        <div className='web-project-container'>
          <div className='web-projects grow'>
            <p><strong>Dev Academy Group Project</strong></p>
            <img src="./images/PokeHuman-small.png" alt="Pokehuman"></img>
            <p><a href='https://www.youtube.com/watch?v=McOADYs6mEM' className='links'>Youtube Demo</a></p>
            <p>Contributions: CSS/SASS, React components, Javascript battle screen logic collabriation, Product owner, README documentation.</p>
          </div>
        </div>

        <p className='portfolio-standard-text'>To see my in progress development, feel free to check my <a href='https://github.com/ryan-hunt-fed' className='links'>GitHub</a> profile and look at my public repositories that I have open.</p>

        <h2 className='portfolio-standard-header'>3D Portfolio</h2>
        <p className='portfolio-standard-text'> My other side of work I would like to do has been my 3D Art. I have been wanting to work in the games industry since a young age because of the stories and general creation. While I have not been able to get my foot in the door with that industry, I do have my own asperations of making my own games and minatures when the time comes. I have included my 3D portfolio in case any oppertunities or interships become avaliable, please <a href='mailto: rhuntwd@gmail.com' className='links'>contact me</a> for possible interest. I am more interested in 3D modelling than animation these days.</p>

        <div className='art-project-container'>
          <div className='art-projects grow'>
            <p><strong>Featured 3D Project</strong></p>
            <img src='https://cdna.artstation.com/p/assets/images/images/043/741/370/large/ryan-hunt-001.jpg?1638150461' alt='featured' />
            <br />
            <a href='https://ryan_hunt.artstation.com/projects/9NmoWW?album_id=778023' className='links'>Featured Project</a>
          </div>
          <div className='art-projects grow'>
            <p><strong>3D Modelling</strong></p>
            <img src='https://cdna.artstation.com/p/assets/images/images/021/026/626/large/ryan-hunt-fort-scene-27-redone-fort-scene-camerashape1-beauty-0001.jpg?1570088551' alt='featured' />
            <br />
            <a href='https://ryan_hunt.artstation.com/albums/778023' className='links'>Model Album</a>
          </div>
          <div className='art-projects grow'>
            <p><strong>3D Animation</strong></p>
            <img src='https://cdna.artstation.com/p/assets/images/images/009/370/510/large/ryan-hunt-render-13.jpg?1518596283' alt='featured' />
            <br />
            <a href='https://ryan_hunt.artstation.com/albums/778025' className='links'>Animation Album</a>
          </div>
        </div>

      </div>
    </>
  )
}

export default Portfolio