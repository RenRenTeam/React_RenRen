/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './List.less';
import withViewport from '../../../decorators/withViewport';
import withStyles from '../../../decorators/withStyles';
import MainContent from '../MainContent/MainContent.js';
import $ from 'jquery'

@withStyles(styles)
export class List extends React.Component {

    render() {

        var items = this.props.data.map(function (item) {
            return (<MainContent json={item}/>)
        });

        return (
            <div>
                <div className="appenHtml">
                    {items}
                </div>
                <div id="div_next"></div>
            </div>
        );
    }
    componentDidMount() {
        
        $(document).ready(function(){
            
            $(".like").click(function(){

                var $self = $(this);

                //数字加1
                var num = $self.parent().next().find(".num");

                num.text(parseInt(num.text(), 10) + 1);
                
                $self.prop("disabled", true);

            });
        });

    }

   
}

export default List;
