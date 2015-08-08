/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';

import $ from 'jquery';
import TabsOne from './TabsOne/TabsOne.js';
import TabsTwo from './TabsTwo/TabsTwo.js';
import TabsThree from './TabsThree/TabsThree.js';

class Data extends React.Component{
    constructor(props) {
        super(props);
        this.state =
        {
            json:props.json,
            tab:'学校介绍'
        };

        console.log(this.state);
    }    
    render() {
        return (
            <div className="tabs-box tabs-line">
                <div id="div_tabs" className="tabs">
                    <div className={this.state.tab == "学校介绍" ? "item selected" : "item"} data-content="#tabContent1" onClick={this.openTabsOne.bind(this)}>{this.props.json[0].TypeMsg}</div>
                    <div className={this.state.tab == "基本数据" ? "item selected" : "item"} data-content="#tabContent2" onClick={this.openTabsTwo.bind(this)}>{this.props.json[1].TypeMsg}</div>                            
                    <div className={this.state.tab == "专业介绍" ? "item selected" : "item"} data-content="#tabContent3" onClick={this.openTabsThree.bind(this)}>{this.props.json[2].TypeMsg}</div>
                </div>
                <div id="tabContent1-Content-Data" className="tab-content"></div>
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){
        React.render(<TabsOne Content={this.props.json[0].Content} />, document.getElementById('tabContent1-Content-Data'));
    }
    openTabsOne(e){
        this.setState({tab:e.target.innerHTML});
        React.render(<TabsOne Content={this.props.json[0].Content} />, document.getElementById('tabContent1-Content-Data'));
    }
    openTabsTwo(e){
        this.setState({tab:e.target.innerHTML});
        React.render(<TabsTwo Content={this.props.json[1].Content} />, document.getElementById('tabContent1-Content-Data'));
    }
    openTabsThree(e){
        this.setState({tab:e.target.innerHTML});
        console.log(this.props);
        React.render(<TabsThree Content={this.props.json[2].Content} />, document.getElementById('tabContent1-Content-Data'));
    }
}

export default Data;
