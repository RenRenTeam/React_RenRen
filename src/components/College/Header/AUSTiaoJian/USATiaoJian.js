/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import $ from 'jquery'

require('rc-radio/assets/index.css');
var Radio = require('rc-radio');

class AUSTiaoJian extends React.Component{
    constructor(props) {
        super(props);
        this.state = {disabled: false,
                      checked: null,
                      r: '1'};
    }
    radHandleChange(e) {
        this.setState({
          r: e.target.value
        })
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
                <div className="college-filter-box high">
                    <div className="college-filter-options" data-group="PlaceArea">
                        <div className="title">所在地区：</div>
                        <ul className="college-filter-list">
                            <li className="all active" data-value=""><a className="nofollow">全部</a></li>
                            <li data-value="西北地区"><a className="nofollow"><i></i>西北地区</a></li>
                            <li data-value="加州、内华达州"><a className="nofollow"><i></i>加州、内华达州</a></li>
                            <li data-value="西南地区"><a className="nofollow"><i></i>西南地区</a></li>
                            <li data-value="五大湖地区"><a className="nofollow"><i></i>五大湖地区</a></li>
                            <li data-value="大平原地区"><a className="nofollow"><i></i>大平原地区</a></li>
                            <li data-value="密西西比河流域"><a className="nofollow"><i></i>密西西比河流域</a></li>
                            <li data-value="东北地区"><a className="nofollow"><i></i>东北地区</a></li>
                            <li data-value="东南地区"><a className="nofollow"><i></i>东南地区</a></li>
                        </ul>
                    </div>
                    <div className="college-filter-options" data-group="SchoolNature">
                        <div className="title">学校性质：</div>
                        <ul className="college-filter-list">
                            <li className="all active" data-value=""><a className="nofollow">全部</a></li>
                            <li data-value="女子学校"><a className="nofollow"><i></i>女子学校</a></li>
                            <li data-value="男子学校"><a className="nofollow"><i></i>男子学校</a></li>
                            <li data-value="混合学校"><a className="nofollow"><i></i>混合学校</a></li>
                        </ul>
                    </div>
                    <div className="college-filter-options" data-group="SchoolCharacteristic">
                        <div className="title">学校特色：</div>
                        <ul className="college-filter-list">
                            <li className="all active" data-value=""><a className="nofollow">全部</a></li>
                            <li data-value="普通"><a className="nofollow"><i></i>普通</a></li>
                            <li data-value="艺术类"><a className="nofollow"><i></i>艺术类</a></li>
                            <li data-value="军事高中"><a className="nofollow"><i></i>军事高中</a></li>
                        </ul>
                    </div>
                    <div className="college-filter-options filter-hide" data-group="SchoolDormitoryType">
                        <div className="title">住宿类型：</div>
                        <ul className="college-filter-list">
                            <li className="all active" data-value=""><a className="nofollow">全部</a></li>
                            <li data-value="学校宿舍"><a className="nofollow"><i></i>学校宿舍</a></li>
                            <li data-value="寄宿家庭"><a className="nofollow"><i></i>寄宿家庭</a></li>
                            <li data-value="监护人陪读"><a className="nofollow"><i></i>监护人陪读</a></li>
                        </ul>
                    </div>
                    <div className="college-filter-options filter-hide" data-group="Tuition">
                        <div className="title">学费范围：</div>
                        <ul className="college-filter-list">
                            <li className="all active" data-value=""><a className="nofollow">全部</a></li>
                            <li>（目的国货币）</li>
                            <li data-value="10000"><a className="nofollow"><i></i>10,000以下</a></li>
                            <li data-value="10000-20000"><a className="nofollow"><i></i>10,000-20,000</a></li>
                            <li data-value="21000-30000"><a className="nofollow"><i></i>21,000-30,000</a></li>
                            <li data-value="31000-40000"><a className="nofollow"><i></i>31,000-40,000</a></li>
                            <li data-value="41000-50000"><a className="nofollow"><i></i>41,000-50,000</a></li>
                            <li data-value="51000"><a className="nofollow"><i></i>51,000以上</a></li>
                        </ul>
                    </div>
                    <div className="college-filter-options filter-hide" data-group="Uniproperty">
                        <div className="title">学校类型：</div>
                        <ul className="college-filter-list">
                            <li className="all active" data-value=""><a className="nofollow">全部</a></li>
                            <li data-value="公立"><a className="nofollow"><i></i>公立</a></li>
                            <li data-value="私立"><a className="nofollow"><i></i>私立</a></li>
                            <li data-value="教会"><a className="nofollow"><i></i>教会</a></li>
                        </ul>
                    </div>
                    <div className="college-filter-more">
                        <button type="button">更多条件<i></i></button>
                    </div>
                </div>
                <div className="college-filter-box university">
                    <div className="college-filter-options" data-group="Area">
                        <div className="title">所在地区：</div>
                        <ul className="college-filter-list">
                            <li className="all active" data-value="all"><a className="nofollow">全部</a></li>
                            <li data-value="西北地区"><a className="nofollow"><i></i>西北地区</a></li>
                            <li data-value="加州、内华达州"><a className="nofollow"><i></i>加州、内华达州</a></li>
                            <li data-value="西南地区"><a className="nofollow"><i></i>西南地区</a></li>
                            <li data-value="五大湖地区"><a className="nofollow"><i></i>五大湖地区</a></li>
                            <li data-value="大平原地区"><a className="nofollow"><i></i>大平原地区</a></li>
                            <li data-value="密西西比河流域"><a className="nofollow"><i></i>密西西比河流域</a></li>
                            <li data-value="东北地区"><a className="nofollow"><i></i>东北地区</a></li>
                            <li data-value="东南地区"><a className="nofollow"><i></i>东南地区</a></li>
                        </ul>
                    </div>
                    <div className="college-filter-options" data-group="综合排名">
                        <div className="title">综合排名：</div>
                        <ul className="college-filter-list">
                            <li className="all active" data-value="all"><a className="nofollow">全部</a></li>
                            <li data-value="1-10名"><a className="nofollow"><i></i>1-10名</a></li>
                            <li data-value="10-20名"><a className="nofollow"><i></i>10-20名</a></li>
                            <li data-value="20-50名"><a className="nofollow"><i></i>20-50名</a></li>
                            <li data-value="50-100名"><a className="nofollow"><i></i>50-100名</a></li>
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
                                    <select id="USA_MajorRanksA" className="selectpicker show-menu-arrow form-control" data-name="rank">
                                        <option value="" selected="selected">请选择</option>
                                        
                                    </select>
                                </div>
                                <div className="control" id="div_ranks">
                                    <select id="USA_MajorRanksB" name="USA_MajorRanksB" className="selectpicker show-menu-arrow form-control" data-name="subrank">
                                        <option value="" selected="selected">请选择</option>
                                        
                                    </select>
                                </div>
                                <div className="control">
                                    <button type="button" className="button-confirm">确定</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default AUSTiaoJian;
