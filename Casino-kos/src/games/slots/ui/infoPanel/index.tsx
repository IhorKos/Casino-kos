import { FC } from 'react'

interface ISlotInfoPanelProps {}

const SlotInfoPanel: FC<ISlotInfoPanelProps> = () => {
  const onStart = () => {}
  return (
    <div>
      <div>
        <div>Balance</div>
        <div>100500</div>
      </div>
      <div>
        <div>Bet</div>
        <div>350</div>
      </div>
    </div>
  )
}

export default SlotInfoPanel
