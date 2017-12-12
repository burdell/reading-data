import styled from 'react-emotion';

import { queries } from '../../shared/breakpoints';

export const BookList = styled('div')`
    flex: 8;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 1rem;
`;

export const Book = styled('div')`
    width: 32%;
    margin: 1rem 0;

    ${queries.medium`
        width: 49%;
    `}

    ${queries.small`
        width: 100%;
        margin: 1rem auto;
    `}
`;
