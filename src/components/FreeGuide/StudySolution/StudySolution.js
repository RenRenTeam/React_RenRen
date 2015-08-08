/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './StudySolution.less';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery'

import SetpA from '../SetpA/'
import SetpB from '../SetpB/'
import SetpC from '../SetpC/'


@withStyles(styles)
class StudySolution {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    componentDidMount() {
        $("#stepContentBoxA").show();
    }

    componentWillUnmount() {
        console.log(2);
    }

    Step1(){
        $(".stepUl li").removeClass("current");
        $(".stepUl li").eq(0).addClass("current");
        $(".stepProgress div").eq(0).attr("class","yellow-dv");
        $(".contentDv").hide();
        $("#stepContentBoxA").show();
    }

    Step2(){
        $(".stepUl li").removeClass("current");
        $(".stepUl li").eq(1).addClass("current");
        $(".stepProgress div").eq(0).attr("class","yellow-dv step2Width");
        $(".contentDv").hide();
        $("#stepContentBoxB").show();
    }

    Step3(){
        $(".stepUl li").removeClass("current");
        $(".stepUl li").eq(2).addClass("current");
        $(".stepProgress div").eq(0).attr("class","yellow-dv step3Width");
        $(".contentDv").hide();
        $("#educationBox").show();
    }

    render() {
        let title = '免费办理－人人留学';
        this.context.onSetTitle(title);
        return (
            <div>
                <section className="study-abroad-box">
                    <div className="sectionStep1">
                        <div className="stepDv">
                            <ul className="stepUl">
                                <li className="item itema current" onClick={this.Step1}><i className="icon"></i>填写留学计划</li>
                                <li className="item itemb" onClick={this.Step2}><i className="icon"></i>确定留学方案</li>
                                <li className="item itemc" onClick={this.Step3}><i className="icon"></i>定制选校方案</li>
                                <div className="clear"></div>
                            </ul>
                            <div className="stepProgress">
                                <div className="yellow-dv"></div>
                            </div>
                        </div>
                        <div className="contentDv" id="stepContentBoxA">
                            <SetpA />
                            <div className="buttonDv">
                                <button className="button-normal" onClick={this.Step2}>获取留学方案</button>
                            </div>
                        </div>
                        <div className="contentDv" id="stepContentBoxB">
                            <SetpB />
                            <div className="buttonDv">
                                <button className="button-normal" onClick={this.Step3}>下一步，选择学校</button>
                            </div>
                        </div>
                        <div className="contentDv" id="educationBox">
                            <SetpC />                                
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}

export default StudySolution;
