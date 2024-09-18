import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout: React.FC = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
