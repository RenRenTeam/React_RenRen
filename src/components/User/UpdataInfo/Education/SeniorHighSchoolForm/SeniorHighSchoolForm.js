/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './SeniorHighSchoolForm.less';
import withStyles from '../../../../../decorators/withStyles';
import $ from 'jquery'

@withStyles(styles)
class SeniorHighSchoolForm {
    render() {
        
        return (
            <form action="" method="" id="seniorHighSchoolForm">
                <div className="content stepForm" id="seniorHighSchool">                       
                    <div className="rowDv">
                        <div className="left">
                            <input type="text" placeholder="就读学校" className="seniorHighSchool-input inputClass" id="data-seniorHighSchool-atSchool" />
                        </div>
                        <div className="left">
                            <select className="selectpicker show-menu-arrow selectOp" id="seniorSelectOp">
                                <option value="国家重点">国家重点</option>
                                <option value="省/直辖市重点">省/直辖市重点</option>
                                <option value="市重点">市重点</option>
                                <option value="普通中学">普通中学</option>
                            </select>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="gpaDv">
                        <div className="gpaScore">
                            <span>就读课程类型：</span>
                            <span className="scrollDv">
                                <span className="scrollSpan">
                                    <input type="radio" id="internalCourse" name="onCourse" value="internalCourse" checked="checked" className="icheck" />
                                    <label for="internalCourse">国内普通课程</label>
                                </span>
                                <span className="scrollSpan">
                                    <input type="radio" id="a-levelCourse" name="onCourse" value="a-levelCourse" className="icheck" />
                                    <label for="a-levelCourse">A-level课程</label>
                                </span>
                                <span className="scrollSpan">
                                    <input type="radio" id="iBCourse" name="onCourse" value="iBCourse" className="icheck" />
                                    <label for="iBCourse">IB课程</label>
                                </span>
                                <span className="scrollSpan">
                                    <input type="radio" id="otherNationCourse" name="onCourse" value="otherNationCourse" className="icheck" />
                                    <label for="otherNationCourse">其他国际课程</label>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="rowMargin">
                        <select className="selectpicker show-menu-arrow" id="seniorSelectLanguageType">
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
                            <input type="text" placeholder="入学时间" className="inputClass laydate-icon" id="data-seniorHighSchool-startSchool" />
                        </div>
                        <div className="left">
                            <input type="text" placeholder="毕业时间" className="inputClass laydate-icon" id="data-seniorHighSchool-graduationTime" />
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="gpaDv">
                        <div className="gpaScore">
                            <div className="scrollDv">
                                <div className="left">
                                    <span>GPA：</span>
                                    <span className="scrollSpan">
                                        <input type="radio" id="seniorHighSchool-fiveScore" name="seniorHighSchool-fullScroll" value="seniorHighSchool-fiveScore" checked="checked" className="icheck" />
                                        <label for="seniorHighSchool-fiveScore">5分制</label>
                                    </span>
                                    <span className="scrollSpan">
                                        <input type="radio" id="seniorHighSchool-tenScore" name="seniorHighSchool-fullScroll" value="seniorHighSchool-tenScore" className="icheck" />
                                        <label for="seniorHighSchool-tenScore">10分制</label>
                                    </span>
                                    <span className="scrollSpan">
                                        <input type="radio" id="seniorHighSchool-hundredScore" name="seniorHighSchool-fullScroll" value="seniorHighSchool-hundredScore" className="icheck" />
                                        <label for="seniorHighSchool-hundredScore">100分制</label>
                                    </span>
                                </div>
                                <div className="left marginInputdv">
                                    <input id="seniorGPAScore" type="text" placeholder="请填写分数" className="gpaScoreInput" />
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="notice">
                                <span className="redFont">*</span>如不知道怎么计算GPA，可以在稍后步骤上传成绩单，由材料顾问帮你计算。
                            </div>
                            <div className="clear"></div>
                            <div className="buttonNextDv">
                                <button className="button-normal" id="nextToJuniorCollege" type="submit">下一步</button>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
    
}

export default SeniorHighSchoolForm;
