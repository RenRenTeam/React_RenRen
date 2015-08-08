/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Body.less';
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import List from '../List/List.js';
import $ from 'jquery'

@withStyles(styles)
class Body {

    componentWillMount() {
    }
    
    render() {
        
        return (
          <div>
            <div className="tabs">
                <div data-content="#all" data-value="全部" className="item selected">全部</div>
                <div data-content="#UK" data-value="英国" className="item">英国</div>
                <div data-content="#USA" data-value="美国" className="item">美国</div>
                <div data-content="#AUS" data-value="澳洲" className="item">澳洲</div>
                <div data-content="#JP" data-value="日本" className="item full">日本</div>
                <div className="clear"></div>
            </div>
            <div className="search_input_dv">
                <form action="#" method="post" autocomplete="off" id="searchForm">
                    <input type="text" placeholder="请输入" id="q" />
                    <button type="submit"></button>
                    <div className="clear"></div>
                </form>
            </div>
            <div className="category-box">
                <ul id="ulCategory">
                    <li className="active">热门资讯</li>
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
                        <List />
                    </div>
                </div>
            </div>
          </div>
        );
  }
  componentDidMount() {
    $(document).ready(function(){

        $(".tabs").find(".item").click(function(){

            $(this).addClass("selected").siblings().removeClass("selected");

            SendAjax();
        });


        $("#ulCategory").find("li").click(function(){

            $(this).addClass("active").siblings().removeClass("active");

            SendAjax();
        });
    });
  }
}

export default Body;