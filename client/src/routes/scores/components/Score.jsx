export default function Score({ position, name, points }) {
  return (
    <div className="row">
      <div className="col col-position">{position}</div>
      <div className="col col-name">{name}</div>
      <div className="col col-points">{points}</div>
    </div>
  )
}
