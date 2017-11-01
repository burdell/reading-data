import React from 'react';

import "./styles.css";

export default ({ children, ...props }) => {
    return (
        <button className="Button" {...props}>{children}</button>
    );
};
