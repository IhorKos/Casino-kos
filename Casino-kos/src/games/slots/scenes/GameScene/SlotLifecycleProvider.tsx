import React, { FC, ReactNode, useEffect } from 'react'
import { useAppSelector } from '../../../../app/store/hooks'
import {
  selectSlotLifecycle,
  setSlotCurrentBet,
  setSlotLifecycle,
  SlotLifecycle,
} from '../../slices/slotSlice'
import { useDispatch } from 'react-redux'

interface ISlotLifecycleProviderProps {
  children: ReactNode
}

const SlotLifecycleProvider: FC<ISlotLifecycleProviderProps> = ({
  children,
}) => {
  const lifecycle = useAppSelector(selectSlotLifecycle)
  const dispatch = useDispatch()

  useEffect(() => {
    if (lifecycle === SlotLifecycle.PLAY) {
      const stopping = setTimeout(() => {
        dispatch(setSlotLifecycle(SlotLifecycle.STOPPING))
      }, 2000)
      return () => clearTimeout(stopping)
    }
  }, [lifecycle, dispatch])

  useEffect(() => {
    if (lifecycle === SlotLifecycle.STOPPING) {
      const stop = setTimeout(() => {
        dispatch(setSlotLifecycle(SlotLifecycle.STOP))
      }, 2000)
      return () => clearTimeout(stop)
    }
  }, [lifecycle, dispatch])

  useEffect(() => {
    if (lifecycle === SlotLifecycle.STOP) {
      dispatch(setSlotLifecycle(SlotLifecycle.INFO))
    }
  }, [lifecycle, dispatch])

  useEffect(() => {
    if (lifecycle === SlotLifecycle.INFO) {
      dispatch(setSlotCurrentBet(0))
      setTimeout(() => {
        dispatch(setSlotLifecycle(SlotLifecycle.READY_TO_START))
      }, 3000)
    }
  }, [lifecycle, dispatch])

  return <>{children}</>
}

export default SlotLifecycleProvider
