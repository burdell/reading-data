import React from 'react'
import NumberFormat from 'react-number-format'
import { BookOpen, Layers, Award } from 'react-feather'

import { Stats as StatsType } from '../../types'
import { StatsContainer, Stat, StatNumber } from './styles'

interface StatsProps {
  stats: StatsType
}

export function Stats({ stats }: StatsProps) {
  return (
    <StatsContainer>
      {stats && stats.bookCount !== 0 && (
        <span>
          <Stat>
            <BookOpen size={12} />
            <StatNumber>{stats.bookCount}</StatNumber>
            <span className="Stats--type"> books</span>
          </Stat>
          <Stat>
            <Layers size={12} />
            <StatNumber>
              <NumberFormat
                displayType={'text'}
                value={stats.pageCount}
                thousandSeparator={true}
              />
            </StatNumber>
            <span> pages</span>
          </Stat>
          <Stat>
            <Award size={12} />
            <StatNumber>
              <NumberFormat
                displayType={'text'}
                value={stats.ratingCount / stats.bookCount}
                decimalScale={2}
              />
            </StatNumber>
            <span> avg rating</span>
          </Stat>
        </span>
      )}
      {(!stats || stats.bookCount === 0) && <div>No books</div>}
    </StatsContainer>
  )
}
