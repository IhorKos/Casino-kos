import { FC } from 'react'
import RouletteSpinPX from '../../pixi/rouletteSpin/RouletteSpinPX'
import GameSceneUI from './GameSceneUI'
import { Stage } from '../../../../app/config/contextBridge'
import GameSceneActionsProvider from './GameSceneActionsProvider'
import BgPX from '../../pixi/bg/BgPX'
import soundBg from '../../../../assets/sounds/roulette/bg.mp3'
import soundBet from '../../../../assets/sounds/roulette/bet.mp3'
import soundNumber from '../../../../assets/sounds/roulette/number.mp3'
import soundRouletteSpin from '../../../../assets/sounds/roulette/spin.mp3'
import { sound } from '@pixi/sound'
import { SOUNDS_ROULETTE } from './config'

interface IRouletteGameSceneProps {}

const [width, height] = [1150, 500]

const RouletteGameScene: FC<IRouletteGameSceneProps> = () => {
  sound.add(SOUNDS_ROULETTE.BG, soundBg)
  sound.add(SOUNDS_ROULETTE.BET, soundBet)
  sound.add(SOUNDS_ROULETTE.NUMBER, soundNumber)
  sound.add(SOUNDS_ROULETTE.SPIN, soundRouletteSpin)

  return (
    <div className="flex flex-col items-center">
      <div>Title Game</div>
      <GameSceneActionsProvider>
        <GameSceneUI>
          <Stage
            width={width}
            height={height}
            options={{ background: 'green' }}
          >
            <BgPX />
            <RouletteSpinPX />
          </Stage>
        </GameSceneUI>
      </GameSceneActionsProvider>
    </div>
  )
}

export default RouletteGameScene
