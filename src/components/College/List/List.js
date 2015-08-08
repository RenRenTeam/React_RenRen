/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './List.less';
import withStyles from '../../../decorators/withStyles';
import Item from '../Item/Item.js';


@withStyles(styles)
class List extends React.Component{

    constructor(props) {

        super(props);
    }
    
    render() {
        var items;
        var country = this.props.country;
        var school = this.props.school;
        if(this.props.DataSource instanceof Array){
            items = this.props.DataSource.map(function (item) {
                return (<Item json={item} country={country} school={school}/>)
            });            
         }

        return (
                <div>  
                    <div>               
                        <ul className="compuUl">
                            {items}
                        </ul>
                        <div className="clear"></div>
                    </div>
                </div>
        );
    }
}

export default List;
