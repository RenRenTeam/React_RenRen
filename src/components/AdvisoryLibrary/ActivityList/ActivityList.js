/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './ActivityList.less';
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';

@withStyles(styles)
class ActivityList {

  render() {
    return (
      <div className="activityList">
        <div className="title">活动</div>
        <div className="border"></div>
        <ul className="activityUl">
            <li>
                <div className="left img">
                    <img src="http://new.rrliuxue.com/WebResources/Default/images/advistory-library/activityAdPic/1.jpg" />
                </div>
                <div className="right content">
                    芝加哥大都会地区联合
                    车站科技中心EB-5项目
                    教育资源介绍
                    <div className="bt-join">
                        <button className="button-line">立即参与</button>
                    </div>
                </div>
                <div className="clear"></div>
            </li>
            <li>
                <div className="left img">
                    <img src="http://new.rrliuxue.com/WebResources/Default/images/advistory-library/activityAdPic/2.jpg" />
                </div>
                <div className="right content">
                    雅思口语/写作瓶颈突
                    破班
                    <div className="bt-join">
                        <button className="button-line">立即参与</button>
                    </div>
                </div>
                <div className="clear"></div>
            </li>
            <li className="last">
                <div className="left img">
                    <img src="http://new.rrliuxue.com/WebResources/Default/images/advistory-library/activityAdPic/3.jpg" />
                </div>
                <div className="right content">
                    EB-5投资项目移民赴美
                    留学的最佳捷径
                    <div className="bt-join">
                        <button className="button-line">立即参与</button>
                    </div>
                </div>
                <div className="clear"></div>
            </li>
        </ul>
    </div>
    );
  }

}

export default ActivityList;