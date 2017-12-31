import React from 'react';

import { ScrollToTop } from './styles';
import scroll from './scroll';

const _window = window as any;
_window.__forceSmoothScrollPolyfill__ = true;
require('smoothscroll-polyfill').polyfill();

export default () => {
    return (
        <ScrollToTop onClick={scroll}>↑</ScrollToTop>
    );
};