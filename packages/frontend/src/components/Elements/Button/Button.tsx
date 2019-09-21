import React, { ButtonHTMLAttributes } from 'react'
import styled from 'react-emotion'

import { secondary, white } from '../../../design/colors'

interface ButtonProps {
  children: JSX.Element | string[] | string
}

const StyledButton = styled('button')`
  outline: none;
  background-color: ${secondary.secondary3};
  padding: 0.5rem;
  border-radius: 0.25rem;
  color: ${white.white5};
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: ${secondary.secondary2};
  }
`

export function Button({
  children,
  ...props
}: ButtonProps & ButtonHTMLAttributes<{}>) {
  return <StyledButton {...props}>{children}</StyledButton>
}
