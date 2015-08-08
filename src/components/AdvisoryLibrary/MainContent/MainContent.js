/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './MainContent.less';
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import Link from '../../../utils/Link';
import $ from 'jquery'

@withStyles(styles)
class MainContent {

  render() {
    return (                          
         <div className="dvName eachGetHref">
             <div className="title"><a className="aHref" onClick={Link.handleClick}>{this.props.json.Title}</a></div>
             <div className="content">
                 <div className="left">
                     <span className="user themecolor">{this.props.json.Author}</span><span className="border">｜</span><span className="time">{this.props.json.PublisherDate}</span>
                 </div>
                 <div className="right">
                     <div className="left dv_button">
                         <button className="like"></button>
                     </div>
                     <div className="left">
                         <span className="num">{this.props.json.Commend}</span>人觉得赞
                     </div>
                     <div className="clear"></div>
                 </div>
                 <div className="clear"></div>
             </div>
             <div className="detail_content">
                <div className="article-pic img">
                    <a className="aHref" onClick={Link.handleClick}>
                        <img src="http://admin.rrliuxue.com/Images/" />
                    </a>
                </div>
                 <div className="article-description font">
                     {this.props.json.Content}
                     <div className="readAll"><a className="aHref" onClick={Link.handleClick}>查看全文&gt;</a></div>
                     <font className="sysNo">{this.props.json.Sysno}</font>
                 </div>
                 <div className="clear"></div>
             </div>
         </div>
    );
  }
  componentDidMount() {

        $(document).ready(function(){
            $(".eachGetHref").each(function(){
                var href = $(this).find(".sysNo").html();
                $(this).find(".aHref").attr("href","/AdvisoryDetail?id="+href);
            });
        });

        
    }
}

export default MainContent;