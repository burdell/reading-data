import React from 'react';

import { FilterOptions } from '../types';
import { FilterDisplay, FilterItem } from './styles';
import { translateMonth } from '../Sidebar/Filter';
import { ratingGenerator } from '../Rating';

export default ({ filterOptions }: { filterOptions: FilterOptions }) => {
    if (!filterOptions) { return null; }
    
    const monthString = getMonthString(filterOptions.month);
    const yearString = getYearString(filterOptions.year);
    let ratingString = getRatingString(filterOptions.rating);
    if (ratingString && (monthString || yearString)) {
        ratingString = `${ratingString} in`;
    }

    return (
        <FilterDisplay>
            <span>Current Filter:</span>
            { monthString || yearString || ratingString ?
                <span>
                    <FilterItem>{ratingString}</FilterItem>
                    <FilterItem>{monthString}</FilterItem>
                    <FilterItem>{yearString}</FilterItem>
                </span> : <FilterItem>All books</FilterItem>
            }
        </FilterDisplay>
    );
};

function getYearString(years: number[]): string {
    if (!years) { return null; }

    return years.join(', ');
}

function getMonthString(months: string[]): string {
    if (!months || months.length === 0) { return null; }

    return months
        .map(month => translateMonth(month))
        .join(', ');
}

function getRatingString(ratings: number[]): string {
    if (!ratings || ratings.length === 0) { return null; }

    return ratings
        .map(rating => ratingGenerator(rating))
        .join(', ');
}