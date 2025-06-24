import Navbar from '../../components/students/Navbar'
import Footer from '../../components/students/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout