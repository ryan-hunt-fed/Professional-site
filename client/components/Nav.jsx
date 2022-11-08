import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>

      <div className='navbar'>
        <div className='navbar-text'>
          <Link to='/'><strong>Home</strong></Link>
        </div>
        <div className='navbar-text'>
          <Link to='/Portfolio'><strong>Portfolios</strong></Link>
        </div>
        {/* <div className='navbar-text'>
          <Link to='/Blog'><strong>Blog</strong></Link>
        </div> */}
        <div className='navbar-text'>
          <Link to='/About'><strong>About/Contact</strong></Link>
        </div>
        {/* <div className='navbar-text'>
          <Link to='/Three'><strong>Three.js</strong></Link>
        </div> */}
        <div></div>
        <br />
        <div className='navbar-icons'>
          <div>
            <a href='mailto: rhuntwd@gmail.com'><img className='icons grow-icon' src='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xNi4xMjUsMzcuNjI1djAuMTY3OTdsNjkuODc1LDQxLjk5MjE5bDY5Ljg3NSwtNDEuOTkyMTl2LTAuMTY3OTd6TTE2LjEyNSw1MC4zOTA2M3Y4My45ODQzOGgxMzkuNzV2LTgzLjk4NDM3bC02OS44NzUsNDEuODI0MjJ6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=' alt='email' /></a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/ryanhuntfwd/'><img className='icons grow-icon' src='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik04Niw2Ljg4Yy00My42MjYwOCwwIC03OS4xMiwzNS40OTA0OCAtNzkuMTIsNzkuMTJjMCw0My42Mjk1MiAzNS40OTM5Miw3OS4xMiA3OS4xMiw3OS4xMmM0My42MjYwOCwwIDc5LjEyLC0zNS40OTA0OCA3OS4xMiwtNzkuMTJjMCwtNDMuNjI5NTIgLTM1LjQ5MzkyLC03OS4xMiAtNzkuMTIsLTc5LjEyek02MS45MiwxMjAuNGgtMTMuNzZ2LTUxLjZoMTMuNzZ6TTU1LjA0LDU4LjQ4Yy0zLjgwMTIsMCAtNi44OCwtMy4wNzg4IC02Ljg4LC02Ljg4YzAsLTMuODAxMiAzLjA3ODgsLTYuODggNi44OCwtNi44OGMzLjgwMTIsMCA2Ljg4LDMuMDc4OCA2Ljg4LDYuODhjMCwzLjgwMTIgLTMuMDc4OCw2Ljg4IC02Ljg4LDYuODh6TTEyNy4yOCwxMjAuNGgtMTMuNzZ2LTE3LjJ2LTguNmMwLC02LjYyMiAtNS40MTgsLTEyLjA0IC0xMi4wNCwtMTIuMDRjLTYuNjIyLDAgLTEyLjA0LDUuNDE4IC0xMi4wNCwxMi4wNHYyNS44aC0xMy43NnYtNTEuNmgxMy43NnY2LjI0NzA0YzQuMDE3OTIsLTMuODU5NjggOS40NjY4OCwtNi4yNDcwNCAxNS40OCwtNi4yNDcwNGMxMi4zNDk2LDAgMjIuMzYsMTAuMDEwNCAyMi4zNiwyMi4zNnoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==' alt='Linkdin' /></a>
          </div>
          <div>
            <a href='https://github.com/ryan-hunt-fed'><img className='icons grow-icon' src='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik02MS4yMDEwNCwxNjEuMTE1ODRjMi40NDU4NCwtMS4wNTI2NCA0LjE1ODk2LC0zLjQ4NDcyIDQuMTU4OTYsLTYuMzE1ODR2LTE4LjU3NmMwLC0wLjY3NzY4IDAuMDU1MDQsLTEuMzgyODggMC4xNDEwNCwtMi4wOTg0Yy0wLjA0ODE2LDAuMDEzNzYgLTAuMDkyODgsMC4wMjQwOCAtMC4xNDEwNCwwLjAzNDRjMCwwIC0xMC4zMiwwIC0xMi4zODQsMGMtNS4xNiwwIC05LjYzMiwtMi4wNjQgLTExLjY5NiwtNi4xOTJjLTIuNDA4LC00LjQ3MiAtMy40NCwtMTIuMDQgLTkuNjMyLC0xNi4xNjhjLTEuMDMyLC0wLjY4OCAtMC4zNDQsLTEuNzIgMS43MiwtMS43MmMyLjA2NCwwLjM0NCA2LjUzNiwzLjA5NiA5LjI4OCw2Ljg4YzMuMDk2LDMuNzg0IDYuMTkyLDYuODggMTEuNjk2LDYuODhjOC41NTUyOCwwIDEzLjE0MDgsLTAuNDMgMTUuODk5NjgsLTEuOTA5MmMzLjIxMjk2LC00Ljc3ODE2IDcuNjYwODgsLTguNDEwOCAxMi4zMDgzMiwtOC40MTA4di0wLjA4NmMtMTkuNDk3OTIsLTAuNjI2MDggLTMxLjk1NDE2LC03LjEwNzA0IC0zNy43NTQsLTE3LjExNGMtMTIuNjA3NiwwLjE0NDQ4IC0yMy41ODQ2NCwxLjM5MzIgLTI5Ljg0ODg4LDIuNDMyMDhjLTAuMTk5NTIsLTEuMTI0ODggLTAuMzcxNTIsLTIuMjU2NjQgLTAuNTE5NDQsLTMuMzk1MjhjNi4xODE2OCwtMS4wMTgyNCAxNi42NTk5MiwtMi4yMjU2OCAyOC43MDY4LC0yLjQ1NjE2Yy0wLjM4NTI4LC0wLjk0OTQ0IC0wLjcxODk2LC0xLjkyMjk2IC0xLjAwMTA0LC0yLjkyMDU2Yy0xMi4wNzc4NCwtMC42MTIzMiAtMjIuNTAxMDQsLTAuMTM0MTYgLTI4LjE2MzI4LDAuMzMzNjhjLTAuMDY4OCwtMS4xNDIwOCAtMC4xNjE2OCwtMi4yODA3MiAtMC4xNzU0NCwtMy40MzY1NmM1LjY3MjU2LC0wLjQ2NDQgMTUuODEzNjgsLTAuOTI4OCAyNy41ODE5MiwtMC4zODE4NGMtMC4yNzE3NiwtMS43MiAtMC40NDcyLC0zLjQ3Nzg0IC0wLjQ0NzIsLTUuMzA3OTJjMCwtNS44NDggMi4wNjQsLTEyLjA0IDUuODQ4LC0xNy4yYy0xLjcyLC01Ljg0OCAtNC4xMjgsLTE4LjIzMiAwLjY4OCwtMjIuNzA0YzkuMjg4LDAgMTUuODI0LDQuNDcyIDE4LjkyLDcuMjI0YzUuODQ0NTYsLTIuNDExNDQgMTIuMzgwNTYsLTMuNzg3NDQgMTkuNjA0NTYsLTMuNzg3NDRjNy4yMjQsMCAxMy43NiwxLjM3NiAxOS4yNjQsMy43ODRjMy4wOTYsLTIuNzUyIDkuNjMyLC03LjIyNCAxOC45MiwtNy4yMjRjNS4xNiw0LjgxNiAyLjQwOCwxNy4yIDAuNjg4LDIyLjcwNGMzLjc4NCw1LjE2IDUuODQ4LDExLjAwOCA1LjUwNCwxNy4yYzAsMS42NjQ5NiAtMC4xNTQ4LDMuMjcxNDQgLTAuMzc4NCw0Ljg0Njk2YzEyLjAzNjU2LC0wLjU5MTY4IDIyLjQ1Mjg4LC0wLjExNjk2IDI4LjIyMTc2LDAuMzUwODhjLTAuMDA2ODgsMS4xNTkyOCAtMC4xMTM1MiwyLjI5MTA0IC0wLjE3NTQ0LDMuNDM2NTZjLTUuNzQ4MjQsLTAuNDc0NzIgLTE2LjQyNiwtMC45NjMyIC0yOC43NTQ5NiwtMC4zMDYxNmMtMC4zMDYxNiwxLjE1NTg0IC0wLjY3NzY4LDIuMjgwNzIgLTEuMTE4LDMuMzcxMmMxMi4xOTgyNCwwLjE1ODI0IDIyLjkyNzYsMS4zMzgxNiAyOS40MDUxMiwyLjM3MDE2Yy0wLjE0NzkyLDEuMTQyMDggLTAuMzE5OTIsMi4yNzM4NCAtMC41MTk0NCwzLjM5NTI4Yy02LjU3NzI4LC0xLjA1MjY0IC0xNy43ODgyNCwtMi4yODQxNiAtMzAuNTQzNzYsLTIuMzQ2MDhjLTUuNzI3Niw5LjkwMDMyIC0xNy45NTY4LDE2LjM1NzIgLTM3LjA3Mjg4LDE3LjExMDU2djAuMTA2NjRjOC45NDQsMCAxNy4yLDEzLjQxNiAxNy4yLDIyLjcwNHYxOC41NzZjMCwyLjgzMTEyIDEuNzEzMTIsNS4yNjMyIDQuMTU4OTYsNi4zMTU4NGMzMS41MTM4NCwtMTAuNDMwMDggNTQuMzIxMDQsLTQwLjE1MTY4IDU0LjMyMTA0LC03NS4xMTU4NGMwLC00My42MjYwOCAtMzUuNDkwNDgsLTc5LjEyIC03OS4xMiwtNzkuMTJjLTQzLjYyOTUyLDAgLTc5LjEyLDM1LjQ5MzkyIC03OS4xMiw3OS4xMmMwLDM0Ljk2NDE2IDIyLjgwNzIsNjQuNjg1NzYgNTQuMzIxMDQsNzUuMTE1ODR6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=' alt='Github' /></a>
          </div>
          <div>
            <a href='https://ryan_hunt.artstation.com/'><img className='icons grow-icon' src='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik03My44MDEyNywyNi44NzVsNjUuOTQ4NzMsMTE4LjI1bDEwLjcxODUxLC0yNC4yNTA0OWMyLjQ4ODYzLC00Ljk3NzI1IDIuMjM1NzUsLTEwLjg4NTQ3IC0wLjY2MTM4LC0xNS42MzE1OWwtNDEuNzkyNzMsLTcwLjY1MTg1Yy0yLjkyOTM4LC00Ljc4OTEyIC04LjE0NjA3LC03LjcxNjA2IC0xMy43NjI5NCwtNy43MTYwNnpNNjEuODc1NDksMzguNTgwMzJsLTMxLjYwOTYyLDU4LjE2OTY4aDY0LjA0ODU4ek0yMS41LDExMi44NzVsMTEuNjczODMsMjMuMzM3MTZjMi43MzA1LDUuNDYxIDguMzA3ODIsOC45MTI4NCAxNC40MTM4Miw4LjkxMjg0aDczLjcwNjc5bC0xNy45ODMxNSwtMzIuMjV6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=' alt='Artstation' /></a>
          </div>
          <div>
            <a href='https://www.instagram.com/cm_primus/'><img className='icons grow-icon' src='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik01NS4wNCwxMC4zMmMtMjQuNjY0OCwwIC00NC43MiwyMC4wNTUyIC00NC43Miw0NC43MnY2MS45MmMwLDI0LjY2NDggMjAuMDU1Miw0NC43MiA0NC43Miw0NC43Mmg2MS45MmMyNC42NjQ4LDAgNDQuNzIsLTIwLjA1NTIgNDQuNzIsLTQ0Ljcydi02MS45MmMwLC0yNC42NjQ4IC0yMC4wNTUyLC00NC43MiAtNDQuNzIsLTQ0Ljcyek0xMjcuMjgsMzcuODRjMy43ODQsMCA2Ljg4LDMuMDk2IDYuODgsNi44OGMwLDMuNzg0IC0zLjA5Niw2Ljg4IC02Ljg4LDYuODhjLTMuNzg0LDAgLTYuODgsLTMuMDk2IC02Ljg4LC02Ljg4YzAsLTMuNzg0IDMuMDk2LC02Ljg4IDYuODgsLTYuODh6TTg2LDQ4LjE2YzIwLjg4MDgsMCAzNy44NCwxNi45NTkyIDM3Ljg0LDM3Ljg0YzAsMjAuODgwOCAtMTYuOTU5MiwzNy44NCAtMzcuODQsMzcuODRjLTIwLjg4MDgsMCAtMzcuODQsLTE2Ljk1OTIgLTM3Ljg0LC0zNy44NGMwLC0yMC44ODA4IDE2Ljk1OTIsLTM3Ljg0IDM3Ljg0LC0zNy44NHpNODYsNTUuMDRjLTE3LjA2MjQsMCAtMzAuOTYsMTMuODk3NiAtMzAuOTYsMzAuOTZjMCwxNy4wNjI0IDEzLjg5NzYsMzAuOTYgMzAuOTYsMzAuOTZjMTcuMDYyNCwwIDMwLjk2LC0xMy44OTc2IDMwLjk2LC0zMC45NmMwLC0xNy4wNjI0IC0xMy44OTc2LC0zMC45NiAtMzAuOTYsLTMwLjk2eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+' alt='Instagram' /></a>
          </div>

        </div>

      </div>

    </>
  )
}

export default Nav