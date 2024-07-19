import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../app/store'
import { ROULETTE_NUMBERS } from './rouletteNumbers'

interface IRouletteSpin {
  readonly rouletteNumbers: number[]
  readonly stepCircle: number
  speed: number
  rotationInProgress: boolean
  degreesRotation: number
  currentNumber: number | null
}

const initialState: IRouletteSpin = {
  rouletteNumbers: ROULETTE_NUMBERS,
  stepCircle: 360 / ROULETTE_NUMBERS.length,
  speed: 0,
  rotationInProgress: false,
  degreesRotation: 0,
  currentNumber: null,
}

const rouletteSpinSlice = createSlice({
  name: 'rouletteSpin',
  initialState,
  reducers: {
    setRouletteStartSpeed: (state) => {
      const randomSpeed = 1 + Math.random() * 0.1
      state.speed = randomSpeed
      state.rotationInProgress = true
    },
    setRouletteSpinSpeed: (state, action: PayloadAction<number | null>) => {
      const speed = action.payload
      if (speed === 0) {
        state.rotationInProgress = false
        state.speed = 0
      } else {
        state.speed = state.speed - state.speed / 150
      }
    },
    setRouletteSpinDegreesRotation: (state, action) => {
      state.degreesRotation = action.payload
      const deltaIndex = Math.floor(
        (action.payload + state.stepCircle / 2) / state.stepCircle,
      )
      const currentIndex = state.rouletteNumbers.length - deltaIndex
      state.currentNumber = state.rouletteNumbers[currentIndex]
    },
    clearRouletteSpin: (state) => {
      state.currentNumber = null
    },
  },
})

export const {
  setRouletteStartSpeed,
  setRouletteSpinSpeed,
  setRouletteSpinDegreesRotation,
  clearRouletteSpin,
} = rouletteSpinSlice.actions

export const selectRouletteSpinSpeed = (state: RootState) =>
  state.rouletteSpin.speed
export const selectRouletteSpinRotationInProgress = (state: RootState) =>
  state.rouletteSpin.rotationInProgress
export const selectRouletteSpinCurrentNumber = (state: RootState) =>
  state.rouletteSpin.currentNumber

export default rouletteSpinSlice.reducer
