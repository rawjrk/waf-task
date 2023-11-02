import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './routes/gameplay/gameSlice'

export default configureStore({
  reducer: {
    game: gameReducer,
  },
})
