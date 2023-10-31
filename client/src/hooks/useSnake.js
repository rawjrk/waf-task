import { useState } from 'react'

export const useSnake = (initPosition, initDirection, xLimit, yLimit) => {
  const [position, setPosition] = useState(initPosition)
  const [direction, setDirection] = useState(initDirection)

  const move = () => {
    const [[headX, headY]] = position

    let newHead = []
    if (direction === 'left') newHead = [headX - 1, headY]
    if (direction === 'right') newHead = [headX + 1, headY]
    if (direction === 'up') newHead = [headX, headY - 1]
    if (direction === 'down') newHead = [headX, headY + 1]

    if (newHead[0] >= xLimit) newHead[0] = 0
    if (newHead[1] >= yLimit) newHead[1] = 0
    if (newHead[0] < 0) newHead[0] = xLimit - 1
    if (newHead[1] < 0) newHead[1] = yLimit - 1

    setPosition([newHead, ...position.slice(0, -1)])
  }

  const changeDirection = (newDirection) => {
    if (direction === 'right' && newDirection === 'left') return
    if (direction === 'left' && newDirection === 'right') return
    if (direction === 'up' && newDirection === 'down') return
    if (direction === 'down' && newDirection === 'up') return

    setDirection(newDirection)
  }

  return [position, move, changeDirection]
}
