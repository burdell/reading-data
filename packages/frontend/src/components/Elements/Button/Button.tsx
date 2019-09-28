import React, { ButtonHTMLAttributes } from 'react'
import styled from 'react-emotion'

import { secondary, white } from '../../../design/colors'

interface ButtonProps {
  children: JSX.Element | string[] | string
}

const StyledButton = styled('button')`
  outline: none;
  background-color: ${secondary.secondary4};
  color: ${white.white9};
  padding: 0.2rem 0.5rem;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in;

  &:hover {
    background-color: ${secondary.secondary5};
  }
`

export function Button({
  children,
  ...props
}: ButtonProps & ButtonHTMLAttributes<{}>) {
  return <StyledButton {...props}>{children}</StyledButton>
}
