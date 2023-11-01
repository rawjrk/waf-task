import { useState } from 'react'

const randomPosition = (xLimit, yLimit, snake) => {
  let x, y

  do {
    x = Math.round(Math.random() * (xLimit - 1))
    y = Math.round(Math.random() * (yLimit - 1))
  } while (snake.find((coord) => coord.x === x && coord.y === y))

  return { x, y }
}

export default (initPosition, initDirection, xLimit, yLimit) => {
  const [snake, setSnake] = useState(initPosition)
  const [direction, setDirection] = useState(initDirection)
  const [points, setPoints] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  const [apple, setApple] = useState(randomPosition(xLimit, yLimit, snake))
  const spawnApple = () => {
    setApple(randomPosition(xLimit, yLimit, snake))
  }

  const move = () => {
    const [head] = snake

    let newHead = []
    if (direction === 'left') newHead = { ...head, x: head.x - 1 }
    if (direction === 'right') newHead = { ...head, x: head.x + 1 }
    if (direction === 'up') newHead = { ...head, y: head.y - 1 }
    if (direction === 'down') newHead = { ...head, y: head.y + 1 }

    if (newHead.x >= xLimit) newHead.x = 0
    if (newHead.y >= yLimit) newHead.y = 0
    if (newHead.x < 0) newHead.x = xLimit - 1
    if (newHead.y < 0) newHead.y = yLimit - 1

    if (newHead.x === apple.x && newHead.y === apple.y) {
      setPoints(points + 1)
      setSnake([newHead, ...snake.slice(0)])
      spawnApple()
      return
    }

    if (
      snake
        .slice(0, -1)
        .find((coord) => coord.x === newHead.x && coord.y === newHead.y)
    ) {
      setGameOver(true)
    }

    setSnake([newHead, ...snake.slice(0, -1)])
  }

  const changeDirection = (newDirection) => {
    if (direction === 'right' && newDirection === 'left') return
    if (direction === 'left' && newDirection === 'right') return
    if (direction === 'up' && newDirection === 'down') return
    if (direction === 'down' && newDirection === 'up') return

    setDirection(newDirection)
  }

  return [snake, apple, points, move, changeDirection, gameOver]
}
