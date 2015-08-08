/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './List.less';
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import MainContent from '../MainContent/MainContent.js';
import $ from 'jquery'

@withStyles(styles)
class List {

    //先定义一个数组
    componentWillMount() {
        var rssArray = [
            {"title":"业界资讯","des":"业界资讯","id":1},
            {"title":"36氪","des":"36氪","id":2},
            {"title":"techcrunch","des":"IT新闻","id":3},
            {"title":"品玩","des":"品味把玩","id":4},
            {"title":"极客公园","des":"极客早知道","id":5},
            {"title":"爱范儿","des":"爱范儿","id":6}
        ];

        //存储值
        this.setState({"employees":rssArray})
    }

    render() {

        //取值 并 循环
        var mainContent = this.state.employees.map(function (item) {
            return (
                <MainContent title={item.title} des={item.des} id={item.id}/>
                );
        });

        return (
            <ul>  
                {mainContent}
            </ul>
        );
    }
    
}

export default List;
