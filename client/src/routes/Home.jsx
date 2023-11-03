import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <nav id="menu">
      <div>
        <Link to={`gameplay`} id="new-game-link">
          New Game
        </Link>
      </div>
      <div>
        <Link to={`scores`}>Scores</Link>
        <Link to={`options`}>Options</Link>
      </div>
    </nav>
  )
}
