// react
import React from 'react';
import ReactRouter from 'react-router';
import classNames from 'classNames';

import './main.css';
const render = function() {
    return (
        <div>
            <div className={classNames(this.props.className, 'div')} role="navigation">
            <div className="nav sticky-div-pinned">
                <div className="startBorder"></div>
                <div className="nav-box">
                    <div className="div-box">
                        <div className="logo">
                            <ReactRouter.Link to="home">Home</ReactRouter.Link>
                            <img src="{require('./logo.png')}" alt="人人留学" />
                        </div>
                        <div className="language">
                            <div className="line">
                                <ReactRouter.Link to="USA">USA<img src="{require('./USA.png')}" />美国</ReactRouter.Link>
                                <ReactRouter.Link to="USA">USA<img src="{require('./UK.png')}" />英国</ReactRouter.Link>
                            </div>
                            <div>
                                <ReactRouter.Link to="USA">USA<img src="{require('./JP.png')}" />日本</ReactRouter.Link>
                                <ReactRouter.Link to="USA">USA<img src="{require('./AUS.png')}" />澳洲</ReactRouter.Link>
                            </div>
                        </div>
                        <div className="menu-box">
                            <div id="indexMenu"></div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        </div>
    );
};

export default render;
