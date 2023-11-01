import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useSnake from '../hooks/useSnake'
import useKeyControls from '../hooks/useKeyControls'
import Screen from '../components/Screen'
import './gameplay.css'

export default function Game() {
  const screen = { width: 20, height: 20 }
  let tickTime = 200
  const [paused, setPaused] = useState(true)
  const [hideControls, setHideControls] = useState(true)

  const initPosition = [
    { x: 6, y: 4 },
    { x: 5, y: 4 },
    { x: 4, y: 4 },
  ]
  const initDirection = 'right'
  const [
    snakePosition,
    applePosition,
    points,
    move,
    changeDirection,
    gameOver,
  ] = useSnake(initPosition, initDirection, screen.width, screen.height)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused && !gameOver) move()
    }, tickTime)
    return () => clearInterval(interval)
  })

  const moveUp = () => changeDirection('up')
  const moveDown = () => changeDirection('down')
  const moveLeft = () => changeDirection('left')
  const moveRight = () => changeDirection('right')
  const tooglePause = () => setPaused(!paused)
  const toogleHideControls = () => setHideControls(!hideControls)

  useKeyControls({
    ArrowUp: moveUp,
    ArrowLeft: moveLeft,
    ArrowDown: moveDown,
    ArrowRight: moveRight,

    KeyW: moveUp,
    KeyA: moveLeft,
    KeyS: moveDown,
    KeyD: moveRight,

    Numpad8: moveUp,
    Numpad4: moveLeft,
    Numpad2: moveDown,
    Numpad6: moveRight,

    Space: tooglePause,
    KeyP: tooglePause,

    KeyH: toogleHideControls,
  })

  return (
    <div id="game">
      <div id="stats">
        <p>Points: {points}</p>
        <p hidden={!gameOver}>Game Over!</p>
      </div>

      <Screen
        width={screen.width}
        height={screen.height}
        snake={snakePosition}
        apple={applePosition}
      />

      <div id="switches">
        <button onClick={tooglePause} tabIndex={-1}>
          {paused ? 'Resume' : 'Pause'}
        </button>
        <button onClick={toogleHideControls} tabIndex={-1}>
          {!hideControls ? 'Hide' : 'Show'} Controls
        </button>
        <Link to={'../scores'}>Scores</Link>
      </div>

      <div id="controls" hidden={hideControls}>
        <div>
          <button onClick={moveUp} tabIndex={-1}>
            &uarr;
          </button>
        </div>
        <div>
          <button onClick={moveLeft} tabIndex={-1}>
            &larr;
          </button>

          <button onClick={moveDown} tabIndex={-1}>
            &darr;
          </button>
          <button onClick={moveRight} tabIndex={-1}>
            &rarr;
          </button>
        </div>
        <div></div>
      </div>
    </div>
  )
}
