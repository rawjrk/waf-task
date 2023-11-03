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

  if (!scoreList) {
    return <h2>Loading...</h2>
  }

  return (
    <div id="scores">
      <h2>Best Scores</h2>
      <Score position={'#'} name={'Nickname'} points={'PNTS/FO'} />

      {scoreList.map((score, i) => (
        <Score
          key={i}
          position={i + 1}
          name={score.name}
          points={formatScore(score.points, 0)}
        />
      ))}

      <nav>
        <Link to={'../gameplay'}>New Game</Link>
        <Link to={'..'}>Quit to Menu</Link>
      </nav>
    </div>
  )
}
