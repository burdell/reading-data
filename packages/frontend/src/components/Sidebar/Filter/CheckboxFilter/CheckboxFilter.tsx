import React from 'react'

import { FilterOptions } from '../../../../types'
import { Checkbox, CheckboxSelection } from '../../../Elements'
import { CheckboxFilter, ClearFilter } from './styles'

interface CheckboxFilterProps {
  field: string
  options: Array<string | number>
  currentFilter: FilterOptions
  onSelect(c: CheckboxSelection): void
  renderOption?(o: string | number): string
}

export default ({
  options,
  field,
  currentFilter,
  onSelect,
  renderOption
}: CheckboxFilterProps) => {
  return (
    <CheckboxFilter>
      {options.map(option => (
        <div key={option}>
          <Checkbox
            name={field}
            value={option}
            label={renderOption ? renderOption(option) : option}
            isChecked={(currentFilter as any)[field].indexOf(option) >= 0}
            onSelect={onSelect}
          />
        </div>
      ))}
      <ClearFilter
        onClick={() => onSelect({ field, value: null, selected: false })}
      />
    </CheckboxFilter>
  )
}
