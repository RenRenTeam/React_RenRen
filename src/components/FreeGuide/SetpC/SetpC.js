
import React, { PropTypes } from 'react';

var Select = require('rc-select');
var Select2 = require('rc-select');
var Select3 = require('rc-select');
var Option = Select.Option;

var Radio = require('rc-radio');
import SetpC2 from './SetpC2';


import SelectStyles from "./SetpC.less";
import withStyles from '../../../decorators/withStyles';
@withStyles(SelectStyles)
class SetpC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {disabled: false,
                      checked: null,
                      IMType:null,
                      JapaneseLeaveType:null,
                      Leave:null,
                      r: 'a'};
    }    

    handleChange(e){
        this.setState({
            IMType:e
        });
    }
    handleChangeB(e){
        this.setState({
            JapaneseLeaveType:e
        });
    }
    handleChangeC(e){
        this.setState({
            Leave:e
        });
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(e);
        var entity = {
            userName:e.target["name"].value,
            mobile:e.target["IMNO"].value,
            phone:e.target["phone"].value,
            schoolName:e.target["SchoolName"].value,
            imType:e.target["IMType"].value,
            japaneseLeaveType:e.target["JapaneseLeaveType"].value,
            leave:e.target["Leave"].value,
            japaneseScore:e.target["JapaneseScore"].value
        };
        console.log(entity);
    }

    render() {
        return (
            <div>
                <form className="commentForm" onSubmit={this.handleSubmit}>
                    <div className="title">3.请准确填写你的个人信息，我们会为你推荐最适合的方案</div>
                        <div className="ws-education1">
                            <div className="education-box">
                                <div className="content">
                                    <SetpC2 />
                                    <dl>
                                        <dd>                                            
                                            <Select value={this.state.IMType==null?"请选择":this.state.IMType} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChange.bind(this)}>
                                                <Option value="请选择" desc="请选择">请选择</Option>
                                                <Option value="QQ" desc="QQ">QQ</Option>
                                                <Option value="微信" desc="微信">微信</Option>
                                            </Select>
                                            <input type="hide" id="IMType" className="inputHide" value={this.state.IMType}/>
                                        </dd>
                                        <dd>
                                            <input type="text" id="IMNO" placeholder="请输入号码" />
                                        </dd>
                                        <dd>
                                            <input type="text" id="phone" placeholder="电话" />
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <input type="text" id="SchoolName" placeholder="就读学校" />
                                        </dd>
                                        <dd>
                                            <Select2 value={this.state.JapaneseLeaveType==null?"请选择":this.state.JapaneseLeaveType} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeB.bind(this)}>
                                                <Option value="请选择" desc="请选择">请选择</Option>
                                                <Option value="日语成绩" desc="日语成绩 ">日语成绩</Option>
                                                <Option value="JLPT" desc="JLPT">JLPT</Option>
                                                <Option value="J-TEST" desc="J-TEST">J-TEST</Option>
                                                <Option value="BJT" desc="BJT">BJT</Option>
                                                <Option value="NAT" desc="NAT">NAT</Option>
                                                <Option value="无" desc="无">无</Option>
                                                <Option value="艺术" desc="艺术">艺术</Option>
                                            </Select2>                                            
                                            <input type="hide" id="JapaneseLeaveType" className="inputHide" value={this.state.JapaneseLeaveType}/>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <Select3 value={this.state.Leave==null?"请选择":this.state.Leave} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChangeC.bind(this)}>
                                                <Option value="请选择" desc="请选择">请选择</Option>
                                                <Option value="级别" desc="级别">级别</Option>
                                                <Option value="N1" desc="N1 ">N1</Option>
                                                <Option value="N2" desc="N2">N2</Option>
                                                <Option value="N3" desc="N3">N3</Option>
                                                <Option value="N4" desc="N4">N4</Option>
                                                <Option value="N5" desc="N5">N5</Option>
                                            </Select3>                                            
                                            <input type="hide" id="Leave" className="inputHide" value={this.state.Leave}/>
                                        </dd>
                                        <dd>
                                            <input type="text" id="JapaneseScore" placeholder="成绩" />
                                        </dd>
                                    </dl>

                                </div>
                                <div className="bottom-bg"></div>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="buttonDv">
                            <input type="submit" className="button-normal" value="完成确定选校方案" />
                        </div>
                    </form>
            </div>
            )
    }

}

export default SetpC;
