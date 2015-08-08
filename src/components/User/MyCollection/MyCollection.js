/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './MyCollection.less';
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery'


@withStyles(styles)
class MyCollection {
    render() {        
        return (
            <section className="contentPart">
                <div className="myCollect">
                    <div className="tabs-box tabs-line">
                        <div className="tabs">
                            <div className="item selected">
                                <h4>所有关注校</h4>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div id="myCollectionList">
                            <ul className="schoolListUl tab-content">            
                                <li>
                                    <div className="schoolBorder">
                                        <img className="img" src="http://image.rrliuxue.com/Images/20150724/rBACE120150724170308.jpg" />
                                    </div>
                                    <div className="introduce">
                                        <div className="name">
                                            <span className="ch">佛罗里达大学</span>
                                            <span className="border"></span>
                                            <span className="en">University of Florida</span>
                                        </div>
                                        <div className="lal">
                                            <div className="love"><i></i><span id="num">45645</span></div>
                                            <div className="location"><i></i><span id="location">美国</span></div>
                                            <div className="clear"></div>
                                        </div>
                                    </div>
                                    <div className="right button">
                                        <a href=""><button className="button-line btnSchedule">查看详情</button></a>
                                    </div>
                                    <div className="clear"></div>
                                </li>
                                <li>
                                    <div className="schoolBorder">
                                        <img className="img" src="http://image.rrliuxue.com/Images/20150724/rBACE120150724170308.jpg" />
                                    </div>
                                    <div className="introduce">
                                        <div className="name">
                                            <span className="ch">佛罗里达大学</span>
                                            <span className="border"></span>
                                            <span className="en">University of Florida</span>
                                        </div>
                                        <div className="lal">
                                            <div className="love"><i></i><span id="num">45645</span></div>
                                            <div className="location"><i></i><span id="location">美国</span></div>
                                            <div className="clear"></div>
                                        </div>
                                    </div>
                                    <div className="right button">
                                        <a href=""><button className="button-line btnSchedule">查看详情</button></a>
                                    </div>
                                    <div className="clear"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section> 
        );
    }
    //dom加载完调用
    componentDidMount(){
        
    }
}

export default MyCollection;
