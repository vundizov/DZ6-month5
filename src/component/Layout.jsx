import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'


const Layout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>

    </div>
  )
}

export default Layout
