import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectNickname } from '../uiSlice'
import {
  selectPoints,
  selectIncrementValue,
  selectTickTime,
  selectGamePaused,
  selectGameOver,
  moveSnake,
} from './gameSlice'
import { addScore } from '../../lib/api'
import { Screen, Stats, Switches, Controls, AskNickname } from './components'
import './Game.css'

export default function Game() {
  const nickname = useSelector(selectNickname)
  const points = useSelector(selectPoints)
  const feedOption = useSelector(selectIncrementValue)
  const tickTime = useSelector(selectTickTime)
  const gamePaused = useSelector(selectGamePaused)
  const gameOver = useSelector(selectGameOver)

  const dispatch = useDispatch()

  useEffect(() => {
    const interval = setInterval(() => {
      if (!gamePaused && !gameOver) dispatch(moveSnake())
    }, tickTime)
    return () => clearInterval(interval)
  })

  useEffect(() => {
    if (gameOver) {
      addScore(nickname, points, feedOption)
    }
  }, [gameOver])

  if (!nickname) {
    return <AskNickname />
  }

  return (
    <div id="game">
      <Stats />
      <Screen />
      <Switches />
      <Controls />
    </div>
  )
}
