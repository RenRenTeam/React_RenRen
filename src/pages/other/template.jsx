// react
import React from 'react';
import Chrome from '../../components/chrome/index.js';

import './main.less';
const render = function() {
    return (
        <Chrome>
            <h1>I am other page</h1>
            <div id="div1">I am other page</div>
            <div id="div2">I am other page</div>
        </Chrome>
    );
};

export default render;
