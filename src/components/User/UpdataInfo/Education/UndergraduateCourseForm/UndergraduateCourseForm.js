/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './UndergraduateCourseForm.less';
import withStyles from '../../../../../decorators/withStyles';
import $ from 'jquery'

@withStyles(styles)
class UndergraduateCourseForm {
    render() {
        
        return (
            <form action="" method="" id="undergraduateCourseForm">
                <div className="content stepForm" id="undergraduateCourse">
                    <div className="rowDv">
                        <div className="left">
                            <input type="text" id="undergraduateSchoolName" placeholder="就读学校" className="inputClass" />
                        </div>
                        <div className="left">
                            <input type="text" id="undergraduateMajor" placeholder="就读专业" className="inputClass marginInput" />
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="rowMargin">
                        <div className="left">
                            <input type="text" id="undergraduateDegree" placeholder="获得学位" className="inputClass" />
                        </div>
                        <div className="left">
                            <input type="text" placeholder="获得时间" className="inputClass laydate-icon" id="data-undergraduateCourse-accessTime" />
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="rowMargin">
                        <select className="selectpicker show-menu-arrow" id="undergraduateSelectLanguageType">
                            <option value="">授课语种</option>
                            <option value="汉语">汉语</option>
                            <option value="英语">英语</option>
                            <option value="日语">日语</option>
                            <option value="俄语">俄语</option>
                            <option value="其他">其他</option>
                        </select>
                    </div>
                    <div className="rowMargin">
                        <div className="left">
                            <input type="text" placeholder="入学时间" className="inputClass laydate-icon" id="data-undergraduateCourse-startSchool" />
                        </div>
                        <div className="left">
                            <input type="text" placeholder="毕业时间" className="inputClass laydate-icon" id="data-undergraduateCourse-graduationTime" />
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="gpaDv">
                        <div className="gpaScore">
                            <div className="scrollDv left">
                                <span>GPA：</span>
                                <span className="scrollSpan">
                                    <input type="radio" id="undergraduateCourse-fiveScore" name="undergraduateCourse-fullScroll" value="undergraduateCourse-fiveScore" checked="checked" className="icheck" />
                                    <label for="undergraduateCourse-fiveScore">5分制</label>
                                </span>
                                <span className="scrollSpan">
                                    <input type="radio" id="undergraduateCourse-tenScore" name="undergraduateCourse-fullScroll" value="undergraduateCourse-tenScore" className="icheck" />
                                    <label for="undergraduateCourse-tenScore">10分制</label>
                                </span>
                                <span className="scrollSpan">
                                    <input type="radio" id="undergraduateCourse-hundredScore" name="undergraduateCourse-fullScroll" value="undergraduateCourse-hundredScore" className="icheck" />
                                    <label for="undergraduateCourse-hundredScore">100分制</label>
                                </span>
                            </div>
                            <div className="left marginInputdv">
                                <input id="undergraduateGPAScore" type="text" placeholder="请填写分数" className="gpaScoreInput" />
                            </div>
                            <div className="clear"></div>
                            <div className="notice">
                                <span className="redFont">*</span>如不知道怎么计算GPA，可以在稍后步骤上传成绩单，由材料顾问帮你计算。
                            </div>
                            <div className="clear"></div>
                            <div className="buttonNextDv">
                                <button className="button-normal" id="nextTopoStgraduate">下一步</button>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
    
}

export default UndergraduateCourseForm;
