import React from 'react'




function Portfolio() {
  return (
    <>

      <div className='portfolio-content load-animation'>
        <div className='portfolio-title'>
          <h1>Portfolio</h1>
        </div>

        <h2>Web Portfolio</h2>
        <p>The creation of ths website goes towards my portfolio. Here are more examples of my work.</p>

        <div className='web-project-container'>
          <div className='web-projects grow'>
            <p>Dev Academy Group Project</p>
            <img src="./images/PokeHuman-small.png" alt="Pokehuman"></img>
            <p><a href='https://www.youtube.com/watch?v=McOADYs6mEM' className='links'>Youtube Demo</a></p>
            <p>Contributions: CSS/SASS, React components, Javascript battle screen logic collabriation, Product owner</p>
          </div>
        </div>

        <p>To see my in progress development, feel free to check my <a href='https://github.com/ryan-hunt-fed' className='links'>GitHub</a></p>

        <h2>3D Portfolio</h2>
        <p> My other side to the coin has been my 3D journey as I have been wanting to work in the games industry and while I do have my own asperations of making my own games and minatures </p>

        <div className='art-project-container'>
          <div className='art-projects grow'>
            <p>Latest Finished 3D Project</p>
            <a href='https://ryan_hunt.artstation.com/projects/9NmoWW?album_id=778023' className='links'>Featured Project</a>
          </div>
          <div className='art-projects grow'>
            <p>3D Modelling</p>
            <a href='https://ryan_hunt.artstation.com/albums/778023' className='links'>Model Album</a>
          </div>
          <div className='art-projects grow'>
            <p>3D Animation</p>
            <a href='https://ryan_hunt.artstation.com/albums/778025' className='links'>Animation Album</a>
          </div>
        </div>

      </div>
    </>
  )
}

export default Portfolio