
import React, { PropTypes } from 'react';
require('rc-checkbox/assets/index.css');
var Checkbox = require('rc-checkbox');

import SelectStyles from "./SetpB.less";
import withStyles from '../../../decorators/withStyles';
@withStyles(SelectStyles)
class SetpB extends React.Component {

    componentDidMount() {
		
    }

    componentWillUnmount() {

    }
    getInitialState() {
	   return {
	      disabled: false
	   }
	}
	toggle() {
	   this.setState({
	      disabled: !this.state.disabled
	   });
	}
	onChange(e) {
	  console.log('checkbox checked:' + (e.target.checked));
	}
    render() {
        return (
            <div>
               <div className="title">2.根据你的需求及条件，以下留学方案可供选择（可多选）</div>
                    <div className="solutionDv">
                        <ul className="ulSolution">
                            <li>
                                <label for="soualtionA">
                                    <div className="title">
                                    <label>
                                    	<Checkbox />
                                        语言+本科
                                    </label>
                                    </div>
                                    <div className="adDv">
                                        <span className="advantageColor">优点：</span>托福或雅思成绩不高或没有语言成绩也可以去美国，属于专升本
                                    </div>
                                    <div className="adDv">
                                        <span className="advantageColor">缺点：</span>选校范围受到限制，转学分有不确定性
                                    </div>
                                </label>
                            </li>
                            <li className="full">
                                <label for="soualtionB">
                                    <div className="title">
                                    <label>
                                    	<Checkbox />
                                        语言+三年级编入
                                    </label>
                                    </div>
                                    <div className="adDv">
                                        <span className="advantageColor">优点：</span>托福或雅思成绩不高或没有语言成绩也可以去美国，属于专升本
                                    </div>
                                    <div className="adDv">
                                        <span className="advantageColor">缺点：</span>选校范围受到限制，转学分有不确定性
                                    </div>
                                </label>
                            </li>
                            <li>
                                <label for="soualtionC">
                                    <div className="title">
                                    <label>
                                    	<Checkbox />
                                        动漫专门学校
                                    </label>
                                    </div>
                                    <div className="adDv">
                                        <span className="advantageColor">优点：</span>日语2级，在国内面试直接录取，没有日语成绩，有条件录取，先去附属的日语学校就读日语
                                    </div>
                                    <div className="adDv">
                                        <span className="advantageColor">缺点：</span>学费较贵（一年9-10万人民币）
                                    </div>
                                </label>
                            </li>
                            <div className="clear"></div>
                        </ul>
                        <div className="clear"></div>
                    </div>
            </div>
            )
    }

}

export default SetpB;
