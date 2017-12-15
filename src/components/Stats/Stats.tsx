import React from 'react';
import NumberFormat from 'react-number-format';

import { Stats } from '../types';
import { StatsContainer, Stat } from './styles';

interface StatsProps {
    stats: Stats;
}

export default ({ stats }: StatsProps) => {
    if (!stats) { return null; }

    return( 
        <StatsContainer>
            <Stat>
                <span>{stats.bookCount}</span><span className="Stats--type"> books</span>
            </Stat>
            <Stat>
                <NumberFormat
                    displayType={'text'}
                    value={stats.pageCount || 0}
                    thousandSeparator={true}
                />
                <span> pages</span>
            </Stat>
            { stats.ratingCount && stats.bookCount &&
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
            }
        </StatsContainer>
    );
};
