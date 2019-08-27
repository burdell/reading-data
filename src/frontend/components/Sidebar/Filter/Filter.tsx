import React, { useMemo } from 'react'

import { FilterOptions, Stats as IStats } from '../../../types'
import FilterSection from './FilterSection'
import { possibleRatings, possibleYears } from './filters'
import { CheckboxSelection } from '../../Elements/Checkbox'
import CheckboxFilter from './CheckboxFilter/CheckboxFilter'
import { ratingGenerator } from '../../Rating'
import { SidebarSection } from '../styles'
import Stats from '../../Stats'

interface FilterProps {
  defaultFilters: FilterOptions
  stats: IStats | null
  onFilter(f: FilterOptions): void
}

export function Filter({ stats, onFilter, defaultFilters }: FilterProps) {
  const filterOptions = useMemo<FilterOptions>(() => defaultFilters, [])

  function checkboxSelected({ field, value }: CheckboxSelection) {
    if (value === null) {
      // clear filter
      ;(filterOptions as any)[field] = []
    } else {
      const filter = (filterOptions as any)[field]
      const valueIndex = filter.indexOf(value)
      if (valueIndex < 0) {
        filter.push(value)
      } else {
        filter.splice(valueIndex, 1)
      }
    }

    onFilter(filterOptions)
  }

  return (
    <SidebarSection>
      <FilterSection title="Stats">
        {stats && <Stats stats={stats} />}
      </FilterSection>
      <FilterSection title="Year">
        <CheckboxFilter
          field="year"
          currentFilter={filterOptions}
          onSelect={checkboxSelected}
          options={possibleYears}
        />
      </FilterSection>

      <FilterSection title="Rating">
        <CheckboxFilter
          field="rating"
          currentFilter={filterOptions}
          onSelect={checkboxSelected}
          options={possibleRatings}
          renderOption={(rating: string) => ratingGenerator(Number(rating))}
        />
      </FilterSection>
    </SidebarSection>
  )
}
