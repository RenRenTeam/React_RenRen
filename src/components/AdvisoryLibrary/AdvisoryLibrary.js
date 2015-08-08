/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './AdvisoryLibrary.less';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';


import Body from './Body/Body.js';
import ActivityList from './ActivityList/ActivityList.js';
import $ from 'jquery'

@withStyles(styles)
class AdvisoryLibrary {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = '资讯库 - 人人留学';
    this.context.onSetTitle(title);
    return (
      <section className="advistory-box">
        <div className="tabs-box">
            <Body />
            <ActivityList />
            <div className="clear"></div>
        </div>
    </section>
    );
  }
  componentDidMount() {
    $(document).ready(function(){

    });
  }
}

export default AdvisoryLibrary;
