/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
var Select = require('rc-select');
var Option = Select.Option;
import styles from './ModifyPwd.less';
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery'


@withStyles(styles)
class ModifyPwd {
    render() {        
        return (
            <div className="myPwd clearfix" id="modifyBox">
                <form action="#" method="post" id="modifyForm" autocomplete="off">
                    <div className="tabs-box tabs-line">
                        <div className="tabs">
                            <div className="item selected"><h4 className="itemh4">密码修改</h4></div>
                            <div className="clear"></div>
                        </div>
                        <div className="tab-content">
                            <div className="form_dd">
                                <dl className="clearfix">
                                    <dd className="titile">原始密码</dd>
                                    <dd><input type="password" id="oldPwd" /></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dd className="titile">新密码</dd>
                                    <dd><input type="password" id="newPwd" /></dd>
                                </dl>
                                <dl className="clearfix">
                                    <dd className="titile">重复密码</dd>
                                    <dd><input type="password" id="confirmdPwd" /></dd>
                                </dl>
                                <div id="div_result"></div>
                                <div className="btn">
                                    <div>
                                        <button type="submit" className="button-normal">保&nbsp;存</button>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>    
        );
    }
    //dom加载完调用
    componentDidMount(){
        
    }
}

export default ModifyPwd;
