import React from 'react'
import tw, { styled } from 'twin.macro'
import Header from '~/components/Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactElement
}
function Layout({ children, ...props }: LayoutProps) {
  return (
    <>
      <Header />
      <section>{children}</section>
      <Footer />
    </>
  )
}

export default Layout
