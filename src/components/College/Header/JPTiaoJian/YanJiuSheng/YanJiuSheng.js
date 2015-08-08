/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from '../../../../WebResources/Default/css/select.less';
import withStyles from '../../../../../decorators/withStyles';

var Select = require('rc-select');
var Option = Select.Option;

import $ from 'jquery';

@withStyles(styles)
class YanJiuSheng{
    render() {
        return (
            <div className="college-filter-box university">
                <div className="college-filter-options" data-group="SubjectProfessional">
                    <div className="title">专业搜索：</div>
                    <ul className="college-filter-list">
                        <li className="input">
                            <input data-name="ResearchmentDepartment" placeholder="学系" type="text" />
                            <em></em>
                            <input data-name="SubjectProfessional" placeholder="科目/专业" type="text" />
                            <button type="button" className="button-confirm">确定</button>
                        </li>
                    </ul>
                </div>
                <div className="college-filter-options more" data-group="Position">
                    <div className="title">所在地区：</div>
                    <ul className="college-filter-list">
                        <li className="all active" data-value=""><a className="nofollow">全部</a></li>
                        <li data-value="1"><a className="nofollow"><i></i>北海道</a></li>
                        <li data-value="2"><a className="nofollow"><i></i>青森</a></li>
                        <li data-value="5"><a className="nofollow"><i></i>秋田</a></li>
                        <li data-value="3"><a className="nofollow"><i></i>岩手</a></li>
                        <li data-value="6"><a className="nofollow"><i></i>山形</a></li>
                        <li data-value="4"><a className="nofollow"><i></i>宫城</a></li>
                        <li data-value="7"><a className="nofollow"><i></i>福岛</a></li>
                        <li data-value="8"><a className="nofollow"><i></i>茨城</a></li>
                        <li data-value="9"><a className="nofollow"><i></i>栃木</a></li>
                        <li data-value="10"><a className="nofollow"><i></i>群马</a></li>
                        <li data-value="14"><a className="nofollow"><i></i>神奈川</a></li>
                        <li data-value="13"><a className="nofollow"><i></i>东京</a></li>
                        <li data-value="12"><a className="nofollow"><i></i>千叶</a></li>
                        <li data-value="11"><a className="nofollow"><i></i>崎玉</a></li>
                        <li data-value="15"><a className="nofollow"><i></i>新泻</a></li>
                        <li data-value="16"><a className="nofollow"><i></i>富山</a></li>
                        <li data-value="17"><a className="nofollow"><i></i>石川</a></li>
                        <li data-value="18"><a className="nofollow"><i></i>福井</a></li>
                        <li data-value="19"><a className="nofollow"><i></i>山梨</a></li>
                        <li data-value="20"><a className="nofollow"><i></i>长野</a></li>
                        <li data-value="21"><a className="nofollow"><i></i>岐阜</a></li>
                        <li data-value="22"><a className="nofollow"><i></i>静冈</a></li>
                        <li data-value="23"><a className="nofollow"><i></i>爱知</a></li>
                        <li data-value="24"><a className="nofollow"><i></i>三重</a></li>
                        <li data-value="25"><a className="nofollow"><i></i>滋贺</a></li>
                        <li data-value="26"><a className="nofollow"><i></i>京都府</a></li>
                        <li data-value="27"><a className="nofollow"><i></i>大阪府</a></li>
                        <li data-value="28"><a className="nofollow"><i></i>兵库</a></li>
                        <li data-value="29"><a className="nofollow"><i></i>奈良</a></li>
                        <li data-value="30"><a className="nofollow"><i></i>和歌山</a></li>
                        <li data-value="31"><a className="nofollow"><i></i>鸟取</a></li>
                        <li data-value="32"><a className="nofollow"><i></i>岛根</a></li>
                        <li data-value="33"><a className="nofollow"><i></i>冈山</a></li>
                        <li data-value="34"><a className="nofollow"><i></i>广岛</a></li>
                        <li data-value="35"><a className="nofollow"><i></i>山口</a></li>
                        <li data-value="36"><a className="nofollow"><i></i>德岛</a></li>
                        <li data-value="37"><a className="nofollow"><i></i>香川</a></li>
                        <li data-value="38"><a className="nofollow"><i></i>爱媛</a></li>
                        <li data-value="39"><a className="nofollow"><i></i>高知</a></li>
                        <li data-value="40"><a className="nofollow"><i></i>福冈</a></li>
                        <li data-value="41"><a className="nofollow"><i></i>佐贺</a></li>
                        <li data-value="42"><a className="nofollow"><i></i>长崎</a></li>
                        <li data-value="43"><a className="nofollow"><i></i>熊本</a></li>
                        <li data-value="44"><a className="nofollow"><i></i>大分</a></li>
                        <li data-value="45"><a className="nofollow"><i></i>宫崎</a></li>
                        <li data-value="46"><a className="nofollow"><i></i>鹿儿岛</a></li>
                        <li data-value="47"><a className="nofollow"><i></i>冲绳</a></li>

                    </ul>
                    <div className="college-filter-ext">
                        <a className="college-options-more"></a>
                    </div>
                </div>
                <div className="college-filter-options" data-group="Classes">
                    <div className="title">大学类别：</div>
                    <ul className="college-filter-list">
                        <li className="all active" data-value=""><a className="nofollow">全部</a></li>
                        <li data-value="1"><a className="nofollow"><i></i>国立</a></li>
                        <li data-value="2"><a className="nofollow"><i></i>公立</a></li>
                        <li data-value="3"><a className="nofollow"><i></i>私立</a></li>
                    </ul>
                    <div className="college-filter-btns">
                        <button type="button" className="button-normal filter-btns-confirm">确定</button>
                        <button type="button" className="button-line filter-btns-cancel">取消</button>
                    </div>
                    <div className="college-filter-ext">
                        <a className="college-options-multiple">+多选</a>
                    </div>
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
        $(".college-filter-ext").click(function(){
            if($(this).find("a").hasClass("up")){
                $(this).find("a").removeClass("up");
                $(this).parent().removeClass("show");
            }else{
                $(this).find("a").addClass("up");
                $(this).parent().addClass("show");
            }
        });
        
    }
}

export default YanJiuSheng;
