import React from 'react';

import ratingGenerator from './ratingGenerator';
import './styles.css';

interface Rating {
    rating: number;
}

export default ({ rating }: Rating): JSX.Element => {
    const ratingNum = Number(rating);
    return (
        <span className="Rating">
            {ratingGenerator(ratingNum)}
        </span>
    );
};
 