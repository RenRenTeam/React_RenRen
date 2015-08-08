/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Body.less';
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import List from '../List/List.js';
import $ from 'jquery'

@withStyles(styles)
export class Header extends React.Component {
    componentWillMount() {
    }
    render() {
        return (
            <div>
                <div className="tabs" id="advTabs">
                    <div data-content="" data-value="全部" className="item selected">全部</div>
                    <div data-content="UK" data-value="英国" className="item">英国</div>
                    <div data-content="USA" data-value="美国" className="item">美国</div>
                    <div data-content="AUS" data-value="澳洲" className="item">澳洲</div>
                    <div data-content="JP" data-value="日本" className="item full">日本</div>
                    <div className="clear"></div>
                </div>
                <div className="search_input_dv">
                    <div id="searchForm">
                        <input type="text" placeholder="请输入" id="q"/>
                        <button type="submit" id="advSubBt"></button>
                        <div className="clear"></div>
                    </div>
                </div>
                <div className="category-box">
                    <ul id="ulCategory">
                        <li data-value="" className="active">热门资讯</li>
                        <li data-value="教育新闻">教育新闻</li>
                        <li data-value="中考资讯">中考资讯</li>
                        <li data-value="高中留学">高中留学</li>
                        <li data-value="本科留学">本科留学</li>
                        <li data-value="硕士留学">硕士留学</li>
                        <li data-value="签证指南">签证指南</li>
                        <li data-value="申请技巧">申请技巧</li>
                        <li data-value="国外生活">国外生活</li>
                    </ul>
                </div>
                <div className="tab-content">
                    <div id="all" className="open-class-tab-content-box tab-content-box">
                        <div className="listUl">
                            <div id="ul_body">

                            </div>
                            <div id="read-more">
                                <font id="read-more-font">查看更多</font><i className="icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
            

    componentDidMount() {

        var pageNum = 1;

        getPar();

        $("#read-more").click(function(){

            pageNum++;

            $("#read-more-font").html("加载中...");

            var country = $("#advTabs .selected").attr("data-content");

            var val = $("#q").val();

            var tag = $("#ulCategory").find(".active").attr("data-value");

            sendAjax(country,val,tag,pageNum);

        });


        $("#advTabs .item").click(function(){
            pageNum = 1;
            $("#advTabs").find(".item").removeClass("selected");
            $(this).addClass("selected");
            getPar();
        });

         $("#ulCategory").find("li").click(function () {
            pageNum = 1;
            if (!$(this).hasClass("active")) {
                $(this).parent().find("li").removeClass("active");
                $(this).addClass("active");
                getPar();
            }
        });

         $("#advSubBt").click(function(){
            pageNum = 1;
            getPar();
         });

         function getPar(){

            var country = $("#advTabs .selected").attr("data-content");

            var val = $("#q").val();

            var tag = $("#ulCategory").find(".active").attr("data-value");

            sendAjax(country,val,tag,pageNum);
         }

         function sendAjax(country,val,tag,pageNum){
            if(!tag){
                tag="";
            }
            if(!country){
                country="";
            }
            if(!val){
                val="";
            }

            $.ajax({
                url: "http://service.rrliuxue.com/ArticleService/SearchForJS/"+country+","+val+","+tag+","+pageNum+",5",
                type: "get",
                dataType: "jsonp",
                async: false,
                jsonp: "callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                jsonpCallback: "success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
                success: function (json) {
                    console.log(json);
                    if(json.length <= 0){
                        $("#read-more").hide();
                        $("#ul_body").hide();
                        return false;
                    }
                    $("#read-more").show();
                    $("#ul_body").show();
                    if(pageNum == 1){
                        if(json[0].TotalCount <= 5){
                            $("#read-more").hide();
                            $("#ul_body").html("");
                            React.render(<List data={json} />,document.getElementById('ul_body'));
                        }
                        else{
                            $("#ul_body").html("");
                            React.render(<List data={json} />,document.getElementById('ul_body'));
                        }                    
                    }else{
                        if(json[0].TotalCount - $("#ul_body").find(".eachGetHref").length <= 5){
                            $("#read-more").hide();
                        }
                        React.render(<List data={json} />,document.getElementById('div_next'));
                        $("#div_next").removeAttr("id");
                        
                    }
                    $("#read-more-font").html("查看更多");

                            
                    console.log(country+","+val+","+tag+","+pageNum+",5");
                },
                error: function (e) {
                    console.log(e);
                }
            });
        }
        
    }
}

export default Header;
