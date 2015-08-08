
import React, { PropTypes } from 'react';

var Select = require('rc-select');
var Option = Select.Option;

import SelectStyles from "./Select.less";
import withStyles from '../../../decorators/withStyles';
@withStyles(SelectStyles)
class SetpA extends React.Component{

    componentDidMount() {
        var path = window.location.pathname;
        var parm = path.split('_');
        console.log(parm);
        switch(parm[1])
        {
          case "UK":
            this.setState({
                CountryMsg:'英国'
            });
          break;
          case "USA":            
            this.setState({
                CountryMsg:'美国'
            });
          break;
          case "AUS":            
            this.setState({
                CountryMsg:'澳洲'
            });
          break;
          case "JP":            
            this.setState({
                CountryMsg:'日本'
            });
          break;
        }
        if(parm.length > 1){
          this.setState({
              YTime:parm[2]
          });
        }
        console.log(decodeURI(parm[3]));
        if(parm.length > 2){
          this.setState({
              Type:decodeURI(parm[3])
          });
        }

        if(path.indexOf('?') > -1){
            path = path.substr(0,path.indexOf('?'));
            //console.log(path);
        }
    }

    componentWillUnmount() {

    }

    constructor(props) {
        super(props);     
        this.state = {CountryMsg:null,YTime:null,Type:null};
    }    

    render() {
        return (
            <div>
                <div className="title">1.确认并完善你的留学计划，获取最适合你的留学方案</div>
                    <div className="wantToGo">
                        <div>
                            想去的国家：
                            <label for="aus">{this.state.CountryMsg}</label>
                        </div>
                    </div>
                    <div className="planeGoTo">
                        <div className="selectDv">
                            <div className="left lin40">计划出国时间：</div>
                            <div className="boSelect">
                                <Select value={this.state.YTime==null?"请选择":this.state.YTime} style={{width:160,height:34}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChange}>
                                    <Option value="请选择" desc="请选择">请选择</Option>
                                    <Option value="2015" desc="2015 ">2015</Option>
                                    <Option value="2014" desc="2014">2014</Option>
                                    <Option value="2013" desc="2013">2013</Option>
                                </Select>
                            </div>
                            <div className="left lin40">&nbsp;&nbsp;</div>
                            <div className="clear"></div>
                        </div>
                        <div className="selectD">
                            <div className="left lin40">目前就读年级：</div>
                            <div className="boSelect">
                                <Select value={this.state.Type==null?"请选择":this.state.Type} style={{width:270,height:45}} optionFilterProp="desc"  renderDropdownToBody={true} onChange={this.handleChange}>
                                  <Option value="目前就读年级" desc="目前就读年级">目前就读年级</Option>
                                  <Option selected="selected" value="本科大四">本科大四</Option>
                                  <Option value="本科大三">本科大三</Option>
                                  <Option value="本科大二">本科大二</Option>
                                  <Option value="本科大一">本科大一</Option>
                                  <Option value="大专大三">大专大三</Option>
                                  <Option value="大专大二">大专大二</Option>
                                  <Option value="大专大一">大专大一</Option>
                                  <Option value="高三">高三</Option>
                                  <Option value="高二">高二</Option>
                                  <Option value="高一">高一</Option>
                                  <Option value="初三">初三</Option>
                                  <Option value="初二">初二</Option>
                                  <Option value="初一">初一</Option>
                                  <Option value="硕士毕业已工作">硕士毕业已工作</Option>
                                  <Option value="硕士在读">硕士在读</Option>
                                  <Option value="本科毕业已工作">本科毕业已工作</Option>
                                  <Option value="大专毕业三年以上">大专毕业三年以上</Option>
                                  <Option value="大专毕业三年以下">大专毕业三年以下</Option>
                                  <Option value="高三毕业已工作">高三毕业已工作</Option>
                                </Select>
                            </div>
                            <div className="left lin40">&nbsp;&nbsp;年</div>
                            <div className="clear"></div>
                        </div>
                        <div className="clear"></div>
                    </div>
            </div>
            )
    }

}

export default SetpA;
