/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './UserHeader.less';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery'
import UpdataInfo from '../UpdataInfo/UpdataInfo.js';
import ModifyPwd from '../ModifyPwd/ModifyPwd.js';
import MyCollection from '../MyCollection/MyCollection.js';
import IntentSchool from '../IntentSchool/IntentSchool.js';
import Letter from '../Letter/Letter.js';

@withStyles(styles)
class UserHeader {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        let title = '个人中心－人人留学';
        this.context.onSetTitle(title);
        return (
            <div>
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
                                    <div className="left" id="goToUpdate"><span onClick={this.updataInfo}><i className="pencil"></i>修改</span></div>
                                    <div className="right"><a href="/Handler/User.ashx?action=logout"><i className="loginOut"></i>退出</a></div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                            <i className="down_icon"></i>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="right" id="infoHeader">
                        <span onClick={this.myCollection}>
                            <div className="left item_dv">
                                <i className="item_logo house"></i>
                                <h5>我的关注校</h5>
                                <i className="down_icon"></i>
                            </div>
                        </span>
                        <span onClick={this.intentSchool}>
                            <div className="left item_dv">
                                <i className="item_logo Intention"></i>
                                <h5>我的办理校</h5>
                                <i className="down_icon"></i>
                            </div>
                        </span>
                        <span onClick={this.letter}>
                            <div className="left item_dv" >
                                <i className="item_logo letter"></i>
                                <h5>我的站内信</h5>
                                <i className="down_icon"></i>
                            </div>
                        </span>
                        <span onClick={this.modifyPwd}>
                            <div className="left item_dv theLast" >
                                <i className="item_logo changePwd"></i>
                                <h5>密码修改</h5>
                                <i className="down_icon"></i>
                            </div>
                        </span>
                        <div className="clear"></div>
                    </div>
                    <div className="clear"></div>               
                </div>
                <div id="tabContentUserIndex"></div>
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){

        React.render(<UpdataInfo />, document.getElementById('tabContentUserIndex'));

        $("#infoHeader .item_dv").click(function(){
            $("#infoHeader .item_dv").removeClass("item_active_dv");
            $(this).addClass("item_active_dv");
        });

        $("#goToUpdate").click(function(){
            
            $("#infoHeader .item_dv").removeClass("item_active_dv");
        });
    }
    updataInfo(){
        React.render(<UpdataInfo />, document.getElementById('tabContentUserIndex'));
    }
    modifyPwd(){
        React.render(<ModifyPwd />, document.getElementById('tabContentUserIndex'));
    }
    myCollection(){
        React.render(<MyCollection />, document.getElementById('tabContentUserIndex'));
    }
    intentSchool(){
        React.render(<IntentSchool />, document.getElementById('tabContentUserIndex'));
    }
    letter(){
        React.render(<Letter />, document.getElementById('tabContentUserIndex'));
    }
}

export default UserHeader;
