import { FC, useEffect, useState } from 'react'
import { useAppSelector } from '../../../../app/store/hooks'
import {
  selectSlotCurrentBet,
  selectSlotLifecycle,
  SlotLifecycle,
} from '../../slices/slotSlice'
import { selectBalance } from '../../../../entities/wallet/slices/walletSlice'
import SlotScoreWindow from '../../shared/scoreWindow/ScoreWindow'

interface ISlotInfoPanelProps {}

const SlotInfoPanel: FC<ISlotInfoPanelProps> = () => {
  const lifecycle = useAppSelector(selectSlotLifecycle)
  const isInfo = lifecycle === SlotLifecycle.INFO
  const currentBet = useAppSelector(selectSlotCurrentBet)
  const balance = useAppSelector(selectBalance)
  
  const [displayBalance, setDisplayBalance] = useState(balance)

  useEffect(() => {
    isInfo && setDisplayBalance(balance)
  }, [lifecycle, balance])

  return (
    <div className="flex flex-col gap-8">
      <SlotScoreWindow
        icon="balance"
      >
        {displayBalance ?? 0}
      </SlotScoreWindow>
      <SlotScoreWindow
        icon="bets"
      >
        {currentBet ?? 0}
      </SlotScoreWindow>
    </div>
  )
}

export default SlotInfoPanel
