
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function Mainlayout() {
  return (
     <div>
        <Header />
        <Outlet />
    </div>
  )
}
