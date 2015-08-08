/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './ALL.less';
import withStyles from '../../../../decorators/withStyles';
import AppActions from '../../../../actions/AppActions';
import $ from 'jquery'

@withStyles(styles)
class ALL {

    render() {
        return (
                <div id="all" className="open-class-tab-content-box tab-content-box">
                    <div className="class-list-box">
                        <div className="class-item">
                            <div className="class-img"><a href="open-class-detail.aspx"><img src='http://new.rrliuxue.com/WebResources/Default/Images/open-class/class/class1.jpg' /></a></div>
                            <div className="class-description">
                                <h4><a href="open-class-detail.aspx">剑桥大学公法讲座</a></h4>
                                <div className="class-info">共 <span className="length">5</span> 节 ｜  1910人报名</div>
                                <div className="date">时间：2015-05-15   19：00—20：00</div>
                                <div className="other">
                                    <div className="speaker">
                                        <div className="title">主讲人：</div>
                                        <div className="speaker-img"><img src='http://new.rrliuxue.com/WebResources/Default/Images/open-class/speaker/1.png' /></div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="action"><a className="appointment button-line" href="open-class-detail.aspx">我要预约</a></div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="class-item">
                            <div className="class-img"><a href="open-class-detail.aspx"><img src="http://new.rrliuxue.com/WebResources/Default/Images/open-class/class/class2.jpg" /></a></div>
                            <div className="class-description">
                                <h4><a href="open-class-detail.aspx">飞行前的准备工作</a></h4>
                                <div className="class-info">共 <span className="length">1</span> 节 ｜  2536人报名</div>
                                <div className="date">时间：2015-05-15   19：00—20：00</div>
                                <div className="other">
                                    <div className="speaker">
                                        <div className="title">主讲人：</div>
                                        <div className="speaker-img"><img src="http://new.rrliuxue.com/WebResources/Default/Images/open-class/speaker/2.png" /></div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="action"><a className="appointment button-line" href="open-class-detail.aspx">我要预约</a></div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="class-item">
                            <div className="class-img"><a href="open-class-detail.aspx"><img src="http://new.rrliuxue.com/WebResources/Default/Images/open-class/class/class3.jpg" /></a></div>
                            <div className="class-description">
                                <h4><a href="open-class-detail.aspx">0-N1动力班</a></h4>
                                <div className="class-info">共 <span className="length">3</span> 节 ｜  190人报名</div>
                                <div className="date">时间：2015-05-15   19：00—20：00</div>
                                <div className="other">
                                    <div className="speaker">
                                        <div className="title">主讲人：</div>
                                        <div className="speaker-img"><img src="http://new.rrliuxue.com/WebResources/Default/Images/open-class/speaker/2.png" /></div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="action"><a className="appointment button-line" href="open-class-detail.aspx">我要预约</a></div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="class-item">
                            <div className="class-img"><a href="open-class-detail.aspx"><img src="http://new.rrliuxue.com/WebResources/Default/Images/open-class/class/class1.jpg" /></a></div>
                            <div className="class-description">
                                <h4><a href="open-class-detail.aspx">0-N1动力班</a></h4>
                                <div className="class-info">共 <span className="length">5</span> 节 ｜  110人报名</div>
                                <div className="date">时间：2015-05-15   19：00—20：00</div>
                                <div className="other">
                                    <div className="speaker">
                                        <div className="title">主讲人：</div>
                                        <div className="speaker-img"><img src="http://new.rrliuxue.com/WebResources/Default/Images/open-class/speaker/2.png" /></div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="action"><a className="appointment button-line" href="open-class-detail.aspx">我要预约</a></div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                    <div className="past-reviews-box">
                        <div className="title">
                            <h3>往期回顾</h3>
                        </div>
                        <div className="past-class-list-box">
                            <div className="past-class-item">
                                <div className="past-class-img"><a href="open-class-detail.aspx"><img src="http://new.rrliuxue.com/WebResources/Default/Images/open-class/class/class1.jpg" /></a></div>
                                <div className="past-class-info">
                                    <h5><a href="open-class-detail.aspx">剑桥大学公法讲座</a></h5>
                                    已预约：1910人
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="past-class-item">
                                <div className="past-class-img"><a href="open-class-detail.aspx"><img src="http://new.rrliuxue.com/WebResources/Default/Images/open-class/class/class1.jpg" /></a></div>
                                <div className="past-class-info">
                                    <h5><a href="open-class-detail.aspx">剑桥大学公法讲座</a></h5>
                                    已预约：1910人
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="past-class-item">
                                <div className="past-class-img"><a href="open-class-detail.aspx"><img src="http://new.rrliuxue.com/WebResources/Default/Images/open-class/class/class1.jpg" /></a></div>
                                <div className="past-class-info">
                                    <h5><a href="open-class-detail.aspx">剑桥大学公法讲座</a></h5>
                                    已预约：1910人
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="past-class-item">
                                <div className="past-class-img"><a href="open-class-detail.aspx"><img src="http://new.rrliuxue.com/WebResources/Default/Images/open-class/class/class1.jpg" /></a></div>
                                <div className="past-class-info">
                                    <h5><a href="open-class-detail.aspx">剑桥大学公法讲座</a></h5>
                                    已预约：1910人
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="past-class-item">
                                <div className="past-class-img"><a href="open-class-detail.aspx"><img src="http://new.rrliuxue.com/WebResources/Default/Images/open-class/class/class1.jpg" /></a></div>
                                <div className="past-class-info">
                                    <h5><a href="open-class-detail.aspx">剑桥大学公法讲座</a></h5>
                                    已预约：1910人
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
        );
    }
}

export default ALL;
