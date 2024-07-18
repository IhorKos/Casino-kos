import { FC } from 'react'
import { useAppSelector } from '../../../../../../app/store/hooks'
import {
  selectActiveNumber,
  selectCurrentBet,
} from '../../../../slices/rouletteSlice'
import { selectBalance } from '../../../../../../entities/wallet/slices/walletSlice';

interface IInfoPanelProps {}

type Item ={
    id: 'balance' | 'winBet' |  'currentBet' | 'activeNumber' ;
    title: string;
    icon: string;
}

const ITEMS:Item[] = [
  {
    id: 'balance',
    title: 'Balance',
    icon: '',
  },
  {
    id: 'winBet',
    title: 'Win Bet',
    icon: '',
  },
  {
    id: 'currentBet',
    title: 'Bet',
    icon: '',
  },
  {
    id: 'activeNumber',
    title: 'Bet number',
    icon: '',
  },
]

const InfoPanel: FC<IInfoPanelProps> = () => {
    const balance = useAppSelector(selectBalance)
  const activeNumber = useAppSelector(selectActiveNumber)
  const currentBet = useAppSelector(selectCurrentBet)
  return (
    <div className="flex justify-between px-10">
      {ITEMS.map((item) => (
        <div key={item.id}>
          <div>{item.title}</div>
          <div>
            {item.id === 'activeNumber' && activeNumber}
            {item.id === 'currentBet' && currentBet}
            {item.id === 'balance' && balance}
          </div>
        </div>
      ))}
    </div>
  )
}

export default InfoPanel
