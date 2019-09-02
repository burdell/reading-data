import React from 'react'
import { Checkbox as AntdCheckbox } from 'antd'
import 'antd/lib/checkbox/style/css'

import { Label, LabelDisplay } from './styles'

export interface CheckboxSelection {
  field: string
  selected: boolean
  value: any
}

interface CheckboxProps {
  isChecked: boolean
  name: string
  label: string | number
  value?: string | number
  onSelect(result: CheckboxSelection): void
}

export const Checkbox = ({
  label,
  isChecked,
  onSelect,
  name,
  value
}: CheckboxProps) => {
  return (
    <Label>
      <AntdCheckbox
        name={name}
        checked={isChecked}
        onChange={e => {
          onSelect({
            field: e.target.name || '',
            selected: e.target.checked,
            value: Number(e.target.value)
          })
        }}
        value={value || label}
      />
      <LabelDisplay>{label}</LabelDisplay>
    </Label>
  )
}
