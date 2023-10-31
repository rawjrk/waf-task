import { useState, useEffect } from 'react'
import useSnake from '../hooks/useSnake'
import useKeyControls from '../hooks/useKeyControls'
import Screen from '../components/Screen'

export default function Game() {
  const screen = { width: 20, height: 20 }
  let tickTime = 1000
  const [paused, setPaused] = useState(true)

  const initPosition = [
    { x: 6, y: 4 },
    { x: 5, y: 4 },
    { x: 4, y: 4 },
  ]
  const initDirection = 'right'
  const [position, move, changeDirection] = useSnake(
    initPosition,
    initDirection,
    screen.width,
    screen.height,
  )

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) move()
    }, tickTime)
    return () => clearInterval(interval)
  })

  const moveUp = () => changeDirection('up')
  const moveDown = () => changeDirection('down')
  const moveLeft = () => changeDirection('left')
  const moveRight = () => changeDirection('right')
  const tooglePause = () => setPaused(!paused)

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
  })

  return (
    <>
      <Screen width={screen.width} height={screen.height} snake={position} />

      <button onClick={tooglePause} tabIndex={-1}>
        {paused ? 'Resume' : 'Pause'}
      </button>
      <div>
        <p>controls:</p>
      </div>
      <button onClick={moveUp} tabIndex={-1}>
        Up
      </button>
      <button onClick={moveLeft} tabIndex={-1}>
        Left
      </button>
      <button onClick={moveDown} tabIndex={-1}>
        Down
      </button>
      <button onClick={moveRight} tabIndex={-1}>
        Right
      </button>
    </>
  )
}
