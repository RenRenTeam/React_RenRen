/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Header.less';
import withStyles from '../../../decorators/withStyles';

import $ from 'jquery';
import UKTiaoJian from './UKTiaoJian/UKTiaoJian.js';
import USATiaoJian from './USATiaoJian/USATiaoJian.js';
import JPTiaoJian from './JPTiaoJian/JPTiaoJian.js';
import AUSTiaoJian from './AUSTiaoJian/AUSTiaoJian.js';



require('rc-radio/assets/index.css');
var Radio = require('rc-radio');

@withStyles(styles)
class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {Country:this.props.country};
    }
    //国家选项卡切换
   CountryClick(e){

        this.setState({
            Country:e.target.innerHTML
        });
        var co ="";
        if(e.target.innerHTML == "美国"){
            co = "USA";
        }if(e.target.innerHTML == "英国"){
            co = "UK";
        }if(e.target.innerHTML == "日本"){
            co = "JP";
        }if(e.target.innerHTML == "澳洲"){
            co = "AUS";
        }
        this.props.submitSearch(1,co,"","","");
   }
   
    render() {
        return (
            <div>
                <section className="college-filter">
                    <div id="filterForm" >
                        <div className="tabs-box">
                            <div className="tabs">
                                <div className={this.state.Country=="美国"? "item selected" : "item"} data-content="#USA" data-country="USA" onClick={this.CountryClick.bind(this)}>美国</div>
                                <div className={this.state.Country=="英国"? "item selected" : "item"} data-content="#UK" data-country="UK" onClick={this.CountryClick.bind(this)}>英国</div>
                                <div className={this.state.Country=="日本"? "item selected" : "item"} data-content="#JP" data-country="JP" onClick={this.CountryClick.bind(this)}>日本</div>
                                <div className={this.state.Country=="澳洲"? "item selected" : "item"} data-content="#AUS" data-country="AUS" onClick={this.CountryClick.bind(this)}>澳洲</div>
                                <div className="clear"></div>
                            </div>
                            <div className="filter-search">
                                <div className="input-container">
                                    <input type="text" id="txtSearch" placeholder="院校名称" />
                                </div>
                                <div className="button-container">
                                    <button id="collegeSearch" onClick={this.props.submitSearch}>搜索</button>
                                </div>
                                <div className="clear"></div>
                            </div>
                            {this.state.Country == "美国" ? <USATiaoJian submitSearch={this.props.submitSearch}/> : 
                            this.state.Country == "英国" ? <UKTiaoJian submitSearch={this.props.submitSearch}/> :
                            this.state.Country == "澳洲" ? <AUSTiaoJian submitSearch={this.props.submitSearch}/> : <JPTiaoJian submitSearch={this.props.submitSearch}/>}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
    componentDidMount(){
    }
}

export default Header;
