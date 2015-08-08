/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './College.less';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery'
import Header from '../Header/Header.js'
import List from '../List/List.js';

require('rc-pagination/assets/index.css')
require('rc-select/assets/index.css')
var Pagination = require('rc-pagination')
var Select=require('rc-select');
var Pagination = require('rc-pagination');
@withStyles(styles)
class College extends React.Component{	
    constructor(props) {
        super(props);
        this.state = {pageIndex:1,country:"USA",list:{},totalCount:0,fildList:new Array(),school:"高中"};
    }
      //搜索事件
    submitSearch(pageIndex,country,fildName,fildValue,school){
        
        var val="";
        var str="";
        var type;
        this.state.fildList = new Array();

        if(school && school != "undefined"){

            type = school;

            this.state.school = school;

            this.state.fildList = new Array();

        }
        if(country && country != "undefined"){

            this.state.country = country;

        }
        if(pageIndex && pageIndex != "undefined"){

            this.state.pageIndex = pageIndex;

        }

        pageIndex = this.state.pageIndex;

        type = this.state.school;

        country = this.state.country;

        if(fildName && fildName != "undefined"){

            var isExists = false;
            for (var i = 0; i < this.state.fildList.length; i++) {
                if(this.state.fildList[i].name == fildName)
                {
                    isExists = true;

                    this.state.fildList[i].value = fildValue;

                }
            };
            if(!isExists)
            {
                this.state.fildList.push({name:fildName,value:fildValue});
            }
        } 

        var str = "";


        var val = $("#txtSearch").val();

        for (var i = 0; i < this.state.fildList.length; i++) {
               str += ";"+this.state.fildList[i].name +"="+this.state.fildList[i].value;
        }


        $.ajax({
            url: "http://service.rrliuxue.com/UniversitySearchNodeJsService/UniversitySearch/Country="+country+";Type="+type+";PageIndex="+pageIndex+";PageSize=15;Name="+val+str+"",
            type: "get",
            dataType: "jsonp",
            async: false,
            jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
            jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名            
        }).done(function (json) {
            console.log("城市"+country+",type"+type+",val"+val+",条件"+str);
            document.getElementById("listOfCollege").innerHTML = "";
            if(json && json.length >= 1){
                //React.render(<List data={json} />,document.getElementById('listOfCollege'));
                this.setState({list:json,totalCount:json[0].TotalCount});
            }else{
                this.setState({list:"",totalCount:0});
                //this.setState({totalCount:0});
                return false;
            }
        }.bind(this));
    }
    onChangeFun(key){
        //console.log(key);
        console.log(this);
        console.log(this.props);
        this.submitSearch(key,"","","","");
    }

    render() {
        return (
            <div>
                <div className="collegeHeader-Node">
                    <section className="plan">
                        <a href="/college-recommend.aspx">
                            <img src="http://new.rrliuxue.com/WebResources/Default/images/plan.jpg" /></a>
                        <div className="action">
                            <a href="/college-recommend.aspx">我要方案</a>
                        </div>
                        <div className="clear"></div>
                    </section>
                    <Header country="美国" submitSearch={this.submitSearch.bind(this)}/>
                    <div id="listOfCollege"></div>

                    <div className="list-box">
                        <div className="title" id="div_PageCount">共检索到 &nbsp;{this.state.totalCount}&nbsp; 所学校</div>
                        <div id="div_SchoolList">
                            <div className="school_lb">
                                <List DataSource={this.state.list} submitSearch={this.submitSearch.bind(this)}/>                                
                                
                            </div>
                        </div>
                    </div>
            </div>
        );
    }

    componentDidMount(){
    }
    
}

export default College;
