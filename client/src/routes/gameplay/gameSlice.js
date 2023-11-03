import { createSlice } from '@reduxjs/toolkit'
import { matchPosition, includesPosition, randomPosition } from '../../pos'
import { localRead, localSave } from '../../cache'

export const feedOptions = [1, 5, 10]

const initialState = {
  screenSize: { x: 20, y: 20 },
  tickTime: 200,

  incrementValue: localRead('increment-value') || 1,
  points: 0,

  gameStarted: false,
  gamePaused: true,
  gameOver: false,

  snake: [
    { x: 6, y: 4 },
    { x: 5, y: 4 },
    { x: 4, y: 4 },
  ],
  direction: 'right',
}
initialState.apple = randomPosition(initialState.screenSize, initialState.snake)

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    increaseSpeed(state) {
      state.tickTime = Math.round(state.tickTime * 0.75)
    },
    incrementPoints(state) {
      state.points += state.incrementValue
      if (state.points % 50 === 0) {
        gameSlice.caseReducers.increaseSpeed(state)
      }
    },
    setIncrementValue(state, action) {
      if (feedOptions.includes(action.payload)) {
        state.incrementValue = action.payload
        localSave('increment-value', state.incrementValue)
      }
    },
    spawnApple(state) {
      state.apple = randomPosition(state.screenSize, state.snake)
    },
    moveSnake(state) {
      const newHead = { ...state.snake[0] }
      const { x: xLimit, y: yLimit } = state.screenSize

      if (state.direction === 'left') newHead.x--
      if (state.direction === 'right') newHead.x++
      if (state.direction === 'up') newHead.y--
      if (state.direction === 'down') newHead.y++

      if (newHead.x >= xLimit) newHead.x = 0
      if (newHead.y >= yLimit) newHead.y = 0
      if (newHead.x < 0) newHead.x = xLimit - 1
      if (newHead.y < 0) newHead.y = yLimit - 1

      if (includesPosition(state.snake.slice(0, -1), newHead)) {
        gameSlice.caseReducers.setGameOver(state)
      }

      if (matchPosition(newHead, state.apple)) {
        state.snake.unshift(newHead)
        gameSlice.caseReducers.spawnApple(state)
        gameSlice.caseReducers.incrementPoints(state)
        return
      }

      state.snake.pop()
      state.snake.unshift(newHead)
    },
    changeDirection(state, action) {
      const newDirection = action.payload

      if (state.direction === 'right' && newDirection === 'left') return
      if (state.direction === 'left' && newDirection === 'right') return
      if (state.direction === 'up' && newDirection === 'down') return
      if (state.direction === 'down' && newDirection === 'up') return

      state.direction = newDirection
    },
    tooglePause(state) {
      if (!state.gameStarted) {
        state.gameStarted = true
      }
      if (!state.gameOver) {
        state.gamePaused = !state.gamePaused
      }
    },
    setGameOver(state) {
      state.gamePaused = true
      state.gameOver = true
    },
    restartGame(state) {
      if (!state.gameStarted) return
      return {
        ...initialState,
        apple: randomPosition(initialState.screenSize, initialState.snake),
      }
    },
  },
})

export const {
  moveSnake,
  changeDirection,
  setIncrementValue,
  tooglePause,
  restartGame,
} = gameSlice.actions

export const selectScreenSize = (state) => state.game.screenSize
export const selectTickTime = (state) => state.game.tickTime
export const selectIncrementValue = (state) => state.game.incrementValue

export const selectGameStarted = (state) => state.game.gameStarted
export const selectGamePaused = (state) => state.game.gamePaused
export const selectGameOver = (state) => state.game.gameOver

export const selectPoints = (state) => state.game.points
export const selectSnake = (state) => state.game.snake
export const selectApple = (state) => state.game.apple

export default gameSlice.reducer
