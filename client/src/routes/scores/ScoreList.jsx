import { useState, useEffect } from 'react'
import { getScoreList } from '../../api'
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
      <Score position={'#'} name={'Nickname'} points={'P'} />

      {scoreList.map((score, i) => (
        <Score
          key={i}
          position={i + 1}
          name={score.name}
          points={score.points}
        />
      ))}
    </div>
  )
}
