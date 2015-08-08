/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
require('rc-radio/assets/index.css');

import styles from './BaseInfo.less';
import withStyles from '../../../../decorators/withStyles';
import $ from 'jquery'


var React = require('react');
var Radio = require('rc-radio');


@withStyles(styles)
class BaseInfo extends React.Component{
    getInitialState() {
        return {
          disabled: false,
          checked: null,
          r: 'a'
      }
    }


    render() {
        return (
            <form method="" action="" id="baseInfoForm">
                <div id="baseInfo" className="tab-content-box">
                    <div className="content">
                        <div className="partOne clearfix">
                            <div className="rowDv">
                                <div className="left">
                                    <input type="text" placeholder="真实姓名" className="inputClass" id="realName" />
                                </div>
                                <div className="left sexDv">
                                    <div className="sex">
                                         <label>
                                            <Radio value="a" checked = {this.state.r === 'a'} onChange={this.handleChange} />
                                            &nbsp; rc-radio
                                          </label>
                                    </div>
                                    <div className="sex">
                                         <label>
                                            <Radio value="b" checked = {this.state.r === 'b'} onChange={this.handleChange} />
                                            &nbsp; rc-radio
                                          </label>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="rowDv rowTwo">
                                <div className="left">
                                    <input type="text" id="IM" placeholder="QQ或微信" className="inputClass" />
                                </div>
                                <div className="left inputTelDv">
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="rowDv rowTwo">
                                <div className="left">
                                    <input type="text" placeholder="出生年月" className="inputClass laydate-icon laydata-btn" id="data-birthday" />
                                </div>
                                <div className="left">
                                    <select className="selectpicker show-menu-arrow inputTelDv" id="studyCourse">
                                        <option value="china">中华人民共和国</option>
                                        <option value="usa">美国</option>
                                        <option value="jp">日本</option>
                                        <option value="aus">澳洲</option>
                                    </select>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="rowDv rowTwo">
                                <input className="inputClass" id="IDCard" placeholder="身份证号码" />
                            </div>
                        </div>
                        <div className="partTwo">
                            <div className="title">
                                工作经验/实习经验
                            </div>
                            <div className="rowDv ">
                                <div className="left">
                                    <input id="WorkUnit" type="text" placeholder="工作单位" className="inputClass" />
                                </div>
                                <div className="left inputTelDv">
                                    <input type="text" id="Position" placeholder="职位" className="inputClass" />
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="rowDv rowTwo">
                                <div className="left">
                                    <input type="text" placeholder="开始时间" className="inputClass laydate-icon" id="data-startTime" />
                                </div>
                                <div className="left inputTelDv">
                                    <input type="text" placeholder="结束时间" className="inputClass laydate-icon" id="data-endTime" />
                                </div>
                                <div className="clear"></div>
                            </div>
							
                            <div className="rowThree">
                                <button className="button-normal" id="gotoFillEducationForm" type="submit">下一步，填写教育背景</button>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
    //dom加载完调用
    componentDidMount(){

        alert($);

    }
      handleChange(e) {
        this.setState({
          r: e.target.value
      })
    }
}

export default BaseInfo;
