/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery'

require('rc-radio/assets/index.css');
var Radio = require('rc-radio');

class USATiaoJian extends React.Component{
    constructor(props) {
        super(props);
        this.state = {disabled: false,
                      checked: null,
                      r: '0'};
    }
    radHandleChange(e) {
        this.setState({
          r: e.target.value
        });

        var school;
        if(e.target.value == 0){
            school="高中";
        }else{
            school="大学";
        }
        this.props.submitSearch(1,"AUS","","",school);
    }
    render() {
        return (
            <div id="USA" className="college-filter-content tab-content-box">
                <div className="college-level-box">
                    <div className="college-level">
                        <Radio value="0" name="radio_SC"
                              checked = {this.state.r === '0'}
                              onChange={this.radHandleChange.bind(this)}
                              disabled={this.state.disabled}/>
                        <label>高中</label>
                    </div>
                    <div className="college-level">
                        <Radio value="1" name="radio_SC"
                              checked = {this.state.r === '1'}
                              onChange={this.radHandleChange.bind(this)}
                              disabled={this.state.disabled}/>
                        <label>大学</label>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default USATiaoJian;
