/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Content.less';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery'
import AppActions from '../../../actions/AppActions';
import ALL from './ALL/ALL.js';
import UK from './UK/UK.js';
import AUS from './AUS/AUS.js';
import USA from './USA/USA.js';
import JP from './JP/JP.js';
@withStyles(styles)
class Content {

    render() {
        return (
            <section className="open-class-box">
                <h2>公开课</h2>
                <div className="description">分享课程，传承智慧</div>
                <div className="tabs-box" id="openClassTabs">
                    <div className="tabs">
                        <div className="item selected" onClick={this.openAll}>全部</div>
                        <div className="item" onClick={this.openUk}>英国</div>
                        <div className="item" onClick={this.openUSA}>美国</div>
                        <div className="item" onClick={this.openASU}>澳洲</div>
                        <div className="item full" onClick={this.openJP}>日本</div>
                        <div className="clear"></div>
                    </div>
                    <div className="tab-content" id="openClassTabsContent"></div>
                </div>
            </section>
        );
    }
    componentDidMount() {

        $(document).ready(function(){

            React.render(<ALL />, document.getElementById('openClassTabsContent'));

            $("#openClassTabs .tabs .item").click(function(){
                $("#openClassTabs .tabs .item").removeClass("selected");
                $(this).addClass("selected");
            });
        });
    }
    openUk(){
        React.render(<UK />, document.getElementById('openClassTabsContent'));
    }

    openAll(){
        React.render(<ALL />, document.getElementById('openClassTabsContent'));
    }

    openUSA(){
        React.render(<USA />, document.getElementById('openClassTabsContent'));
    }

    openASU(){
        React.render(<AUS />, document.getElementById('openClassTabsContent'));
    }

    openJP(){
        React.render(<JP />, document.getElementById('openClassTabsContent'));
    }

}

export default Content;
