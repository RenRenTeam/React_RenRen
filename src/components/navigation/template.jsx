// react
import React from 'react';
import ReactRouter from 'react-router';
import Header from '../common/header/index.js';

const render = function() {
    return (
        <div className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle">
                        <span className="sr-only">Menu</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <ReactRouter.Link to="home" className="navbar-brand">hellowor</ReactRouter.Link>
                </div>

                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><ReactRouter.Link to="home">Home</ReactRouter.Link></li>
                        <li><ReactRouter.Link to="other">Other</ReactRouter.Link></li>
                        <li><ReactRouter.Link to="college">College</ReactRouter.Link></li>
                    </ul>
                </div>
            </div>
            <div>
                <Header />
            </div>
        </div>
    );
};

export default render;
