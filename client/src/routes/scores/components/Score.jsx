import { useSelector } from 'react-redux'
import { selectNickname } from '../../uiSlice'

export default function Score({ position, name, points }) {
  const nickname = useSelector(selectNickname)

  return (
    <div className={'row ' + (name === nickname ? 'row-current-user' : '')}>
      <div className="col col-position">{position}</div>
      <div className="col col-name">{name}</div>
      <div className="col col-points">{points}</div>
    </div>
  )
}
