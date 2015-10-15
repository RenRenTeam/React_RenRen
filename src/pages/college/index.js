// imports
import React from 'react';
import {Route} from 'react-router';
import CollegePage from './page';

const route = React.createElement(Route, {name: 'college', key: 'route_college', handler: CollegePage});

export default route;
