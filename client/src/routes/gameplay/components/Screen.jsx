import './Screen.css'
import { matchPosition, includesPosition } from '../../../pos'

export default function Screen({
  width = 10,
  height = 10,
  snake = [],
  apple = [],
}) {
  return (
    <div id="screen">
      {[...Array(width)].map((ely, y) => (
        <div key={y} className="row">
          {[...Array(height)].map((elx, x) => (
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
