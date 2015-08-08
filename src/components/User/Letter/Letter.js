/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
var Select = require('rc-select');
var Option = Select.Option;
import styles from './Letter.less';
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery'


@withStyles(styles)
class Letter {
    render() {        
        return (
            <div className="myLetter">
            <div className="tabs-box tabs-line">
                <div className="tabs" id="mesTabs">
                    <div id="msg_2" className="item selected" data-content="#allMes">所有消息</div>
                    <div id="msg_1" className="item" data-content="#myMes">我的消息</div>
                    <div id="msg_0" className="item" data-content="#systemMes">系统消息</div>
                    <div  className="right show_unread">
                        <div className="custom-checkbox">
                            <input type="checkbox" id="unread" className="icheck" />
                            <label for="unread">&nbsp;&nbsp;只显示未读</label>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="tab-content">
                    <div id="allMes" className="search-box tab-content-box">
                        <ul id="letter_all" className="mesUl">
                            <li className="read">
                                <div className="font">欢迎注册人人留学免费留学申请智能平台！！！！</div>
                                <div className="time">2015-05-18   19:00</div>
                                <div className="clear"></div>
                                <div className="detailDv">
                                    <i className="icon"></i>
                                    <div className="bg-notice">
                                        <p>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎注册人人留学申请智能平台！我们目前开通了英国、澳大利亚两国的免费申请。 添加人人官方微信‘RRLIUXUE’，最新留学咨询、神秘<br />
                                            活动推荐、在线申请答疑，人人留学助你拿到offer！
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="read">
                                <div className="font">欢迎注册人人留学免费留学申请智能平台！！！！</div>
                                <div className="time">2015-05-18   19:00</div>
                                <div className="clear"></div>
                                <div className="detailDv">
                                    <i className="icon"></i>
                                    <div className="bg-notice">
                                        <p>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎注册人人留学申请智能平台！我们目前开通了英国、澳大利亚两国的免费申请。 添加人人官方微信‘RRLIUXUE’，最新留学咨询、神秘<br />
                                            活动推荐、在线申请答疑，人人留学助你拿到offer！
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="unread">
                                <div className="font">欢迎注册人人留学免费留学申请智能平台！！！！</div>
                                <div className="time">2015-05-18   19:00</div>
                                <div className="clear"></div>
                                <div className="detailDv">
                                    <i className="icon"></i>
                                    <div className="bg-notice">
                                        <p>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎注册人人留学申请智能平台！我们目前开通了英国、澳大利亚两国的免费申请。 添加人人官方微信‘RRLIUXUE’，最新留学咨询、神秘<br />
                                            活动推荐、在线申请答疑，人人留学助你拿到offer！
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="unread">
                                <div className="font">欢迎注册人人留学免费留学申请智能平台！！！！</div>
                                <div className="time">2015-05-18   19:00</div>
                                <div className="clear"></div>
                                <div className="detailDv">
                                    <i className="icon"></i>
                                    <div className="bg-notice">
                                        <p>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎注册人人留学申请智能平台！我们目前开通了英国、澳大利亚两国的免费申请。 添加人人官方微信‘RRLIUXUE’，最新留学咨询、神秘<br />
                                            活动推荐、在线申请答疑，人人留学助你拿到offer！
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="unread">
                                <div className="font">欢迎注册人人留学免费留学申请智能平台！！！！</div>
                                <div className="time">2015-05-18   19:00</div>
                                <div className="clear"></div>
                                <div className="detailDv">
                                    <i className="icon"></i>
                                    <div className="bg-notice">
                                        <p>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎注册人人留学申请智能平台！我们目前开通了英国、澳大利亚两国的免费申请。 添加人人官方微信‘RRLIUXUE’，最新留学咨询、神秘<br />
                                            活动推荐、在线申请答疑，人人留学助你拿到offer！
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="unread">
                                <div className="font">欢迎注册人人留学免费留学申请智能平台！！！！</div>
                                <div className="time">2015-05-18   19:00</div>
                                <div className="clear"></div>
                                <div className="detailDv">
                                    <i className="icon"></i>
                                    <div className="bg-notice">
                                        <p>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎注册人人留学申请智能平台！我们目前开通了英国、澳大利亚两国的免费申请。 添加人人官方微信‘RRLIUXUE’，最新留学咨询、神秘<br />
                                            活动推荐、在线申请答疑，人人留学助你拿到offer！
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="bottom_dv">
                            <div className="ignoremsg">忽略所有未读消息</div>
                            <div id="pagenav_all" className="pagenav"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
    //dom加载完调用
    componentDidMount(){
        $("#mesTabs .item").click(function(){
            $(this).addClass("selected").siblings().removeClass("selected");
        });
    }
}

export default Letter;
