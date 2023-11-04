import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getScoreList } from '../../lib/api'
import { formatScore } from '../../lib/format'
import Score from './components/Score'
import './ScoreList.css'

export default function Scores() {
  const [scoreList, setScoreList] = useState([])

  useEffect(() => {
    getScoreList().then((data) => setScoreList(data))
  }, [])

  if (!scoreList.length) {
    return (
      <div id="scores">
        <h2>Best Scores</h2>
        <Score position={'#'} name={'Nickname'} points={'PNTS/FO'} />
        <Score position={'$'} name={'(Loading)'} points={'XXXX/XX'} />
      </div>
    )
  }

  return (
    <div id="scores">
      <h2>Best Scores</h2>
      <Score position={'#'} name={'Nickname'} points={'PNTS/FO'} />

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
        <Link to={'..'}>Quit to Menu</Link>
      </nav>
    </div>
  )
}
