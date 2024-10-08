import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../app/router/utils'

interface IHummerPageProps {}

const HummerPage: FC<IHummerPageProps> = ({}) => {
  return (
    <div>
      <Link to={ROUTES.main}>return to Main Page</Link>
      <div>HummerPage!</div>
    </div>
  )
}

export default HummerPage
