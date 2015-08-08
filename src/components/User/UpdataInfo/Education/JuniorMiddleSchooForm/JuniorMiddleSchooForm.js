/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './JuniorMiddleSchooForm.less';
import withStyles from '../../../../../decorators/withStyles';
import $ from 'jquery'

@withStyles(styles)
class JuniorMiddleSchooForm {
    render() {
        
        return (
            <form method="" action="" id="juniorMiddleSchooForm">
                <div className="content stepForm" id="juniorMiddleSchool">
                    <div className="rowDv">
                        <div className="left">
                            <input id="juniorSchoolName" type="text" placeholder="就读学校" className="inputClass juniorMiddleSchool-input" />
                        </div>
                        <div className="left">
                            <select className="selectpicker show-menu-arrow selectOp" id="juniorSelectOp">
                                <option value="国家重点">国家重点</option>
                                <option value="省/直辖市重点">省/直辖市重点</option>
                                <option value="市重点">市重点</option>
                                <option value="普通中学">普通中学</option>
                            </select>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="rowMargin">
                        <textarea id="juniorMainClass" className="textMainClass" placeholder="主要课程"></textarea>
                    </div>
                    <div className="rowMargin">
                        <select className="selectpicker show-menu-arrow juniorMiddleSchool-select" id="juniorSelectLanguageType">
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
                            <input type="text" placeholder="入学时间" className="inputClass laydate-icon" id="data-juniorMiddleSchool-startSchool" />
                        </div>
                        <div className="left">
                            <input type="text" placeholder="毕业时间" className="inputClass laydate-icon" id="data-juniorMiddleSchool-graduationTime" />
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="gpaDv">
                        <div className="gpaScore">
                            <div className="scrollDv">
                                <div className="left">
                                    <span>GPA：</span>
                                    <span className="scrollSpan">
                                        <input type="radio" id="juniorMiddleSchool-fiveScore" name="juniorMiddleSchool-fullScroll" value="juniorMiddleSchool-fiveScore" checked="checked" className="icheck" />
                                        <label for="juniorMiddleSchool-fiveScore">5分制</label>
                                    </span>
                                    <span className="scrollSpan">
                                        <input type="radio" id="juniorMiddleSchool-tenScore" name="juniorMiddleSchool-fullScroll" value="juniorMiddleSchool-tenScore" className="icheck" />
                                        <label for="juniorMiddleSchool-tenScore">10分制</label>
                                    </span>
                                    <span className="scrollSpan">
                                        <input type="radio" id="juniorMiddleSchool-hundredScore" name="juniorMiddleSchool-fullScroll" value="juniorMiddleSchool-hundredScore" className="icheck" />
                                        <label for="juniorMiddleSchool-hundredScore">100分制</label>
                                    </span>
                                </div>
                                <div className="left marginInputdv">
                                    <input id="juniorGPAScore" type="text" placeholder="请填写分数" className="gpaScoreInput" />
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="clear"></div>
                            <div className="notice">
                                <span className="redFont">*</span>如不知道怎么计算GPA，可以在稍后步骤上传成绩单，由材料顾问帮你计算。
                            </div>
                            <div className="buttonNextDv">
                                <button className="button-normal" id="nextToSeniorHighSchool" type="submit">下一步</button>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
            </form>    
        );
    }
    
}

export default JuniorMiddleSchooForm;
