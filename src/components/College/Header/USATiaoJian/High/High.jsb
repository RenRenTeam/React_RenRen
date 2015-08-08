/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery'


class High extends React.Component{
    constructor(props) {
        super(props);
        this.state = {Area:'全部',SchoolNature:'全部',SchoolCharacteristic:'全部',SchoolDormitoryType:'全部',Tuition:'全部',Uniproperty:'全部'};
    }
    changeArea(e){
        this.setState({
            Area:e.target.innerHTML
        });
    }
    changeSchoolNature(e){
        this.setState({
            SchoolNature:e.target.innerHTML
        });
    }
    render() {
        return (
            <div className="college-filter-box high USA-high">
                <div className="college-filter-options" data-group="PlaceArea">
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
                <div className="college-filter-options" data-group="SchoolNature">
                    <div className="title">学校性质：</div>
                    <ul className="college-filter-list">
                        <li className={this.state.SchoolNature=="全部" ? "all active" : "all"} data-value=""><a className="nofollow" onClick={this.changeSchoolNature.bind(this)}>全部</a></li>
                        <li className={this.state.SchoolNature=="女子学校"><a className="nofollow" onClick={this.changeSchoolNature.bind(this)}><i></i>女子学校</a></li>
                        <li className={this.state.SchoolNature=="男子学校"><a className="nofollow" onClick={this.changeSchoolNature.bind(this)}><i></i>男子学校</a></li>
                        <li className={this.state.SchoolNature=="混合学校"><a className="nofollow" onClick={this.changeSchoolNature.bind(this)}><i></i>混合学校</a></li>
                    </ul>
                </div>
                <div className="college-filter-options" data-group="SchoolCharacteristic">
                    <div className="title">学校特色：</div>
                    <ul className="college-filter-list">
                        <li className={this.state.SchoolCharacteristic=="全部" ? "all active" : "all"} data-value=""><a className="nofollow" onClick={this.changeArea.bind(this)}>全部</a></li>
                        <li className={this.state.SchoolCharacteristic=="普通"><a className="nofollow" onClick={this.changeArea.bind(this)}><i></i>普通</a></li>
                        <li className={this.state.SchoolCharacteristic=="艺术类"><a className="nofollow" onClick={this.changeArea.bind(this)}><i></i>艺术类</a></li>
                        <li className={this.state.SchoolCharacteristic=="军事高中"><a className="nofollow" onClick={this.changeArea.bind(this)}><i></i>军事高中</a></li>
                    </ul>
                </div>
                <div className="college-filter-options filter-hide filter-hide-USA" data-group="SchoolDormitoryType">
                    <div className="title">住宿类型：</div>
                    <ul className="college-filter-list">
                        <li className={this.state.SchoolDormitoryType=="全部" ? "all active" : "all"} data-value=""><a className="nofollow" onClick={this.changeArea.bind(this)}>全部</a></li>
                        <li className={this.state.SchoolDormitoryType=="学校宿舍"><a className="nofollow" onClick={this.changeArea.bind(this)}><i></i>学校宿舍</a></li>
                        <li className={this.state.SchoolDormitoryType=="寄宿家庭"><a className="nofollow" onClick={this.changeArea.bind(this)}><i></i>寄宿家庭</a></li>
                        <li className={this.state.SchoolDormitoryType=="监护人陪读"><a className="nofollow" onClick={this.changeArea.bind(this)}><i></i>监护人陪读</a></li>
                    </ul>
                </div>
                <div className="college-filter-options filter-hide filter-hide-USA" data-group="Tuition">
                    <div className="title">学费范围：</div>
                    <ul className="college-filter-list">
                        <li className={this.state.Tuition=="全部" ? "all active" : "all"} data-value=""><a className="nofollow" onClick={this.changeArea.bind(this)}>全部</a></li>
                        <li>（目的国货币）</li>
                        <li className={this.state.Tuition=="10000"><a className="nofollow" onClick={this.changeArea.bind(this)}><i></i>10,000以下</a></li>
                        <li className={this.state.Tuition=="10000-20000"><a className="nofollow" onClick={this.changeArea.bind(this)}><i></i>10,000-20,000</a></li>
                        <li className={this.state.Tuition=="21000-30000"><a className="nofollow" onClick={this.changeArea.bind(this)}><i></i>21,000-30,000</a></li>
                        <li className={this.state.Tuition=="31000-40000"><a className="nofollow" onClick={this.changeArea.bind(this)}><i></i>31,000-40,000</a></li>
                        <li className={this.state.Tuition=="41000-50000"><a className="nofollow" onClick={this.changeArea.bind(this)}><i></i>41,000-50,000</a></li>
                        <li className={this.state.Tuition=="51000"><a className="nofollow" onClick={this.changeArea.bind(this)}><i></i>51,000以上</a></li>
                    </ul>
                </div>
                <div className="college-filter-options filter-hide filter-hide-USA" data-group="Uniproperty">
                    <div className="title">学校类型：</div>
                    <ul className="college-filter-list">
                        <li className={this.state.Uniproperty=="全部" ? "all active" : "all"} data-value=""><a className="nofollow" onClick={this.changeArea.bind(this)}>全部</a></li>
                        <li className={this.state.Uniproperty=="公立"><a className="nofollow" onClick={this.changeArea.bind(this)}><i></i>公立</a></li>
                        <li className={this.state.Uniproperty=="私立"><a className="nofollow" onClick={this.changeArea.bind(this)}><i></i>私立</a></li>
                        <li className={this.state.Uniproperty=="教会"><a className="nofollow" onClick={this.changeArea.bind(this)}><i></i>教会</a></li>
                    </ul>
                </div>
                <div className="college-filter-more" id="moreUSA">
                    <button type="button">更多条件<i className="i"></i></button>
                </div>
            </div>
            
        );
    }
    //dom加载完调用
    componentDidMount(){

        $("#moreUSA").click(function(){
            if($(this).find(".i").hasClass("up")){
                $(".USA-high .filter-hide-USA").hide();
                $(this).find(".i").removeClass("up");
            }else{
                $(".USA-high .filter-hide-USA").show();
                $(this).find(".i").addClass("up");
            }
        });

        
    }
}

export default High;
