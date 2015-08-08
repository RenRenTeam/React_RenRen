/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Header.less';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery'

@withStyles(styles)
class Header {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        let title = '个人中心－人人留学';
        this.context.onSetTitle(title);
        return (
            <div className="user_header">
                <div className="left">
                    <div className="left faceimg faceimgBorder">
                        <div className="wrapCc"><img id="top_HeadImg" src="http://new.rrliuxue.com/WebResources/Default/images/personal-center/defaultHead.png" /></div>
                    </div>
                    <div className="left infoMes">
                        <div className="faceBDv">
                            <div id="nav_div_UserName">13166289220</div>
                            <div className="spanPPDv">
                                <span id="nav_span_City">13166289220</span><br />
                                <span id="nav_span_LastTime"></span>
                            </div>
                            <div className="de_tw">
                                <div className="left"><a href="/user/"><i className="pencil"></i>修改</a></div>
                                <div className="right"><a href="/Handler/User.ashx?action=logout"><i className="loginOut"></i>退出</a></div>
                                <div className="clear"></div>
                            </div>
                        </div>
                        <i className="down_icon"></i>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="right">
                    <a href="/user/myCollection.aspx">
                        <div className="left item_dv">
                            <i className="item_logo house"></i>
                            <h5>我的关注校</h5>
                            <i className="down_icon"></i>
                        </div>
                    </a>
                    <a href="/user/intentSchool.aspx">
                        <div className="left item_dv">
                            <i className="item_logo Intention"></i>
                            <h5>我的办理校</h5>
                            <i className="down_icon"></i>
                        </div>
                    </a>
                    <a href="/user/letter.aspx">
                        <div className="left item_dv ">
                            <i className="item_logo letter"></i>
                            <h5>我的站内信</h5>
                            <i className="down_icon"></i>
                        </div>
                    </a>
                    <a href="/user/modifyPassword.aspx">
                        <div className="left item_dv theLast">
                            <i className="item_logo changePwd"></i>
                            <h5>密码修改</h5>
                            <i className="down_icon"></i>
                        </div>
                    </a>
                    <div className="clear"></div>
                </div>
                <div className="clear"></div>               
            </div>
        );
    }
    
}

export default Header;
