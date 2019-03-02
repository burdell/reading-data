import React from 'react'

import {
  FilterSection,
  FilterSectionContent,
  FilterSectionTitle
} from './styles'

interface FilterSectionProps {
  children: any
  title: string
}

export default ({ children, title }: FilterSectionProps) => {
  return (
    <FilterSection>
      <FilterSectionTitle>{title}</FilterSectionTitle>
      <FilterSectionContent>{children}</FilterSectionContent>
    </FilterSection>
  )
}
