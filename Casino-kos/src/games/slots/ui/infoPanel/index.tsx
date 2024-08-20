import { FC, useEffect, useState } from 'react'
import { useAppSelector } from '../../../../app/store/hooks'
import {
  selectSlotCurrentBet,
  selectSlotLifecycle,
  SlotLifecycle,
} from '../../slices/slotSlice'
import { selectBalance } from '../../../../entities/wallet/slices/walletSlice'

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
    <div>
      <div>
        <div>Balance</div>
        <div>{displayBalance}</div>
      </div>
      <div>
        <div>Bet</div>
        <div>{currentBet}</div>
      </div>
    </div>
  )
}

export default SlotInfoPanel
