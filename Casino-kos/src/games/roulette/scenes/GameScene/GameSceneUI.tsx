import { FC, ReactNode } from 'react'
import RouletteTable from '../../ui/RouletteTable/RouletteTable'
import BetPanel from '../../ui/BetPanel/BetPanel'
import InfoPanel from '../../ui/InfoPanel/InfoPanel'
import EventPanel from '../../ui/EventPanel/EventPanel'

interface IGameSceneUIProps {
  children: ReactNode
}

const GameSceneUI: FC<IGameSceneUIProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute left-[45%] bottom-[29%] text-white">
        <RouletteTable />
      </div>
      <div className="absolute left-[45%] bottom-[10%] text-white">
        <BetPanel />
      </div>
      
      <div className="absolute top-[25%] left-[62%] text-white">
        <EventPanel/>
      </div>
      <div className="absolute top-[5%] right-0 left-0 text-white">
        <InfoPanel/>
      </div>
      {children}
    </div>
  )
}

export default GameSceneUI
