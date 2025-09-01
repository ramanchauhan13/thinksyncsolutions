'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import RouteLoader from '@/components/RouteLoader'

export default function LayoutWrapper({ children }) {
  return (
    <>
      <RouteLoader />
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
