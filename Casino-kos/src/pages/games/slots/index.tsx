import { FC } from 'react'
import CoreGameSlots from '../../../games/slots'
import styles from './../../page.module.css'
import titleImage from '../../../assets/slot/title.svg'
import { twMerge } from 'tailwind-merge'

interface ISlotsPageProps {}

const SlotsPage: FC<ISlotsPageProps> = ({}) => {
  return (
    <div
      className={twMerge(
        'h-screen flex justify-center items-center relative',
        styles.slots,
      )}
    >
      <div className="absolute top-[5%] left-[50%] translate-x-[-50%] z-10">
        <img src={titleImage} />
      </div>
      <CoreGameSlots />
    </div>
  )
}

export default SlotsPage
