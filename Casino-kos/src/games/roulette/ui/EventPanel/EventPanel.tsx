import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks'
import {
  selectRouletteSpinCurrentNumber,
  setRouletteStartSpeed,
} from '../../slices/rouletteSpinSlice'
import {
  RouletteLifecycle,
  RouletteWinOrLose,
  selectRouletteLifecycle,
  selectRouletteWinOrLose,
  setRouletteLifecycle,
} from '../../slices/rouletteSlice'
import RouletteStartButton from '../../shared/button/RouletteStartButton'
import { sound } from '@pixi/sound'
import { SOUNDS_ROULETTE } from '../../scenes/GameScene/config'

interface IEventPanelProps {}

const EventPanel: FC<IEventPanelProps> = () => {
  const lifecycle = useAppSelector(selectRouletteLifecycle)
  const winOrLose = useAppSelector(selectRouletteWinOrLose)
  const currentNumber = useAppSelector(selectRouletteSpinCurrentNumber)
  const dispatch = useAppDispatch()
  const onStart = () => {
    sound.play(SOUNDS_ROULETTE.SPIN)
    dispatch(setRouletteStartSpeed())
    dispatch(setRouletteLifecycle(RouletteLifecycle.PLAY))
  }
  return (
    <div>
      {lifecycle === RouletteLifecycle.READY_TO_START && (
        <RouletteStartButton onClick={onStart}/>
      )}
      {lifecycle === RouletteLifecycle.PLAY && (
        <div>
          the wheel is spinning... <br /> wish you a win!
        </div>
      )}
      {lifecycle === RouletteLifecycle.INFO && (
        <div className="flex gap-4">
          <div>
            {winOrLose === RouletteWinOrLose.WIN && 'WIN!'}
            {winOrLose === RouletteWinOrLose.LOSE && 'LOSE('}
          </div>
          <div>{currentNumber}</div>
        </div>
      )}
      {lifecycle === RouletteLifecycle.FINISHED && <div>Calculation...</div>}
    </div>
  )
}

export default EventPanel
