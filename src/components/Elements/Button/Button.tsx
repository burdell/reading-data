import React from 'react'
import { Button } from 'antd'
import 'antd/lib/button/style/css'

interface ButtonProps {
  children: JSX.Element | string[] | string
  shape?: 'circle'
  onClick(e: any): void
}

export default ({ children, ...props }: ButtonProps) => {
  return <Button {...props}>{children}</Button>
}
