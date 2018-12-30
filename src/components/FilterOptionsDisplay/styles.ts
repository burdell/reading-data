import styled from 'react-emotion'

export const FilterDisplay = styled('div')`
    font-style: italic;
    margin-left: 2rem;
    margin-top: 1rem;
    color: #c1c1c1;
    font-size: 0.8rem;
    padding-top: 0.5rem;
`

export const FilterRating = styled('span')`
    font-style: default;
`

export const FilterItem = styled('span')`
    font-weight: 800;

    :before {
        content: ' ';
    }
`
