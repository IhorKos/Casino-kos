import { Stage as PixiStage } from '@pixi/react'
import { ReactReduxContext } from 'react-redux'

const ContextBridge = ({
  children,
  Context,
  render,
}: {
  children: any;
  Context: any;
  render: any;
}) => {
  return (
    <Context.Consumer>
      {(value) =>
        render(<Context.Provider value={value}>{children}</Context.Provider>)
      }
    </Context.Consumer>
  )
}

export const Stage = ({ children, ...props }) => {
  return (
    <ContextBridge
      Context={ReactReduxContext}
      render={(children) => <PixiStage {...props}>{children}</PixiStage>}
    >
      {children}
    </ContextBridge>
  )
}
