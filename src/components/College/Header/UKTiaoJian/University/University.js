/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from '../../../../WebResources/Default/css/select.less';
import withStyles from '../../../../../decorators/withStyles';

var Select = require('rc-select');
var Option = Select.Option;

import $ from 'jquery';

@withStyles(styles)
class University{
    render() {
        return (
            <div className="college-filter-box university">
                <div className="college-filter-options" data-group="Area">
                    <div className="title">所在地区：</div>
                    <ul className="college-filter-list">
                        <li className="all active" data-value=""><a className="nofollow">全部</a></li>
                        <li data-value="北爱尔兰"><a className="nofollow"><i></i>北爱尔兰</a></li>
                        <li data-value="威尔士"><a className="nofollow"><i></i>威尔士</a></li>
                        <li data-value="苏格兰"><a className="nofollow"><i></i>苏格兰</a></li>
                        <li data-value="英格兰"><a className="nofollow"><i></i>英格兰</a></li>
                    </ul>
                </div>
                <div className="college-filter-options" data-group="综合排名">
                    <div className="title">综合排名：</div>
                    <ul className="college-filter-list">
                        <li className="all active" data-value="all"><a className="nofollow">全部</a></li>
                        <li data-value="1-10名"><a className="nofollow"><i></i>1-10名</a></li>
                        <li data-value="10-20名"><a className="nofollow"><i></i>10-20名</a></li>
                        <li data-value="20-50名"><a className="nofollow"><i></i>20-50名</a></li>
                        <li data-value="50-100名"><a className="nofollow"><i></i>50-100名</a></li>
                        <li className="input">
                            <input className="number" data-name="start" type="text" />
                            <em>-</em>
                            <input className="number" data-name="end" type="text" />
                            <button type="button" className="button-confirm">确定</button>
                        </li>
                    </ul>
                </div>
                <div className="college-filter-options" data-group="subrankG">
                    <div className="title">专业排名：</div>
                    <ul className="college-filter-list">
                        <li className="select">
                            <div className="control">
                                <Select  id="USA_MajorRanksA" value="计划出国时间" style={{width:150,height:25}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChange}>
                                  <Option value="计划出国时间" desc="计划出国时间">计划出国时间</Option>
                                  <Option value="2015" desc="2015 ">2015</Option>
                                  <Option value="2014" desc="2014">2014</Option>
                                  <Option value="2013" desc="2013">2013</Option>
                                </Select>
                            </div>
                            <div className="control" id="div_ranks">
                                <Select  id="USA_MajorRanksB" value="计划出国时间" style={{width:150,height:25}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChange}>
                                  <Option value="计划出国时间" desc="计划出国时间">计划出国时间</Option>
                                  <Option value="2015" desc="2015 ">2015</Option>
                                  <Option value="2014" desc="2014">2014</Option>
                                  <Option value="2013" desc="2013">2013</Option>
                                </Select>
                            </div>
                            <div className="control">
                                <button type="button" className="button-confirm">确定</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){

        $(".college-filter-list li a").click(function(){
            var li = $(this).parent();
            var ul = li.parent();

            //去掉bootstrip-select 干扰
            if (!ul.is(".dropdown-menu")) {
                var optionsbox = $(this).parents(".college-filter-options");
                if (optionsbox.is(".multiple")) {
                    li.toggleClass("active");
                } else {
                    if (li.is(".active")) {
                        return false;
                    }
                    ul.find("li").removeClass("active");
                    li.addClass("active");
                }
                return true;
            }


        });
    }
}

export default University;
