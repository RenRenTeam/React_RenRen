/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from '../../../../WebResources/Default/css/select.less';
import withStyles from '../../../../../decorators/withStyles';
import $ from 'jquery'

var Select = require('rc-select');
var Option = Select.Option;

@withStyles(styles)
class University extends React.Component{
    constructor(props) {
        super(props);
        this.state = {Area:'全部',Ranks:'全部',Major:null,MajorB:null};
    }
    changeArea(e){
        this.setState({
            Area:e.target.innerHTML
        });
        this.props.submitSearch('USA','Area',e.target.innerHTML);
    }
    changeRanks(e){
        this.setState({
            Ranks:e.target.innerHTML
        });
        
        this.props.submitSearch('USA','Ranks',e.target.innerHTML);
    }
    //获取专业信息
    getMajor(type){
        console.log(type)
        $.ajax({
            url: "http://service.rrliuxue.com/University_USAService/LoadUniversity_USAMajorForJs/" + type,
            type: "get",
            dataType: "jsonp",
            async: false,
            jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)       
            jsonpCallback: "success_jsonpCallback_major",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
        }).done(function (json) {
            console.log("json")
        }.bind(this));
    }
    render() {

        return (
            <div className="college-filter-box university">
                <div className="college-filter-options" data-group="Area">
                    <div className="title">所在地区：</div>
                    <ul className="college-filter-list">
                        <li className={this.state.Area=="全部" ? "all active" : "all"} data-value="" ><a className="nofollow" onClick={this.changeArea.bind(this)}>全部</a></li>
                        <li className={this.state.Area=="西北地区" ? "active" : ""}  data-value="西北地区"><a className="nofollow" onClick={this.changeArea.bind(this)}><i></i>西北地区</a></li>
                        <li className={this.state.Area=="加州、内华达州" ? "active" : ""} data-value="加州、内华达州"><a className="nofollow" onClick={this.changeArea.bind(this)}><i></i>加州、内华达州</a></li>
                        <li className={this.state.Area=="西南地区" ? "active" : ""} data-value="西南地区"><a className="nofollow" onClick={this.changeArea.bind(this)}><i></i>西南地区</a></li>
                        <li className={this.state.Area=="五大湖地区" ? "active" : ""} data-value="五大湖地区"><a className="nofollow" onClick={this.changeArea.bind(this)}><i></i>五大湖地区</a></li>
                        <li className={this.state.Area=="大平原地区" ? "active" : ""} data-value="大平原地区"><a className="nofollow" onClick={this.changeArea.bind(this)}><i></i>大平原地区</a></li>
                        <li className={this.state.Area=="密西西比河流域" ? "active" : ""} data-value="密西西比河流域"><a className="nofollow" onClick={this.changeArea.bind(this)}><i></i>密西西比河流域</a></li>
                        <li className={this.state.Area=="东北地区" ? "active" : ""} data-value="东北地区"><a className="nofollow" onClick={this.changeArea.bind(this)}><i></i>东北地区</a></li>
                        <li className={this.state.Area=="东南地区" ? "active" : ""} data-value="东南地区"><a className="nofollow" onClick={this.changeArea.bind(this)}><i></i>东南地区</a></li>
                    </ul>
                </div>
                <div className="college-filter-options" data-group="综合排名">
                    <div className="title">综合排名：</div>
                    <ul className="college-filter-list">
                        <li className={this.state.Ranks=="全部" ? "all active" : "all"} data-value="all"><a className="nofollow" onClick={this.changeRanks.bind(this)}>全部</a></li>
                        <li className={this.state.Ranks=="1-10名" ? "active" : ""} data-value="1-10名"><a className="nofollow" onClick={this.changeRanks.bind(this)}><i></i>1-10名</a></li>
                        <li className={this.state.Ranks=="10-20名" ? "active" : ""} data-value="10-20名"><a className="nofollow" onClick={this.changeRanks.bind(this)}><i></i>10-20名</a></li>
                        <li className={this.state.Ranks=="20-50名" ? "active" : ""} data-value="20-50名"><a className="nofollow" onClick={this.changeRanks.bind(this)}><i></i>20-50名</a></li>
                        <li className={this.state.Ranks=="50-100名" ? "active" : ""} data-value="50-100名"><a className="nofollow" onClick={this.changeRanks.bind(this)}><i></i>50-100名</a></li>
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

        this.getMajor(0);
    }
}

export default University;

University.defaultPro