import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks'
import { selectSlotLifecycle, SlotLifecycle, startSlot } from '../../slices/slotSlice'

interface ISlotEventPanelProps {}

const SlotEventPanel: FC<ISlotEventPanelProps> = () => {
  const dispatch = useAppDispatch()
  const lifecycle = useAppSelector(selectSlotLifecycle)
  const onStart = () => {
    dispatch(startSlot())
  }
  return (
    <div>
      {lifecycle === SlotLifecycle.READY_TO_START && (
        <button onClick={onStart}>GO SlotEventPanel</button>
      )}
    </div>
  )
}

export default SlotEventPanel
