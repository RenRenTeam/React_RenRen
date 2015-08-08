/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './SmallMenu.less';
import $ from 'jquery'

@withStyles(styles)
class SmallMenu extends React.Component{
  bakTop(){
    $("html,body").animate({scrollTop:0},200);
  }
  login(){
    
  }
  render() {
    return (
        <div className="small-menu">
            <div className="home-menu"><a href="/"><div className="icon"></div></a></div>
            <div className="top-menu" onClick={this.bakTop.bind(this)}><div className="icon"></div></div>
            <div className="qq-menu"><a href="#"><div className="icon"></div></a></div>
            <div className="weixin-menu">
                <div className="icon"></div>
                <div className="weixin-content">
                    <div className="title">
                        扫描二维码<br />
                        关注人人留学公众帐号
                    </div>
                    <div className="qr"><img src="http://new.rrliuxue.com//WebResources/Default/images/qr/weixin.jpg" /></div>

                </div>
            </div>
            <div className="user-menu">
                <div className="login-button" onClick={this.login.bind(this)}><div className="icon">登 录</div></div>
                <div className="user"><a href="/user/"><div className="icon"></div></a></div>
                <div className="login-tip"></div>
            </div>
        </div>
    );
  }
  //dom加载完调用
  componentDidMount(){
  }
}

export default SmallMenu;
