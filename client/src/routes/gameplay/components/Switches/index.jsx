import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  selectShowControls,
  toogleShowControls as toogleShowControlsAction,
} from '../../../uiSlice'
import {
  selectGameStarted,
  selectGamePaused,
  tooglePause as tooglePauseAction,
  restartGame as restartGameAction,
} from '../../gameSlice'
import useKeyControls from '../../../../hooks/useKeyControls'
import './Switches.css'

export default function Switches() {
  const gameStarted = useSelector(selectGameStarted)
  const gamePaused = useSelector(selectGamePaused)
  const showControls = useSelector(selectShowControls)

  const dispatch = useDispatch()
  const tooglePause = () => dispatch(tooglePauseAction())
  const restartGame = () => dispatch(restartGameAction())
  const toogleShowControls = () => dispatch(toogleShowControlsAction())

  useKeyControls({
    Space: tooglePause,
    KeyP: tooglePause,
    KeyR: restartGame,
    KeyH: toogleShowControls,
  })

  return (
    <nav id="switches">
      <div>
        <button onClick={tooglePause} tabIndex={-1}>
          {!gameStarted ? 'Start' : gamePaused ? 'Resume' : 'Pause'}
        </button>
        <button onClick={toogleShowControls} tabIndex={-1}>
          {showControls ? 'Hide' : 'Show'} Controls
        </button>
        <Link to={'../scores'}>Scores</Link>
      </div>
      <div>
        <button onClick={restartGame}>Restart Game</button>
        <Link to={'..'}>Quit to Menu</Link>
      </div>
    </nav>
  )
}
