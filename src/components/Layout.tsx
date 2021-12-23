import React from 'react'
import tw, { styled } from 'twin.macro'

interface LayoutProps {
  children: React.ReactElement
}
function Layout({ children, ...props }: LayoutProps) {
  return (
    <section tw="bg-black min-h-screen w-screen flex items-center justify-center p-4">
      <Main>{children}</Main>
    </section>
  )
}

const Main = styled.main`
  ${tw`bg-white p-2 md:p-6 rounded-xl h-full text-center max-width[520px]`}
  min-height:calc(100vh - 32px);
`
export default Layout
