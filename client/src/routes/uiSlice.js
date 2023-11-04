import { createSlice } from '@reduxjs/toolkit'
import { localRead, localSave, sessionRead, sessionSave } from '../lib/cache'

const initialState = {
  nickname: localRead('nickname') || '',
  showControls: localRead('show-controls') || false,
  scoreList: sessionRead('score-list') || [],
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setNickname(state, action) {
      state.nickname = action.payload
      localSave('nickname', state.nickname)
    },
    toogleShowControls(state) {
      state.showControls = !state.showControls
      localSave('show-controls', state.showControls)
    },
    setScoreList(state, action) {
      state.scoreList = action.payload
      sessionSave('score-list', state.scoreList)
    },
  },
})

export const selectNickname = (state) => state.ui.nickname
export const selectShowControls = (state) => state.ui.showControls
export const selectScoreList = (state) => state.ui.scoreList

export const { setNickname, toogleShowControls, setScoreList } = uiSlice.actions

export default uiSlice.reducer
