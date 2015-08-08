/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './AdvisoryDetail.less';
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery';
import Recommendation from './Recommendation/Recommendation.js';
import MayBeLike from './MayBeLike/MayBeLike.js';
import Content from './Content/Content.js';

@withStyles(styles)
class AdvisoryDetail {
static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };
 
  render() {
    let title = '资讯库详细 - 人人留学';
    this.context.onSetTitle(title);
    return (
      <section className="advistory-box">
        <div>
            <div className="left article">
                <div id="contentAdvisoryDetail"></div>
                <MayBeLike />
            </div>
            <Recommendation />
            <div className="clear"></div>
        </div>
    </section>
    );
  }
  componentDidMount() {

    $(document).ready(function(){
        var Sysno = getQueryString("id");
        $.ajax({
            url: "http://service.rrliuxue.com/ArticleService/LoadEntityForJS/"+Sysno,
            type: "get",
            dataType: "jsonp",
            async: false,
            jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
            jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
            success: function (json) {
                 React.render(<Content json={json}/>,document.getElementById('contentAdvisoryDetail'));
            },
            error: function (e) {
                console.log(e);
            }
        });
    });

        function getQueryString(name) { 
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
            var r = window.location.search.substr(1).match(reg); 
            if (r != null) return unescape(r[2]); return null; 
        } 
   }

}

export default AdvisoryDetail;