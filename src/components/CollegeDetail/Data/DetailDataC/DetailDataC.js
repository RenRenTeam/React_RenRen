/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from '../Data.less';
import withStyles from '../../../../decorators/withStyles';
import LeftBox from '../LeftBox/LeftBox.js';
import RightPart from '../RightPart/RightPart.js';
import $ from 'jquery';

@withStyles(styles)
class DetailDataC{

    render() {
        return (
            <div>
                <section className="college-info">
                    <h1 id="h_name">
                        <span className="chName">{this.props.json.Name}</span>
                        <span className="hr">|</span>
                        <span>{this.props.json.EnglishName}</span>
                    </h1>
                    <div className="college-box">
                        <div id="div_university" className="info">
                            <div className="logo-box">
                                <div className="logo">
                                    <img src={this.props.json.logo2} />
                                </div>
                                <div className="text">
                                    <div className="ch">{this.props.json.Name}</div>
                                    <div className="en">{this.props.json.EnglishName}</div>
                                </div>
                            </div>
                            <div className="description">
                                <div className="desc">学校类型：<span className="type">{this.props.json.content.classes}</span>建校时间：<span>{this.props.json.content.JianXiaoShiJian}</span></div>
                                <div className="other">
                                    <div className="like">{this.props.json.content.xiangqu}</div>
                                    <div className="position">{this.props.json.content.SuoZaiChengShi}</div>
                                    <div className="clear"></div>
                                </div>
                                <div className="compare">
                                    <button id="btnAddCompare" className="add-compare button-line red" data-schoolid="1" data-schoolname="新希望学校" data-schoolenname="New Hope Academy" data-schoolpic="WebResources/Default/images/college/college-logo.png">添加对比</button>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="action">
                            <a href="/college-testFrom.aspx"><button className="button-line">免费申请</button></a>
                            <br />
                            <a href="/college-testFrom.aspx">测试录取几率</a>
                        </div>
                        <div className="clear"></div>
                    </div>
                </section>
                <section className="college-description">
                    <LeftBox />
                    <RightPart />
                    <div className="clear"></div>
                </section>
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){

        

    }
}

export default DetailDataC;
