import React from 'react'
import { Header } from '../ui/Header'
import { Footer } from '../ui/Footer'

export const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <button className="btn-whatsapp">Whatsap</button>
    </>
  )
}
