import React from 'react';

import { FilterOptions } from '../types';
import { FilterDisplay, FilterItem } from './styles';

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
            <FilterItem>{ratingString}</FilterItem>
            <FilterItem>{monthString}</FilterItem>
            <FilterItem>{yearString}</FilterItem>
        </FilterDisplay>
    );
};

function getYearString(years: number[]): string {
    if (!years) { return null; }

    return years.join(', ');
}

function getMonthString(months: string[]): string {
    if (!months) { return null; }

    return months.join(', ');
}

function getRatingString(ratings: number[]): string {
    if (!ratings) { return null; }

    return ratings.join(', ');
}