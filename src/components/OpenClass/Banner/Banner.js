/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Banner.less';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery'
import AppActions from '../../../actions/AppActions';

@withStyles(styles)
class Banner {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        let title = '公开课－人人留学';
        this.context.onSetTitle(title);
        return (
            <section className="banner">
                <div id="da-slider" className="slideshow da-slider">
                    <div className="da-slide open-class-banner1">
                        <div className="content">
                            <div className="title"><h2 className="openH2">Open class</h2></div>
                            <div className="title-desc"><img src='http://new.rrliuxue.com/WebResources/Default/Images/banner/open-class/title-desc.png' /></div>
                            <div className="description">
                                May all the love learning love diligent friends here, <br />
                                no age limit,Education not limited to,<br />
                                regardless of whether Curve Wrecker, <br />
                                slag, are able to learn something, be happy!
                            </div>
                            <div className="arrow"></div>
                        </div>
                    </div>
                    <div className="slider-nav">
                        <div className="da-dots"></div>
                        <div className="da-arrows">
                            <span className="da-arrows-prev"><img src='http://new.rrliuxue.com/WebResources/Default/Images/banner-carousel-left.png' /></span>
                            <span className="da-arrows-next"><img src='http://new.rrliuxue.com/WebResources/Default/Images/banner-carousel-right.png' /></span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;
