import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './routes/gameplay/gameSlice'
import uiReducer from './routes/uiSlice'

export default configureStore({
  reducer: {
    game: gameReducer,
    ui: uiReducer,
  },
})
