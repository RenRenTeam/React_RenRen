/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
var Select = require('rc-select');
var Option = Select.Option;
import styles from './UpdataInfo.less';
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery'
import Myinfo from './MyInfo/MyInfo.js'
import BaseInfo from './BaseInfo/BaseInfo.js'
import Education from './Education/Education.js'


@withStyles(styles)
class UpdataInfo {

    render() {
        return (
            <div className="personal-center">
                <div className="tabs-box tabs-line">
                    <div className="tabs">
                        <div className="item selected" data-content="#myInfo" onClick={this.updataInfo}>个人信息</div>
                        <div className="item" data-content="#baseInfo" onClick={this.openBaseInfo}>基本信息</div>
                        <div className="item" data-content="#education" onClick={this.Education}>教育背景</div>
                        <div className="item" data-content="#uploadFile">上传资料</div>
                        <div className="clear"></div>
                    </div>
                    <div className="tab-content" id="tabContentMyinfo"></div>
                </div>
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){

        $(document).ready(function(){

            React.render(<Myinfo />, document.getElementById('tabContentMyinfo'));

            $(".tabs .item").click(function(){
                $(this).addClass("selected").siblings().removeClass("selected");
            });
        });

    }
    updataInfo(){
        React.render(<Myinfo />, document.getElementById('tabContentMyinfo'));
    }
    openBaseInfo(){
        React.render(<BaseInfo />, document.getElementById('tabContentMyinfo'));
    }
    Education(){
        React.render(<Education />, document.getElementById('tabContentMyinfo'));
    }
}

export default UpdataInfo;
