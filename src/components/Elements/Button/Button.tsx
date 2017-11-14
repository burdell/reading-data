import React from 'react';
import { FlatButton as Button } from 'material-ui';

import { buttonColor } from '../../../shared/colors';

interface ButtonProps {
    children: JSX.Element | string[] | string;
    onClick(e: any): void;
}

export default ({ children, ...props }: ButtonProps) => {
    return (
        <Button
            backgroundColor={buttonColor}
            className="Button"
            {...props}
        >
            {children}
        </Button>
    );
};
