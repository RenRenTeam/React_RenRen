/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './AUS.less';
import withStyles from '../../../../decorators/withStyles';
import AppActions from '../../../../actions/AppActions';
import $ from 'jquery'

@withStyles(styles)
class AUS {

    render() {
        return (
            <div id="AUS" className="open-class-tab-content-box tab-content-box">
                PropTypeshis is Page AUS!
            </div>
        );
    }
}

export default AUS;
