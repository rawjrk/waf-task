import './Screen.css'

export default function Screen({ width = 10, height = 10, snake = [] }) {
  return (
    <div id="screen">
      {[...Array(height)].map((ely, y) => (
        <div key={y} className="row">
          {[...Array(height)].map((elx, x) => (
            <div
              key={`${x}-${y}`}
              className={`cell ${
                snake.find((coord) => coord.x === x && coord.y === y)
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