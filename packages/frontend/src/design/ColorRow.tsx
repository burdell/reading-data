import React, { CSSProperties } from 'react'

import { ColorGroup } from './types'

function swatchCss(css: CSSProperties): CSSProperties {
  return {
    ...css,
    borderRadius: '10px',
    height: '50px',
    width: '50px',
    margin: '0.2rem 1.5rem'
  }
}

export function ColorRow({ group }: { group: ColorGroup }) {
  return (
    <div style={{ fontFamily: 'Helvetica' }}>
      <div>{group.name}</div>
      <div style={{ display: 'flex', padding: '1rem 0' }}>
        {group.colors.map((color, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <div style={swatchCss({ backgroundColor: color.color })} />
            <div>{color.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
