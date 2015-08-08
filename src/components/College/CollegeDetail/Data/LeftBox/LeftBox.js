/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import USAUnData from './USAUnData/USAUnData.js';
import $ from 'jquery';

class LeftBox{
    render() {
        return (
            <div className="left-box" id="leftBox-Data"></div>
        );
    }
    //dom加载完调用
    componentDidMount(){

        $(document).ready(function(){
            $.ajax({
                url: "http://service.rrliuxue.com/UniversitySearchNodeJsService/UniversityExSearch/Country=USA;Type=大学;UniversitySysno=24878",
                type: "get",
                dataType: "jsonp",
                async: false,
                jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
                success: function (json) {
                    console.log(json);
                    React.render(<USAUnData json={json} />, document.getElementById('leftBox-Data'));
                },
                error: function (e) {
                    console.log(e);
                }
            });
        });

    }
}

export default LeftBox;
