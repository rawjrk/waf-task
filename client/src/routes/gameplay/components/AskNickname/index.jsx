import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setNickname } from '../../../uiSlice'
import { NicknameInput } from '../../../../components'
import './AskNickname.css'

export default function NickInput() {
  const nicknameInputRef = useRef()
  const dispatch = useDispatch()

  return (
    <div id="ask-nickname">
      <p>Input your nickname for score board.</p>

      <NicknameInput inputRef={nicknameInputRef} />

      <nav>
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
        <Link to={'..'}>Quit to Menu</Link>
      </nav>
    </div>
  )
}
