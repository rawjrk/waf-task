import { useSelector } from 'react-redux'
import {
  selectGameStarted,
  selectGamePaused,
  selectGameOver,
} from '../gameSlice'
import Message from './Message'

export default function StatusMessage() {
  const gameStarted = useSelector(selectGameStarted)
  const gamePaused = useSelector(selectGamePaused)
  const gameOver = useSelector(selectGameOver)

  return (
    <>
      {gameOver ? (
        <Message header={'Game Over'} notes={"press 'R' to restart"} />
      ) : !gameStarted ? (
        <Message header={'PAUSED'} notes={'choose any direction to start'} />
      ) : gamePaused ? (
        <Message header={'PAUSED'} notes={'choose any direction to resume'} />
      ) : (
        ''
      )}
    </>
  )
}
