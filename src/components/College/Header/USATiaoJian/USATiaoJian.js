/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import High from './High/High.js';
import University from './University/University.js';

require('rc-radio/assets/index.css');
var Radio = require('rc-radio');

class USATiaoJian extends React.Component{
    constructor(props) {
        super(props);
        this.state = {disabled: false,
                      checked: null,
                      r: '0'};
    }
    //高中大学切换事件
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
        //this.setState(school:school);

        this.props.submitSearch(1,"USA","","",school);

    }
    render() {
        return (
            <div id="USA" className="college-filter-content tab-content-box">
                <div className="college-level-box">
                    <div className="college-level">
                        <Radio value="0" name="radio_USA"
                              checked = {this.state.r === '0'}
                              onChange={this.radHandleChange.bind(this)}
                              disabled={this.state.disabled}/>
                        <label>高中</label>
                    </div>
                    <div className="college-level">
                        <Radio value="1" name="radio_USA"
                              checked = {this.state.r === '1'}
                              onChange={this.radHandleChange.bind(this)}
                              disabled={this.state.disabled}/>
                        <label>大学</label>
                    </div>
                </div>
                <div id="USASChool">
                    <div className={this.state.r == 0 ? "" : "inputHide"}><High submitSearch={this.props.submitSearch}/></div>
                    <div className={this.state.r == 1 ? "" : "inputHide"}><University submitSearch={this.props.submitSearch}/></div>
                </div>
                <section className="college-list">
                    
                </section>
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){
        this.props.submitSearch();

    }
}

export default USATiaoJian;
