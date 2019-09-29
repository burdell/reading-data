import React, { ButtonHTMLAttributes, ReactNode } from 'react'

import { StyledButton, ButtonIcon } from './styles'

interface ButtonProps {
  children: ReactNode
}

export function Button({
  children,
  ...buttonProps
}: ButtonProps & ButtonHTMLAttributes<{}>) {
  return <StyledButton {...buttonProps}>{children}</StyledButton>
}
