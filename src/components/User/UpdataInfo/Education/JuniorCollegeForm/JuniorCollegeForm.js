/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './JuniorCollegeForm.less';
import withStyles from '../../../../../decorators/withStyles';
import $ from 'jquery'

@withStyles(styles)
class JuniorCollegeForm {
    render() {
        
        return (
            <form action="" method="" id="juniorCollegeForm">
                <div className="content stepForm" id="juniorCollege">
                    <div className="rowDv">
                        <div className="left">
                            <input id="CollegeSchoolName" type="text" placeholder="就读学校" className="inputClass" />
                        </div>
                        <div className="left">
                            <input id="CollegeMajor" type="text" placeholder="就读专业" className="inputClass marginInput" />
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="rowMargin">
                        <select className="selectpicker show-menu-arrow" id="CollegeSelectLanguageType">
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
                            <input type="text" placeholder="入学时间" className="inputClass laydate-icon" id="data-juniorCollege-startSchool" />
                        </div>
                        <div className="left">
                            <input type="text" placeholder="毕业时间" className="inputClass laydate-icon" id="data-juniorCollege-graduationTime" />
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="gpaDv">
                        <div className="gpaScore">
                            <div className="scrollDv">
                                <div className="left">
                                    <span>GPA：</span>
                                    <span className="scrollSpan">
                                        <input type="radio" id="juniorCollege-fiveScore" name="juniorCollege-fullScroll" value="juniorCollege-fiveScore" checked="checked" className="icheck" />
                                        <label for="juniorCollege-fiveScore">5分制</label>
                                    </span>
                                    <span className="scrollSpan">
                                        <input type="radio" id="juniorCollege-tenScore" name="juniorCollege-fullScroll" value="juniorCollege-tenScore" className="icheck" />
                                        <label for="juniorCollege-tenScore">10分制</label>
                                    </span>
                                    <span className="scrollSpan">
                                        <input type="radio" id="juniorCollege-hundredScore" name="juniorCollege-fullScroll" value="juniorCollege-hundredScore" className="icheck" />
                                        <label for="juniorCollege-hundredScore">100分制</label>
                                    </span>
                                </div>
                                <div className="left marginInputdv">
                                    <input id="CollageGPAScore" type="text" placeholder="请填写分数" className="gpaScoreInput" />
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="notice">
                                <span className="redFont">*</span>如不知道怎么计算GPA，可以在稍后步骤上传成绩单，由材料顾问帮你计算。
                            </div>
                            <div className="clear"></div>
                            <div className="buttonNextDv">
                                <button className="button-normal" id="nextToUndergraduateCourse" type="submit">下一步</button>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
    
}

export default JuniorCollegeForm;
