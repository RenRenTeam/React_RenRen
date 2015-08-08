/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Content.less';
import withViewport from '../../../../decorators/withViewport';
import withStyles from '../../../../decorators/withStyles';
import $ from 'jquery';

@withStyles(styles)
class Content {

  render() {
    
    return (
            <div>
                <div className="title">{this.props.json.Title}</div>
                <div className="prefacePart">
                    <div className="preface">
                        <div className="left">
                            <span className="user themecolor">{this.props.json.Author}</span><span className="border">｜</span><span className="time">{this.props.json.PublisherDate}</span>
                        </div>
                        <div className="right">
                            <div className="left dv_button">
                                <button className="like"></button>
                            </div>
                            <div className="left">
                                <span className="num">{this.props.json.Commend}</span>人觉得赞
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
                <div className="content">
                    <div>
                        {this.props.json.Content}
                    </div>
                    <div className="sharePart">
                        <ul>
                            <li><a href="#">
                                <img src="http://new.rrliuxue.com/WebResources/Default/images/share.png" /></a></li>
                            <li>分享：</li>
                            <li><a href="#">
                                <img src="http://new.rrliuxue.com/WebResources/Default/images/login-box/qq.png" /></a></li>
                            <li><a href="#">
                                <img src="http://new.rrliuxue.com/WebResources/Default/images/login-box/weibo.png" /></a></li>
                            <li><a href="#">
                                <img src="http://new.rrliuxue.com/WebResources/Default/images/login-box/renren.png" /></a></li>
                            <li><a href="#">
                                <img src="http://new.rrliuxue.com/WebResources/Default/images/login-box/baidu.png" /></a></li>
                            <li><a href="#">
                                <img src="http://new.rrliuxue.com/WebResources/Default/images/login-box/qzone.png" /></a></li>
                            <div className="clear"></div>
                        </ul>
                    </div>
                </div>
            </div>
    );
  }

}

export default Content;