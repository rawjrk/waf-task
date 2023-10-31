import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Link to={`gameplay`}>New Game</Link>
      <Link to={`scores`}>Scores</Link>
    </div>
  )
}
