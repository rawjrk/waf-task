import { useState, useEffect } from 'react'
import { useSnake } from '../hooks/useSnake'
import Screen from '../components/Screen'

export default function Game() {
  const screen = { width: 20, height: 20 }
  let tickTime = 1000
  const [paused, setPaused] = useState(true)

  const initPosition = [
    [6, 4],
    [5, 4],
    [4, 4],
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

  useEffect(() => {
    console.log(JSON.stringify(position))
  }, [position])

  return (
    <>
      <Screen width={screen.width} height={screen.height} snake={position} />

      <button onClick={move}>Move</button>
      <button onClick={() => setPaused(!paused)}>
        {paused ? 'Start' : 'Pause'}
      </button>
      <div>
        <p>controls:</p>
      </div>
      <button onClick={() => changeDirection('up')}>Up</button>
      <button onClick={() => changeDirection('down')}>Down</button>
      <button onClick={() => changeDirection('left')}>Left</button>
      <button onClick={() => changeDirection('right')}>Right</button>
    </>
  )
}
