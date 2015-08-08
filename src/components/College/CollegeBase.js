/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery';
import College from './College/College.js';

require('rc-pagination/assets/index.css')
require('rc-select/assets/index.css')
var Pagination = require('rc-pagination')
var Select=require('rc-select');
var Pagination = require('rc-pagination');

class CollegeBase extends React.Component{	
    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {pageIndex:1,country:"USA",list:{},totalCount:0,fildList:new Array(),school:"高中"};
    }
    onChangeFun(key){
        //console.log(key);
        console.log(this);
        console.log(this.props);
        this.submitSearch(key,"","","","");
    }

    render() {
	    let title = '院校库 - 人人留学';
	    this.context.onSetTitle(title);

        return (
            <div>
                <College />
                <Pagination
                    selectComponentClass={Select}
                    showQuickJumper={true} showSizeChanger={true} onChange={this.onChangeFun.bind(this)} total="1000"/>
            </div>
        );
    }

    componentDidMount(){
        
    }
    
}

export default CollegeBase;
