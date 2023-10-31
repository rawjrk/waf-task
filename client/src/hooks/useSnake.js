import { useState } from 'react'

export const useSnake = (initPosition, initDirection, xLimit, yLimit) => {
  const [position, setPosition] = useState(initPosition)
  const [direction, setDirection] = useState(initDirection)

  const move = () => {
    const [head] = position

    let newHead = []
    if (direction === 'left') newHead = { ...head, x: head.x - 1 }
    if (direction === 'right') newHead = { ...head, x: head.x + 1 }
    if (direction === 'up') newHead = { ...head, y: head.y - 1 }
    if (direction === 'down') newHead = { ...head, y: head.y + 1 }

    if (newHead.x >= xLimit) newHead.x = 0
    if (newHead.y >= yLimit) newHead.y = 0
    if (newHead.x < 0) newHead.x = xLimit - 1
    if (newHead.y < 0) newHead.y = yLimit - 1

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
