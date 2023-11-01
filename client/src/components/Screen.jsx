import './Screen.css'

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
                apple.x === x && apple.y === y
                  ? 'apple'
                  : snake.find((coord) => coord.x === x && coord.y === y)
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
