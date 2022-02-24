import React from 'react'
import tw, { styled } from 'twin.macro'

import Header from '~/components/Header'
import Footer from '~/components/Footer'

interface LayoutProps {
  children: React.ReactElement
}

function Layout({ children, ...props }: LayoutProps) {
  return (
    <>
      <Header />
      <Section>{children}</Section>
      <Footer />
    </>
  )
}
const Section = styled.section`
  min-height: calc(100vh - 160px);
  ${tw`pb-4`}
`
export default Layout
