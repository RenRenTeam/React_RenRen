/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Myinfo.less';
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery'

@withStyles(styles)
class MyInfo {
    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {

        let title = '个人中心－人人留学';
        this.context.onSetTitle(title);
        return (
            <div className="personal-center">
                <div className="tabs-box tabs-line">
                    <div className="tabs">
                        <div className="item selected" data-content="#myInfo">个人信息</div>
                        <div className="item" data-content="#baseInfo">基本信息</div>
                        <div className="item" data-content="#education">教育背景</div>
                        <div className="item" data-content="#uploadFile">上传资料</div>
                        <div className="clear"></div>
                    </div>
                    <div className="tab-content">
                        <div id="myInfo" className="tab-content-box">
                            <dl className="info_form clearfix">
                                <dd className="dv_tt">
                                    <h5>用户名</h5>
                                </dd>
                                <dd>
                                    <h5 id="h5_userName">RRLiuxue</h5>
                                </dd>
                            </dl>
                            <dl className="info_form clearfix " id="facePart">
                                <dd className="dv_tt">
                                    <h5>头像</h5>
                                </dd>
                                <dd>
                                    <div className="faceImg_border" >
                                        <div className="border_dv">
                                            <img id="HeadImgBig" src="/WebResources/Default/images/personal-center/faceImg_default.png" width="89" height="73" />
                                        </div>
                                    </div>
                                    <div className="button_blue">
                                        <button className="button-normal">上传新头像</button>
                                    </div>
                                </dd>
                                <dd className="retract_dd retract_dd_up">
                                    <span className="font">收起</span><i className="retract_icon"></i>
                                </dd>
                            </dl>
                            <dl className="info_form clearfix hidepart facePart" flag="facePart">
                                <dd className="dv_tt">
                                    <h5>头像</h5>
                                </dd>
                                <dd >
                                    <img id="HeadImgSmall" width="52px" height="52px" src="/WebResources/Default/images/personal-center/defaultFace.png" /></dd>
                                <dd className="retract_dd retract_dd_down">
                                    <span className="font">修改头像</span><i className="retract_icon"></i>
                                </dd>
                            </dl>
                            <div className="mb_dv" id="mbPart">
                                <div className="dv_title">手机号</div>
                                <div className="left">
                                    <div className="notice-tip clearfix">
                                        <div>
                                            <select className="selectpicker show-menu-arrow form-control">
                                                <option>中国+10086</option>
                                                <option>分类</option>
                                            </select>
                                        </div>
                                        <input type="text" className="mb_input" id="moblieInput" />
                                    </div>
                                    <div className="">
                                        <input type="text" id="phone_code" className="mb_input yzm_input" />
                                        <button id="get_phoneCode" className="btn-yzm button-line">获取验证码</button>
                                    </div>

                                    <div>
                                        <button className="btn-confirm button-normal infoMes" id="infoMes">确认</button>
                                        <button className="btn-close button-normal mb-close-dv">关闭</button>
                                    </div>
                                </div>

                                <div className="retract_dd right retract_dd_up infoMes">
                                    <span className="font">收起</span><i className="retract_icon"></i>
                                </div>

                                <div className="clear"></div>
                            </div>
                            <div className="mb_dv hidepart hidepart mbPart" id="mbPartDown" flag="mbPart">
                                <div className="dv_title">手机号</div>
                                <div className="left">
                                    <font id="quhao">0086</font>-<font id="phNum"></font>
                                </div>

                                <div className="retract_dd right retract_dd_down">
                                    <span className="font">修改手机</span><i className="retract_icon"></i>
                                </div>

                                <div className="clear"></div>
                            </div>
                            <div className="email_dv" id="emailPart">
                                <div className="dv_title">邮箱</div>
                                <div className="left">
                                    <div className="email-notice">
                                        <input type="text" className="email_input" placeholder="邮箱帐号" />
                                        <button id="SendEmail" className="btn-email button-line">发送验证邮件</button>
                                    </div>
                                    <div>
                                        <button className="btn-close button-normal close-emaildv">关闭</button>
                                    </div>
                                </div>
                                <div className="retract_dd right retract_dd_up">
                                    <span className="font">收起</span><i className="retract_icon"></i>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="mb_dv hidepart emailPart" flag="emailPart">
                                <div className="dv_title">邮箱</div>
                                <div className="left">
                                    是你找回登录密码的方式之一，建议验证邮箱
                                </div>

                                <div className="retract_dd right retract_dd_down">
                                    <span className="font">验证邮箱</span><i className="retract_icon"></i>
                                </div>

                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default MyInfo;
