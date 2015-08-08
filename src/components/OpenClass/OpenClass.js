/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './OpenClass.less';
import withStyles from '../../decorators/withStyles';
import $ from 'jquery'
import AppActions from '../../actions/AppActions';
import Banner from './Banner/Banner.js'
import Content from './Content/Content.js'

@withStyles(styles)
class OpenClass {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        let title = '公开课－人人留学';
        this.context.onSetTitle(title);
        return (
            <div>
                <Banner />
                <Content />
                <section className="open-class-flow">
                    <div className="content">
                        <div className="title"><h2>Open class</h2></div>
                        <div className="title-desc"><img src='http://new.rrliuxue.com/WebResources/Default/images/open-class/flow-desc.png' /></div>
                        <div className="description">
                            May all the love learning love diligent friends here,no age limit,Education not limited to,<br />
                            regardless of whether Curve Wrecker, slag, are able to learn something, be happy!
                        </div>
                        <ul className="flow">
                            <li>
                                <div className="wrap-text"><div className="text">报名</div></div>
                            </li>
                            <li>
                                <div className="wrap-text"><div className="text">确定学习目标</div></div>
                            </li>
                            <li>
                                <div className="wrap-text"><div className="text multiple">快学快用<br />讲/学/练/测/评</div></div>
                            </li>
                            <li>
                                <div className="wrap-text"><div className="text">成学习目标</div></div>
                            </li>
                            <li className="full">
                                <div className="wrap-text"><div className="text">毕业证书</div></div>
                            </li>
                            <li className="clear"></li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default OpenClass;
