/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './JP.less';
import withStyles from '../../../../decorators/withStyles';
import AppActions from '../../../../actions/AppActions';
import $ from 'jquery'

@withStyles(styles)
class JP {

    render() {
        return (
            <div id="JP" className="open-class-tab-content-box tab-content-box">
                PropTypeshis is Page JP!
            </div>
        );
    }
}

export default JP;
