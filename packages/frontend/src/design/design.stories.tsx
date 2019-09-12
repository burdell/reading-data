import React from 'react'
import { storiesOf } from '@storybook/react'

import { ColorGroup } from '../design/types'
import * as colors from './colors'
import { ColorRow } from './ColorRow'

const colorGroups: ColorGroup[] = Object.keys(colors as any).reduce(
  (acc, colorGroupName: any) => {
    const colorGroup = (colors as any)[colorGroupName]
    const group: ColorGroup = {
      name: colorGroupName,
      colors: Object.keys(colorGroup).reduce((acc, colorName) => {
        const color = colorGroup[colorName]
        ;(acc as any).push({ name: colorName, color })
        return acc
      }, [])
    }
    ;(acc as any).push(group)
    return acc
  },
  []
)

storiesOf('Colors', module).add('palette', () => (
  <div>
    {colorGroups.map(group => (
      <ColorRow group={group} />
    ))}
  </div>
))
