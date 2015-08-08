/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './MainContent.less';
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery'

@withStyles(styles)
class MainContent {

  render() {
    return (                          
         <li>
             <div className="title"><a href="/advisory-library-detail.aspx?id=744">{this.props.title}</a></div>
             <div className="content">
                 <div className="left">
                     <span className="user themecolor">rrliuxue</span><span className="border">｜</span><span className="time">2015-07-08</span>
                 </div>
                 <div className="right">
                     <div className="left dv_button">
                         <button data-article="744" className="like"></button>
                     </div>
                     <div className="left">
                         <span className="num">6</span>人觉得赞
                     </div>
                     <div className="clear"></div>
                 </div>
                 <div className="clear"></div>
             </div>
             <div className="detail_content">
             
                 <div className="article-description font">
                     mn,bvghdfgd
                     <div className="readAll"><a href="/advisory-library-detail.aspx?id=744">查看全文&gt;</a></div>
                 </div>
                 <div className="clear"></div>
             </div>
         </li>
    );
  }
  componentDidMount() {

        $(document).ready(function(){

        });
    }
}

export default MainContent;