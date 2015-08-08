/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Recommendation.less';
import withViewport from '../../../../decorators/withViewport';
import withStyles from '../../../../decorators/withStyles';
import $ from 'jquery';

@withStyles(styles)
class Recommendation {
static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = '资讯库详细 - 人人留学';
    this.context.onSetTitle(title);
    return (
        <div className="right adPart">
            <div className="dv_title">
                <div>
                    <div className="left titleFont">相关推荐</div>
                    <div className="clear"></div>
                </div>
            </div>
            <div className="border_bottom"></div>
            <div className="contentUl">
                <ul>
                    <li><a href="">1.日本大丸百货入驻上海</a></li>
                    <li><a href="">2.日本留学需要高考成绩吗</a></li>
                    <li><a href="">3.日本留学怎样顺利获得签证</a></li>
                    <li><a href="">4.日本留学行前不可不知的十件事</a></li>
                    <li><a href="">5.日本大学院入学时间及相关问题</a></li>
                </ul>
            </div>
        </div>
    );
  }

}

export default Recommendation;