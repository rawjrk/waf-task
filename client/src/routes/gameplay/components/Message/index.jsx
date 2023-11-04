import './Message.css'

export default function Message({ header, notes }) {
  return (
    <div id="message">
      <h3>{header}</h3>
      <p>{notes}</p>
    </div>
  )
}
