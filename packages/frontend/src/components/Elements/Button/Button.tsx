import React, { ButtonHTMLAttributes, ReactNode } from 'react'

import { StyledButton, ButtonIcon } from './styles'

interface ButtonProps {
  children: ReactNode
  icon?: ReactNode
}

export function Button({
  icon,
  children,
  ...buttonProps
}: ButtonProps & ButtonHTMLAttributes<{}>) {
  return (
    <StyledButton {...buttonProps}>
      {icon && <ButtonIcon>{icon}</ButtonIcon>}
      {children}
    </StyledButton>
  )
}
