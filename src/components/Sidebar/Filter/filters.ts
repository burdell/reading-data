import { FilterOptions } from '../../types';

export const emptyFilter: FilterOptions = {
    year: [],
    read: true,
    rating: [],
    month: []
};

export const possibleYears = [2015, 2016, 2017];
export const possibleRatings = [1, 2, 3, 4, 5];
export const possibleMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const monthMap = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
};

export const translateMonth = (month: string) => {
    return monthMap[Number(month)];
};