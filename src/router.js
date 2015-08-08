/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import Router from 'react-routing/src/Router';
import http from './core/http';
import App from './components/App';
import College from './components/College/College';
import CollegeDetail from './components/College/CollegeDetail';

const router = new Router(on => {

  on('*', async (state, next) => {
    const component = await next();
    return component && <App context={state.context}>{component}</App>;
  });

  on('/College', async () => <College />);

  on('*', async (state) => {
    const content = await http.get(`/api/content?path=${state.path}`);
    return content && <ContentPage {...content} />;
  });

  //on('error', (state, error) => state.statusCode === 404 ?
  //  <App context={state.context} error={error}><NotFoundPage /></App> :
  //  <App context={state.context} error={error}><ErrorPage /></App>);
  //});

export default router;