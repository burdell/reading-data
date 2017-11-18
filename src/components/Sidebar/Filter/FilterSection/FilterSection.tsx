import React from 'react';

interface FilterSection {
    children: any;
    title: string;
}

import './styles.css';

export default ({ children, title }: FilterSection) => {
    return (
        <div className="FilterSection">
            <div className="FilterSection--title">{title}</div>
            <div className="FilterSection--content">
                {children}
            </div>
        </div>
    );
};
