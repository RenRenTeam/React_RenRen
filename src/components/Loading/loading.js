/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './loading.less';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';
import $ from 'jquery';

import LoadingIndex from './LoadingIndex'

@withStyles(styles)
class Loading {
      static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
      };

    render() {
        let title = '人人留学';
        this.context.onSetTitle(title);
        return (
            <div>
                <div className="base-Effect">
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                </div>
                <div id="loadingIndex"></div>
            </div>
        );
    }
    componentDidMount() {
        setTimeout(function(){
            React.render(<LoadingIndex />,document.getElementById('loadingIndex'));
        },1500);
    }
}

export default Loading;