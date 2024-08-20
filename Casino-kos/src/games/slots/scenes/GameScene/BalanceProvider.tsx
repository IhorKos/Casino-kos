import React, { FC, ReactNode, useEffect } from 'react'
import { useAppSelector } from '../../../../app/store/hooks'
import { useDispatch } from 'react-redux'
import {
  selectSlotCurrentBet,
  selectSlotLifecycle,
  selectSlotWinOrLose,
  SlotLifecycle,
  SlotWinOrLose,
} from '../../slices/slotSlice'
import { setBalance } from '../../../../entities/wallet/slices/walletSlice'

interface IBalanceProviderProps {
  children: ReactNode
}

const KOEF_WIN = 10

const BalanceProvider: FC<IBalanceProviderProps> = ({ children }) => {
  const lifecycle = useAppSelector(selectSlotLifecycle)
  const isPlaying = lifecycle === SlotLifecycle.PLAY
  const win = useAppSelector(selectSlotWinOrLose)
  const isWin = win === SlotWinOrLose.WIN
  const currentBet = useAppSelector(selectSlotCurrentBet)

  const dispatch = useDispatch()

  useEffect(() => {
    if (isPlaying) {
      dispatch(setBalance(isWin ? currentBet * KOEF_WIN : -currentBet))
    }
  }, [lifecycle])

  return <>{children}</>
}

export default BalanceProvider
