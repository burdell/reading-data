import React from 'react';
import { RaisedButton as Button } from 'material-ui';

// import { buttonColor } from '../../../shared/colors';

interface ButtonProps {
    children: JSX.Element | string[] | string;
    onClick(e: any): void;
}

const styleOverrides = {
    fontSize: '.8rem'
};

export default ({ children, ...props }: ButtonProps) => {
    return (
        <Button
            style={styleOverrides}
            fullWidth={true}
            {...props}
        >
            {children}
        </Button>
    );
};
