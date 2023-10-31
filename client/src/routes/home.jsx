import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link to={`gameplay`}>New Game</Link>
        </li>
        <li>
          <Link to={`scores`}>Scores</Link>
        </li>
      </ul>
    </>
  )
}
