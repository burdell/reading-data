import React from 'react'
import { storiesOf } from '@storybook/react'

import { ColorGroup } from '../design/types'
import { ColorRow } from './ColorRow'

import * as pallet from './colors'
import * as swatches from './pallets/swatches'

function createColorGroup(pallet: any): ColorGroup[] {
  return Object.keys(pallet as any).reduce((acc, colorGroupName: any) => {
    const colorGroup = (pallet as any)[colorGroupName]
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
  }, [])
}

storiesOf('Colors', module)
  .add('pallet', () => (
    <div>
      {createColorGroup(pallet).map(group => (
        <ColorRow group={group} />
      ))}
    </div>
  ))
  .add('swatches', () => (
    <div>
      {createColorGroup(swatches).map(group => (
        <ColorRow group={group} />
      ))}
    </div>
  ))
