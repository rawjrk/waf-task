import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './routes/gameSlice'

export default configureStore({
  reducer: {
    game: gameReducer,
  },
})
