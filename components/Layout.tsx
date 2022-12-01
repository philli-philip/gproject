import React,{ ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ( props ) => (
  <div className="container mx-auto min-h-screen">{props.children}</div>
)

export default Layout