/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './User.less';
import withStyles from '../../decorators/withStyles';
import $ from 'jquery'
import UserHeader from './UserHeader/UserHeader.js';

@withStyles(styles)
class User {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    render() {
        let title = '个人中心－人人留学';
        this.context.onSetTitle(title);
        return (
            <section className="contentPart">
                <UserHeader />
            </section>
        );
    }
    //dom加载完调用
    componentDidMount(){
        
    }
}

export default User;
