import React from 'react';

interface Rating {
    rating: number;
}

function star(rating: number, index: number) {
    if (index <= rating) {
        return '★';
    }
    
    return '☆';
}

export default ({ rating }: Rating): JSX.Element => {
    const ratingNum = Number(rating);
    const ratings = [1, 2, 3, 4, 5];
    return (
        <span>
            {ratings.map((blah) => star(ratingNum, blah))}
        </span>
    );
};
 