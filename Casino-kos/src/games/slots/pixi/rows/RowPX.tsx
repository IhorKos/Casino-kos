import { Container, Sprite, useTick } from '@pixi/react'
import { FC, useState } from 'react'
import { TSlotRow } from './utils'

interface IRowPXProps {
  rowID: number
  activeItemID: number
  slotRow: TSlotRow[]
}

const ITEM_HEIGHT = 100
const SPEED = 10

const RowPX: FC<IRowPXProps> = ({ slotRow, rowID }) => {
  console.log(rowID)
  const FULL_HEIGHT_ROW = slotRow.length * ITEM_HEIGHT
  const [position, setPosition] = useState(0)
  useTick((delta) => {
    position >= FULL_HEIGHT_ROW
      ? setPosition(-FULL_HEIGHT_ROW)
      : setPosition(position + SPEED * delta)
  })

  return (
    <Container x={(rowID - 1) * 120} y={position}>
      {/* fake top row */}
      <Container y={-FULL_HEIGHT_ROW}>
        {slotRow.map((row, idx) => (
          <Sprite
            key={row.id}
            image={row.image}
            x={0}
            y={idx * ITEM_HEIGHT}
            //   anchor={0.5}
            scale={0.5}
          />
        ))}
      </Container>
      {/* end fake top row */}
      <Container>
        {slotRow.map((row, idx) => (
          <Sprite
            key={row.id}
            image={row.image}
            x={0}
            y={idx * ITEM_HEIGHT}
            //   anchor={0.5}
            scale={0.5}
          />
        ))}
      </Container>
      {/* bottom fake row */}
      <Container y={FULL_HEIGHT_ROW}>
        {slotRow.map((row, idx) => (
          <Sprite
            key={row.id}
            image={row.image}
            x={0}
            y={idx * ITEM_HEIGHT}
            //   anchor={0.5}
            scale={0.5}
          />
        ))}
      </Container>
      {/* end bottom fake row/ */}
    </Container>
  )
}

export default RowPX
