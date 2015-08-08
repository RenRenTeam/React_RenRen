/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import High from './High/High.js';
import University from './University/University.js';
import $ from 'jquery'

require('rc-radio/assets/index.css');
var Radio = require('rc-radio');


class UKTiaoJian extends React.Component {
    constructor(props) {
        super(props);
        this.state = {disabled: false,
                      checked: null,
                      r: '2'};
    }
    radHandleChange(e) {
        this.setState({
          r: e.target.value
        });

        var school;
        if(e.target.value == 2){
            school="高中";
        }else{
            school="大学";
        }
        this.props.submitSearch(1,"","","",school);
    }
    render() {
        return (
            <div id="UK" className="college-filter-content tab-content-box">
                <div className="college-level-box">
                    <div className="college-level">
                        <Radio value="2" name="radio_UK"
                              checked = {this.state.r === '2'}
                              onChange={this.radHandleChange.bind(this)}
                              disabled={this.state.disabled}/>
                        <label>高中</label>
                    </div>
                    <div className="college-level">
                        <Radio value="3" name="radio_UK"
                              checked = {this.state.r === '3'}
                              onChange={this.radHandleChange.bind(this)}
                              disabled={this.state.disabled}/>
                        <label>大学</label>
                    </div>
                </div>
                <div id="UKSChool">
                    <div className={this.state.r == 2 ? "" : "inputHide"}><High submitSearch={this.props.submitSearch}/></div>
                    <div className={this.state.r == 3 ? "" : "inputHide"}><University submitSearch={this.props.submitSearch}/></div>
                </div>
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){

        $("#moreUK").click(function(){
            if($(this).find(".i").hasClass("up")){
                $("#UK .filter-hide-UK").hide();
                $(this).find(".i").removeClass("up");
            }else{
                $("#UK .filter-hide-UK").show();
                $(this).find(".i").addClass("up");
            }
        });

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
    //dom加载完调用
    componentDidMount(){
        
    }
}

export default UKTiaoJian;
