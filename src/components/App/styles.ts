import styled from 'react-emotion';

import { queries } from '../../shared/breakpoints';

export const appFont = 'Montserrat';

export const AppContainer = styled('div')`
    display: flex;
    font-family: ${appFont}
`;

export const FullSizeStats = styled('div')`
    ${queries.small`
        display: none;
    `}
`;

export const SmallSizeStats = styled('div')`
    display: none;

    ${queries.small`
        display: inline-block;
    `}
`;
