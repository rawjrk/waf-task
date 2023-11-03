import { useSelector } from 'react-redux'
import {
  selectGamePaused,
  selectScreenSize,
  selectSnake,
  selectApple,
} from '../gameSlice'
import { matchPosition, includesPosition } from '../../../lib/pos'
import StatusMessage from './StatusMessage'
import './Screen.css'

export default function Screen() {
  const screen = useSelector(selectScreenSize)
  const snake = useSelector(selectSnake)
  const apple = useSelector(selectApple)

  const gamePaused = useSelector(selectGamePaused)

  return (
    <div id="screen" className={gamePaused ? 'screen-paused' : ''}>
      <StatusMessage />

      {[...Array(screen.x)].map((ely, y) => (
        <div key={y} className="row">
          {[...Array(screen.y)].map((elx, x) => (
            <div
              key={`${x}-${y}`}
              className={`cell ${
                matchPosition(apple, { x, y })
                  ? 'apple'
                  : includesPosition(snake, { x, y })
                  ? 'snake'
                  : 'empty'
              }`}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
