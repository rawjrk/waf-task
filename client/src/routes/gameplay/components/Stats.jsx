import { useSelector } from 'react-redux'
import { selectNickname } from '../../uiSlice'
import { selectPoints, selectIncrementValue } from '../gameSlice'
import { formatScore } from '../../../lib/format'
import './Stats.css'

export default function Stats() {
  const nickname = useSelector(selectNickname)
  const points = useSelector(selectPoints)
  const feedOption = useSelector(selectIncrementValue)

  return (
    <div id="stats">
      <p>{nickname}</p>
      <p>{formatScore(points, feedOption)}</p>
    </div>
  )
}
