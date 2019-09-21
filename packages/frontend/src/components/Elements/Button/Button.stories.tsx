import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { AppContainer } from '../../App/styles'
import { Button } from './Button'

storiesOf('Button', module).add('basic button', () => (
  <AppContainer>
    <Button onClick={() => null}>Click Me</Button>
  </AppContainer>
))
