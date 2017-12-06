import styled from 'react-emotion';

export const CheckboxFilter = styled('div')`
    position: relative;
`;

export const ClearFilter = styled('div')`
    position: absolute;
    top: -35px;
    right: 5px;

    :before {
        content: 'Clear';
        color: #cecece;
        font-size: .7rem;
        cursor: pointer;
    }

    :before :hover {
        color: red;
    }
`;