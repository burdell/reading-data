import React from 'react';
import NumberFormat from 'react-number-format';

import { Stats } from '../types';
import './styles.css';

interface StatsProps {
    stats: Stats;
}

export default ({ stats }: StatsProps) => {
    return( 
        <div className="Sidebar--section">
            <div className="Sidebar--header">Stats</div>
            <div className="Sidebar--content">
                <div>
                    <span>{stats.bookCount}</span><span className="Stats--type"> books</span>
                </div>
                <div>
                    <NumberFormat
                        displayType={'text'}
                        value={stats.pageCount || 0}
                        thousandSeparator={true}
                    />
                    <span className="Stats--type"> pages</span>
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
                        <span className="Stats--type"> avg rating</span>
                    </div>
                }
            </div>
        </div>
    );
};
