import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setNickname } from '../../uiSlice'
import './NicknameInput.css'

export default function NickInput() {
  const nicknameInputRef = useRef()
  const dispatch = useDispatch()

  return (
    <div id="nickname-input">
      <p>Input your nickname for score board.</p>
      <div>
        <input
          ref={nicknameInputRef}
          type="text"
          placeholder="e.g. SnakeEater"
        />
        <button
          onClick={() => {
            const { value } = nicknameInputRef.current
            if (value) {
              dispatch(setNickname(value))
            }
          }}
        >
          Submit
        </button>
      </div>
    </div>
  )
}
