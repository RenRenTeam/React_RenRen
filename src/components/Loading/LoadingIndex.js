/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './LoadingIndex.less';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import Header from '../Header';
import Footer from '../Footer';
import $ from 'jquery';

import IndexPage from '../IndexPage';
@withStyles(styles)
class LoadingIndex {
    render() {
        return (
            <div>
                <Header />
                <IndexPage />
                <Footer />
            </div>
        );
    }
    componentDidMount() {
        $(".base-Effect").hide();
    }
}

export default LoadingIndex;