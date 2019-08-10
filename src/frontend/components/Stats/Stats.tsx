import React from 'react'
import NumberFormat from 'react-number-format'

import { Stats } from '../types'
import { StatsContainer, Stat } from './styles'

interface StatsProps {
  stats: Stats
}

export default ({ stats }: StatsProps) => {
  return (
    <StatsContainer>
      {stats && stats.bookCount !== 0 && (
        <span>
          <Stat>
            <span>{stats.bookCount}</span>
            <span className="Stats--type"> books</span>
          </Stat>
          <Stat>
            <NumberFormat
              displayType={'text'}
              value={stats.pageCount}
              thousandSeparator={true}
            />
            <span> pages</span>
          </Stat>
          <Stat>
            <span>
              <NumberFormat
                displayType={'text'}
                value={stats.ratingCount / stats.bookCount}
                decimalScale={2}
              />
            </span>
            <span> avg rating</span>
          </Stat>
        </span>
      )}
      {(!stats || stats.bookCount === 0) && <div>No books</div>}
    </StatsContainer>
  )
}
