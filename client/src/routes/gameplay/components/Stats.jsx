import { useSelector } from 'react-redux'
import { selectNickname } from '../../uiSlice'
import { selectPoints } from '../gameSlice'
import './Stats.css'

export default function Stats() {
  const nickname = useSelector(selectNickname)
  const points = useSelector(selectPoints)

  return (
    <div id="stats">
      <p>Nickname: {nickname}</p>
      <p>Points: {points}</p>
    </div>
  )
}
