import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectScoreList, setScoreList } from '../uiSlice'
import { getScoreList } from '../../lib/api'
import { formatScore } from '../../lib/format'
import Score from './components/Score'
import './ScoreList.css'

export default function Scores() {
  const scoreList = useSelector(selectScoreList)
  const [offset, setOffset] = useState(5)

  const dispatch = useDispatch()

  const loadMoreHandler = () => {
    if (!scoreList) return
    getScoreList({ limit: 10, offset }).then((data) => {
      if (data.length) {
        dispatch(setScoreList([...scoreList, ...data]))
        setOffset(offset + 10)
      }
    })
  }

  useEffect(() => {
    getScoreList().then((data) => {
      if (data) {
        dispatch(setScoreList(data))
      }
    })
  }, [])

  return (
    <div id="scores">
      <h2>Best Scores</h2>
      <Score position={'#'} name={'Nickname'} points={'PNTS/FO'} />

      {!scoreList.length ? (
        <Score position={'$'} name={'(Loading)'} points={'XXXX/XX'} />
      ) : (
        ''
      )}

      {scoreList.map((score, i) => {
        const { position, name, points, feedOption } = score

        return (
          <Score
            key={i}
            position={position}
            name={name}
            points={formatScore(points, feedOption)}
          />
        )
      })}

      <nav>
        <Link to={'../gameplay'}>New Game</Link>
        <button onClick={loadMoreHandler}>Load More</button>
        <Link to={'..'}>Quit to Menu</Link>
      </nav>
    </div>
  )
}
