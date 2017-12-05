import React from 'react';
import NumberFormat from 'react-number-format';

import { Stats } from '../types';
import { StatsContainer } from './styles';

interface StatsProps {
    stats: Stats;
}

export default ({ stats }: StatsProps) => {
    return( 
        <StatsContainer>
            <div>
                <span>{stats.bookCount}</span><span className="Stats--type"> books</span>
            </div>
            <div>
                <NumberFormat
                    displayType={'text'}
                    value={stats.pageCount || 0}
                    thousandSeparator={true}
                />
                <span> pages</span>
            </div>
            { stats.ratingCount && stats.bookCount &&
                <div>
                    <span>
                        <NumberFormat
                            displayType={'text'}
                            value={stats.ratingCount / stats.bookCount}
                            decimalScale={2}
                        />
                    </span>
                    <span> avg rating</span>
                </div>
            }
        </StatsContainer>
    );
};
