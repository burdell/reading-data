import React from 'react';

import { ScrollToTop } from './styles';
import scroll from './scroll';

export default () => {
    return (
        <ScrollToTop onClick={scroll}>↑</ScrollToTop>
    );
};