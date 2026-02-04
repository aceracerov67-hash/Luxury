import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'   
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'

const Layout = () => {
  return (
    <>
    <div>
      <Header />
      <Hero />
      <main>
        <Outlet />
      </main>
      <Footer />  
    </div>
    </>
  )
}

export default Layout