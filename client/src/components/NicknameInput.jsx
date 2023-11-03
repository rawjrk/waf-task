import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectNickname } from '../routes/uiSlice'
import './NicknameInput.css'

export default function NicknameInput({ inputRef }) {
  const currentNickname = useSelector(selectNickname)
  const [nickname, setNickname] = useState(currentNickname)

  const handleChange = (event) => {
    setNickname(event.target.value)
  }

  return (
    <input
      id="nickname-input"
      ref={inputRef}
      type="text"
      placeholder="e.g. SnakeEater"
      value={nickname}
      onChange={handleChange}
    />
  )
}
