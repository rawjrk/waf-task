import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setNickname } from '../uiSlice'
import { setIncrementValue } from '../gameplay/gameSlice'
import { FeedOptionSelect, NicknameInput } from '../../components'
import './Options.css'

export default function Options() {
  const nicknameInputRef = useRef()
  const feedOptionInputRef = useRef()

  const dispatch = useDispatch()

  const saveChanges = () => {
    const newNickname = nicknameInputRef.current.value
    const newFeedOption = feedOptionInputRef.current.value

    if (newNickname) dispatch(setNickname(newNickname))
    if (newFeedOption) dispatch(setIncrementValue(+newFeedOption))
  }

  return (
    <div id="options">
      <div>
        <p>Change your nickname</p>
        <NicknameInput inputRef={nicknameInputRef} />
      </div>
      <div>
        <p>Choose your feed option</p>
        <FeedOptionSelect inputRef={feedOptionInputRef} />
      </div>
      <nav>
        <button onClick={saveChanges}>Save Changes</button>
        <Link to={'..'}>Quit to Menu</Link>
      </nav>
    </div>
  )
}
