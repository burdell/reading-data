import styled from 'react-emotion';

export const FilterDisplay = styled('div')`
    font-style: italic;
    margin-left: 2rem;
    margin-top: 1rem;
    color: #7c7c7c;
    font-size: .8rem;
`;

export const FilterRating = styled('span')`
    font-style: default;
`;

export const FilterItem = styled('span')`
    font-weight: 800;

    :before {
        content: ' '
    }
`;