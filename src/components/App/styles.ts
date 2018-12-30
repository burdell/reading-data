import styled from 'react-emotion'

import { queries } from '../../shared/breakpoints'

export const appFont = 'Montserrat'

export const AppContainer = styled('div')`
    font-family: ${appFont};
    display: relative;
`

export const BodyContainer = styled('div')`
    display: flex;

    ${queries.small`
        margin-top: 3rem;
    `}
`
