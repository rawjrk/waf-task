import { createSlice } from '@reduxjs/toolkit'
import { localRead, localSave } from '../lib/cache'

const initialState = {
  nickname: localRead('nickname') || '',
  showControls: localRead('show-controls') || false,
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
  },
})

export const selectNickname = (state) => state.ui.nickname
export const selectShowControls = (state) => state.ui.showControls

export const { setNickname, toogleShowControls } = uiSlice.actions

export default uiSlice.reducer
