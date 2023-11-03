import { useSelector } from 'react-redux'
import { selectNickname } from '../../uiSlice'
import { selectPoints, selectIncrementValue } from '../gameSlice'
import './Stats.css'

export default function Stats() {
  const nickname = useSelector(selectNickname)
  const points = useSelector(selectPoints)
  const feedOption = useSelector(selectIncrementValue)

  return (
    <div id="stats">
      <p>Nickname: {nickname}</p>
      <p>Points: {points}</p>
      <p>Feed Option: {feedOption}</p>
    </div>
  )
}
