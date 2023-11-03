import { useSelector } from 'react-redux'
import {
  selectGameStarted,
  selectGamePaused,
  selectGameOver,
  selectPoints,
  selectIncrementValue,
} from '../gameSlice'
import { formatScore } from '../../../lib/format'
import Message from './Message'

export default function StatusMessage() {
  const gameStarted = useSelector(selectGameStarted)
  const gamePaused = useSelector(selectGamePaused)
  const gameOver = useSelector(selectGameOver)

  const points = useSelector(selectPoints)
  const feedOption = useSelector(selectIncrementValue)

  return (
    <>
      {gameOver ? (
        <Message
          header={'Game Over'}
          notes={`your score: ${formatScore(points, feedOption)}`}
        />
      ) : !gameStarted ? (
        <Message header={'Paused'} notes={'choose any direction to start'} />
      ) : gamePaused ? (
        <Message header={'Paused'} notes={'choose any direction to resume'} />
      ) : (
        ''
      )}
    </>
  )
}
