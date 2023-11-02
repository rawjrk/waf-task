import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  moveSnake,
  changeDirection,
  tooglePause as tooglePauseAction,
  restartGame,
  selectScreenSize,
  selectTickTime,
  selectGameStarted,
  selectGamePaused,
  selectGameOver,
  selectPoints,
  selectSnake,
  selectApple,
} from './gameSlice'
import { Link } from 'react-router-dom'
import useKeyControls from '../../hooks/useKeyControls'
import Screen from './components/Screen'
import './Game.css'

export default function Game() {
  const { x: width, y: height } = useSelector(selectScreenSize)
  const tickTime = useSelector(selectTickTime)

  const gameStarted = useSelector(selectGameStarted)
  const gamePaused = useSelector(selectGamePaused)
  const gameOver = useSelector(selectGameOver)

  const score = useSelector(selectPoints)
  const snakePosition = useSelector(selectSnake)
  const applePosition = useSelector(selectApple)

  const dispatch = useDispatch()

  useEffect(() => {
    const interval = setInterval(() => {
      if (!gamePaused && !gameOver) dispatch(moveSnake())
    }, tickTime)
    return () => clearInterval(interval)
  })

  const moveUp = () => dispatch(changeDirection('up'))
  const moveDown = () => dispatch(changeDirection('down'))
  const moveLeft = () => dispatch(changeDirection('left'))
  const moveRight = () => dispatch(changeDirection('right'))
  const tooglePause = () => dispatch(tooglePauseAction())

  const [hideControls, setHideControls] = useState(true)
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
        <p>Points: {score}</p>
        <p hidden={!gameOver}>Game Over!</p>
      </div>

      <Screen
        width={width}
        height={height}
        snake={snakePosition}
        apple={applePosition}
      />

      <div id="switches">
        <button onClick={tooglePause} tabIndex={-1}>
          {gamePaused ? 'Resume' : 'Pause'}
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