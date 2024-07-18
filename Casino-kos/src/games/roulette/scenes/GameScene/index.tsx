import { Stage } from '@pixi/react'
import React, { FC } from 'react'
import RouletteSpinPX from '../../pixi/rouletteSpin/RouletteSpinPX'
import GameSceneUI from './GameSceneUI'

interface IRouletteGameSceneProps {}

const [width, height] = [1100, 500]

const RouletteGameScene: FC<IRouletteGameSceneProps> = ({}) => {
  return (
    <div className="flex flex-col items-center">
      <div>Title Game</div>
      <GameSceneUI>
        <Stage width={width} height={height} options={{ background: 'green' }}>
          <RouletteSpinPX />
        </Stage>
      </GameSceneUI>
    </div>
  )
}

export default RouletteGameScene
