
import React, { PropTypes } from 'react';

var Select = require('rc-select');
var Option = Select.Option;

require('rc-radio/assets/index.css');
var Radio = require('rc-radio');


import SelectStyles from "./SetpC.less";
import withStyles from '../../../decorators/withStyles';
@withStyles(SelectStyles)
export class SetpC2 extends React.Component {
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
            <div>
                <dl>
                    <dd>
                        <input type="text" id="name" name="name" placeholder="真实姓名" />
                    </dd>
                    <dd>
                        <div className="sex">
                            <Radio value="1" name="radio_sex"
                                  checked = {this.state.r === '1'}
                                  onChange={this.radHandleChange.bind(this)}
                                  disabled={this.state.disabled}/>
                            <label for="male">男</label>
                        </div>
                        <div className="sex">
                            <Radio value="0" name="radio_sex"
                                  checked = {this.state.r === '0'}
                                  onChange={this.radHandleChange.bind(this)}
                                  disabled={this.state.disabled}/>
                            <label for="female">女</label>
                        </div>
                        <div className="clear"></div>
                    </dd>                                            
                </dl>
            </div>
            )
    }

}


export default SetpC2;
