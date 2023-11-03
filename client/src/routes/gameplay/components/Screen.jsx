import { useSelector } from 'react-redux'
import { selectScreenSize, selectSnake, selectApple } from '../gameSlice'
import { matchPosition, includesPosition } from '../../../pos'
import './Screen.css'

export default function Screen() {
  const screen = useSelector(selectScreenSize)
  const snake = useSelector(selectSnake)
  const apple = useSelector(selectApple)

  return (
    <div id="screen">
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
