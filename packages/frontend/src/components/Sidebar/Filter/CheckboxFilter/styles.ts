import styled from '@emotion/styled'

import { gray } from '../../../../design/colors'

export const CheckboxFilter = styled('div')`
  position: relative;
`

export const ClearFilter = styled('div')`
  position: absolute;
  top: -35px;
  right: 10px;

  :before {
    content: 'Clear';
    color: ${gray.gray4};
    font-size: 0.7rem;
    cursor: pointer;
  }

  :before :hover {
    color: red;
  }
`
