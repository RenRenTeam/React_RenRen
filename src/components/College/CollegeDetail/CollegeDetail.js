/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './CollegeDetail.less';
import withStyles from '../../../decorators/withStyles';

import $ from 'jquery';
import DetailDataA from './Data/DetailDataA/DetailDataA.js';
import DetailDataB from './Data/DetailDataB/DetailDataB.js';
import DetailDataC from './Data/DetailDataC/DetailDataC.js';
import DetailDataD from './Data/DetailDataD/DetailDataD.js';

@withStyles(styles)
class CollegeDetail{
    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };
    render() {
        let title = '院校库详细 - 人人留学';
        this.context.onSetTitle(title);
        return (
            <div id="collegeDetail-Node">
            </div>
        );
    }
    //dom加载完调用
    componentDidMount(){

        $(document).ready(function(){
            var Sysno = getQueryString("id");
            $.ajax({
                url: "http://service.rrliuxue.com/UniversitySearchNodeJsService/UniversitySearchBySysno/Country=JP;Type=大学;Sysno=2085",
                type: "get",
                dataType: "jsonp",
                async: false,
                jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
                success: function (json) {
                    console.log(json);
                    React.render(<DetailDataD json={json} />, document.getElementById('collegeDetail-Node'));
                },



                //美国高中 url: "http://service.rrliuxue.com/UniversitySearchNodeJsService/UniversitySearchBySysno/Country=USA;Type=高中;Sysno=588",
                // success: function (json) {
                //     console.log(json);
                //     React.render(<DetailDataA json={json} />, document.getElementById('collegeDetail-Node'));
                // },

                //美国大学  url: "http://service.rrliuxue.com/UniversitySearchNodeJsService/UniversitySearchBySysno/Country=USA;Type=大学;Sysno=24887",
                // success: function (json) {
                //     console.log(json);
                //     React.render(<DetailDataB json={json} />, document.getElementById('collegeDetail-Node'));
                // },


                //英国大学   url: "http://service.rrliuxue.com/UniversitySearchNodeJsService/UniversitySearchBySysno/Country=UK;Type=大学;Sysno=407",
                // success: function (json) {
                //     console.log(json);
                //     json.content=eval("("+json.content+")");
                //     json.content.classes = unicode(json.content.classes);
                //     console.log(json.content);

                //     React.render(<DetailDataC json={json} />, document.getElementById('collegeDetail-Node'));
                // },
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

export default CollegeDetail;
