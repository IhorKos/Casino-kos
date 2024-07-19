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
      <div className="absolute right-[5%] top-[40%] text-white">
        <RouletteTable />
      </div>
      <div className="absolute bottom-[15%] right-[30%]">
        <BetPanel />
      </div>
      
      <div className="absolute top-[30%] left-[70%] text-white">
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
