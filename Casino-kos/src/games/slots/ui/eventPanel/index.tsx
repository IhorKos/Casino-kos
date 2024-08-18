import { FC } from 'react'

interface ISlotEventPanelProps {}

const SlotEventPanel:FC<ISlotEventPanelProps> = () => {

    const onStart = () => {}
  return (
    <div>
        <button onClick={onStart}>GO SlotEventPanel</button></div>
  )
}

export default SlotEventPanel