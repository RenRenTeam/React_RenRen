/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './USA.less';
import withStyles from '../../../../decorators/withStyles';
import AppActions from '../../../../actions/AppActions';
import $ from 'jquery'

@withStyles(styles)
class USA {

    render() {
        return (
            <div id="USA" className="open-class-tab-content-box tab-content-box">
                PropTypeshis is Page USA!
            </div>
        );
    }
}

export default USA;
