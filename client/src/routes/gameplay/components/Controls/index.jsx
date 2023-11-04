import { useSelector, useDispatch } from 'react-redux'
import { selectShowControls } from '../../../uiSlice'
import { changeDirection } from '../../gameSlice'
import useKeyControls from '../../../../hooks/useKeyControls'
import './Controls.css'

export default function Controls() {
  const showControls = useSelector(selectShowControls)

  const dispatch = useDispatch()
  const moveUp = () => dispatch(changeDirection('up'))
  const moveDown = () => dispatch(changeDirection('down'))
  const moveLeft = () => dispatch(changeDirection('left'))
  const moveRight = () => dispatch(changeDirection('right'))

  useKeyControls({
    ArrowUp: moveUp,
    ArrowLeft: moveLeft,
    ArrowDown: moveDown,
    ArrowRight: moveRight,

    KeyW: moveUp,
    KeyA: moveLeft,
    KeyS: moveDown,
    KeyD: moveRight,

    Numpad8: moveUp,
    Numpad4: moveLeft,
    Numpad2: moveDown,
    Numpad6: moveRight,
  })

  return (
    <div id="controls" hidden={!showControls}>
      <div>
        <button onClick={moveUp} tabIndex={-1}>
          &uarr;
        </button>
      </div>
      <div>
        <button onClick={moveLeft} tabIndex={-1}>
          &larr;
        </button>
        <button onClick={moveDown} tabIndex={-1}>
          &darr;
        </button>
        <button onClick={moveRight} tabIndex={-1}>
          &rarr;
        </button>
      </div>
      <div></div>
    </div>
  )
}
