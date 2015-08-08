/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './UK.less';
import withStyles from '../../../../decorators/withStyles';
import AppActions from '../../../../actions/AppActions';
import $ from 'jquery'

@withStyles(styles)
class UK {

    render() {
        return (
            <div id="UK" className="open-class-tab-content-box tab-content-box">
                PropTypeshis is Page 英国!
            </div>
        );
    }
}

export default UK;
