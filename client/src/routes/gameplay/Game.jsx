import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectNickname } from '../uiSlice'
import {
  selectPoints,
  selectTickTime,
  selectGamePaused,
  selectGameOver,
  moveSnake,
} from './gameSlice'
import { addScore } from '../../api'
import NicknameInput from './components/NicknameInput'
import Screen from './components/Screen'
import Stats from './components/Stats'
import Switches from './components/Switches'
import Controls from './components/Controls'
import './Game.css'

export default function Game() {
  const nickname = useSelector(selectNickname)
  const points = useSelector(selectPoints)
  const tickTime = useSelector(selectTickTime)

  const dispatch = useDispatch()
  const gamePaused = useSelector(selectGamePaused)
  const gameOver = useSelector(selectGameOver)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!gamePaused && !gameOver) dispatch(moveSnake())
    }, tickTime)
    return () => clearInterval(interval)
  })

  useEffect(() => {
    if (gameOver) {
      addScore(nickname, points)
    }
  }, [gameOver])

  if (!nickname) {
    return <NicknameInput />
  }

  return (
    <div id="game">
      {/* need Overlay component */}
      <p hidden={!gameOver}>Game Over!</p>

      <Stats />
      <Screen />
      <Switches />
      <Controls />
    </div>
  )
}
