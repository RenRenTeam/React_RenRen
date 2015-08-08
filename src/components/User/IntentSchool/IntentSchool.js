/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
var Select = require('rc-select');
var Option = Select.Option;
import styles from './IntentSchool.less';
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery'


@withStyles(styles)
class IntentSchool {
    render() {        
        return (
            <div className="myintent">
            <div className="tabs-box tabs-line">
                <div className="tabs">
                    <div className="item selected">
                        <h4>办理校</h4>
                    </div>
                    <div className="clear"></div>
                </div>
                <div id="myTransaction">
                    <ul className="schoolUl tab-content">
                        <li className="noticeTj">
                            根据你的综合评分，你大概可以选择排名前<span>20-50</span>之间的院校，或者与我们的<a href="">咨询老师联系</a>，获得更多推荐校  。
                        </li>
                        <li>
                            <div className="li-maincontent">
                                <div className="logoImg">
                                    <img alt="" src="24995.png" />
                                </div>
                                <div className="mes">
                                    <div><font className="redFont"> 佛罗里达大学</font>｜University of Florida</div>
                                    <div>申请学历：本科预科</div>
                                    <div>
                                        <div className="left">申请进度：2015-07-21 您提交了申请</div>
                                        <div className="moreProgress">更多进度</div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="li-hidePart">
                                <i className="arrow"></i>
                                <div>2015-07-21 您提交了申请</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        );
    }
    //dom加载完调用
    componentDidMount(){
        
        $(".schoolUl").find("li").click(function () {
            if ($(this).find(".li-hidePart").css("display") == "block") {
                $(this).find(".moreProgress").removeClass("arrowDown").text("更多进度");
                $(this).find(".li-hidePart").slideUp(200);
            } else {
                $(".schoolUl").find("li").find(".li-hidePart").hide();
                $(".schoolUl").find("li").find(".moreProgress").removeClass("arrowDown").text("更多进度");
                $(this).find(".moreProgress").addClass("arrowDown").text("收起");
                $(this).find(".li-hidePart").slideDown(200);
            }
        });
    }
}

export default IntentSchool;
