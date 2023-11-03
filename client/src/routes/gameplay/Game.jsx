import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectNickname } from '../uiSlice'
import {
  selectTickTime,
  selectGamePaused,
  selectGameOver,
  moveSnake,
} from './gameSlice'
import NicknameInput from './components/NicknameInput'
import Screen from './components/Screen'
import Stats from './components/Stats'
import Switches from './components/Switches'
import Controls from './components/Controls'
import './Game.css'

export default function Game() {
  const nickname = useSelector(selectNickname)
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
