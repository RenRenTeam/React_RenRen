/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './MayBeLike.less';
import withViewport from '../../../../decorators/withViewport';
import withStyles from '../../../../decorators/withStyles';
import $ from 'jquery';

@withStyles(styles)
class MayBeLike {
static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = '资讯库详细 - 人人留学';
    this.context.onSetTitle(title);
    return (
        <div className="maybeInstered">
            <div className="border_bottom">
                <div className="titleFont">
                    <div className="left">你可能感兴趣</div>
                    <div className="right change"><a href="">换一换</a></div>
                    <div className="clear"></div>
                </div>
            </div>
            <ul className="imgUl">
                <li>
                    <img src="http://new.rrliuxue.com/WebResources/Default/images/advistory-library/beinstered.jpg" />
                    <div className="img_font">
                        <div>英国留学签证</div>
                    </div>
                </li>
                <li>
                    <img src="http://new.rrliuxue.com/WebResources/Default/images/advistory-library/beinstered.jpg" />
                    <div className="img_font">英国留学签证</div>
                </li>
                <li className="lastLi">
                    <img src="http://new.rrliuxue.com/WebResources/Default/images/advistory-library/beinstered.jpg" />
                    <div className="img_font">英国留学签证</div>
                </li>
                <div className="clear"></div>
            </ul>
        </div>
    );
  }
  componentDidMount() {
    $(document).ready(function(){
        $(".imgUl li").hover(function () {
            var $this = $(this);
            $this.stop();
            $this.children().eq(1).animate({ "margin-top": "-45px" }, 300);
        }, function () {
            var $this = $(this);
            $this.stop();
            $this.children().eq(1).animate({ "margin-top": "0px" }, 300);
        });

    });
  }
}

export default MayBeLike;