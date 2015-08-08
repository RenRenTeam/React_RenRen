/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';
import High from './High/High.js';
import YanJiuSheng from './YanJiuSheng/YanJiuSheng.js';

require('rc-radio/assets/index.css');
var Radio = require('rc-radio');

class JPTiaoJian extends React.Component{
    constructor(props) {
        super(props);
        this.state = {disabled: false,
                      checked: null,
                      r: '3'};
    }
    radHandleChange(e) {
        this.setState({
          r: e.target.value
        })

        var school;
        if(e.target.value == 0){
            school="大学";
        }else if(e.target.value == 1){
            school="研究生院";
        }else if(e.target.value == 2){
            school="语言学校";
        }else if(e.target.value == 3){
            school="高中";
        }
        this.props.submitSearch(1,"JP","","",school);

    }
    render() {
        return (
            <div id="JP" className="college-filter-content tab-content-box">
                <div className="college-level-box">
                    <div className="college-level">
                        <Radio value="0" name="radio_JP"
                              checked = {this.state.r === '0'}
                              onChange={this.radHandleChange.bind(this)}
                              disabled={this.state.disabled}/>
                        <label>日本大学</label>
                    </div>
                    <div className="college-level">
                        <Radio value="1" name="radio_JP"
                              checked = {this.state.r === '1'}
                              onChange={this.radHandleChange.bind(this)}
                              disabled={this.state.disabled}/>
                        <label>研究生院</label>
                    </div>
                    <div className="college-level">
                        <Radio value="2" name="radio_JP"
                              checked = {this.state.r === '2'}
                              onChange={this.radHandleChange.bind(this)}
                              disabled={this.state.disabled}/>
                        <label>语言学校</label>
                    </div>
                    <div className="college-level">
                        <Radio value="3" name="radio_JP"
                              checked = {this.state.r === '3'}
                              onChange={this.radHandleChange.bind(this)}
                              disabled={this.state.disabled}/>
                        <label>日本高中</label>
                    </div>
                </div>
                <div id="JPSChool">
                    <div className={this.state.r == 2 ? "" : "inputHide"}></div>
                    <div className={this.state.r == 3 ? "" : "inputHide"}></div>
                    <div className={this.state.r == 0 ? "" : "inputHide"}><High submitSearch={this.props.submitSearch}/></div>
                    <div className={this.state.r == 1 ? "" : "inputHide"}><YanJiuSheng submitSearch={this.props.submitSearch}/></div>
                </div>
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){
    }
}

export default JPTiaoJian;
