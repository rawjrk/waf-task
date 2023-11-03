import { useState } from 'react'
import { useSelector } from 'react-redux'
import { feedOptions, selectIncrementValue } from '../routes/gameplay/gameSlice'
import './FeedOptionSelect.css'

export default function FeedOptionSelect({ inputRef }) {
  const currentIncrementValue = useSelector(selectIncrementValue)
  const [selected, setSelected] = useState(currentIncrementValue)

  const handleChange = (event) => {
    setSelected(event.target.value)
    inputRef.current.value = event.target.value
  }

  return (
    <div id="feed-option-select" ref={inputRef}>
      {feedOptions.map((feedOpt, i) => (
        <label key={i}>
          <input
            ref={inputRef}
            type="radio"
            name="feed-option"
            value={feedOpt}
            checked={feedOpt == selected}
            onChange={handleChange}
          />
          {feedOpt}
        </label>
      ))}
    </div>
  )
}
