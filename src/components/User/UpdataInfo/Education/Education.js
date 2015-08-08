/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Education.less';
import withStyles from '../../../../decorators/withStyles';
import $ from 'jquery'
import JuniorCollegeForm from './JuniorCollegeForm/JuniorCollegeForm.js'
import JuniorMiddleSchooForm from './JuniorMiddleSchooForm/JuniorMiddleSchooForm.js'
import PostgraduateForm from './PostgraduateForm/PostgraduateForm.js'
import SeniorHighSchoolForm from './SeniorHighSchoolForm/SeniorHighSchoolForm.js'
import UndergraduateCourseForm from './UndergraduateCourseForm/UndergraduateCourseForm.js'

@withStyles(styles)
class Education {

    render() {
        return (
            <div id="education" className="tab-content-box">
                <div className="userMiniHeader">
                    <div className="title">
                        完善你本人各阶段的教育背景（填写至本人最高学历）：
                    </div>
                    <div className="stepDv">
                        <div className="itemStep">
                            <ul className="itemStepUl">
                                <li className="stepItem item1 current" onClick={this.openJuniorCollegeForm}></li>
                                <li className="stepItem item2" onClick={this.openJuniorJuniorMiddleSchooForm}></li>
                                <li className="stepItem item3" onClick={this.openPostgraduateForm}></li>
                                <li className="stepItem item4" onClick={this.openSeniorHighSchoolForm}></li>
                                <li className="stepItem item5" onClick={this.openUndergraduateCourseForm}></li>
                                <div className="clear"></div>
                            </ul>
                        </div>
                    </div>
                </div>
				<div id="tabContentEduForm"></div>
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){

        React.render(<JuniorCollegeForm />, document.getElementById('tabContentEduForm'));
        
        $(".itemStepUl .stepItem").click(function(){
            
            $(this).addClass("current").siblings().removeClass("current")
        });


    }
    openJuniorCollegeForm(){
        React.render(<JuniorCollegeForm />, document.getElementById('tabContentEduForm'));
    }
    openJuniorJuniorMiddleSchooForm(){
        React.render(<JuniorMiddleSchooForm />, document.getElementById('tabContentEduForm'));
    }
    openPostgraduateForm(){
        React.render(<PostgraduateForm />, document.getElementById('tabContentEduForm'));
    }
    openSeniorHighSchoolForm(){
        React.render(<SeniorHighSchoolForm />, document.getElementById('tabContentEduForm'));
    }
    openUndergraduateCourseForm(){
        React.render(<UndergraduateCourseForm />, document.getElementById('tabContentEduForm'));
    }
}

export default Education;
