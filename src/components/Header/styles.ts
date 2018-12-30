import styled from 'react-emotion'

import { queries } from '../../shared/breakpoints'

export const Header = styled('div')`
    display: none;
    height: 3rem;
    background-color: #e5e5e5;
    width: 100%;
    position: fixed;
    top: 0;
    padding: 0 0.8rem;
    z-index: 1;

    -webkit-box-shadow: 0px 2px 5px 0px rgba(204, 204, 204, 1);
    -moz-box-shadow: 0px 2px 5px 0px rgba(204, 204, 204, 1);
    box-shadow: 0px 2px 5px 0px rgba(204, 204, 204, 1);

    ${queries.small`
        display: flex;
        align-items: center;
        justify-content: space-between;
    `}
`

export const HeaderText = styled('div')`
    font-weight: 800;
    font-size: 1rem;
`

export const FilterToggle = styled('div')`
    background-color: #5b6c87;
    display: inline-block;
    padding: 0.7rem 2rem;
    color: white;
    float: right;
    font-size: 0.8rem;
    cursor: pointer;
`
