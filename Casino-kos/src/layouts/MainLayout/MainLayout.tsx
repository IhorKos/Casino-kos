import { FC } from 'react'
import { Outlet } from 'react-router-dom'

interface MainLayoutProps {}

const MainLayout:FC<MainLayoutProps> = ({}) => {
  return (
    <div>
      <div>Header</div>
      <Outlet/>
    </div>
  )
}

export default MainLayout
