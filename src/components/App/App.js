/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './App.less';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import Header from '../Header';
import Footer from '../Footer';

import IndexPage from '../IndexPage';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import NotFoundPage from '../NotFoundPage';


//免费办理
import FreeGuide from '../FreeGuide';
import StudySolution from '../FreeGuide/StudySolution';
//公开课
import OpenClass from '../OpenClass/OpenClass';
//咨询库
import AdvisoryLibrary from '../AdvisoryLibrary';
import AdvisoryDetail from '../AdvisoryLibrary/AdvisoryDetail';
//院校库
import College from '../College/College';
import CollegeDetail from '../CollegeDetail/CollegeDetail';
//国家页面
import AUS from '../FourCountryPage/AUS';
import Jp from '../FourCountryPage/JP';
import USA from '../FourCountryPage/USA';
import UK from '../FourCountryPage/UK';

import Loading from '../Loading/loading';

const pages = { IndexPage, LoginPage, RegisterPage, 
  NotFoundPage,FreeGuide,StudySolution,OpenClass,AdvisoryLibrary,
  AdvisoryDetail,College,CollegeDetail,Jp,USA,UK,AUS,Loading };

@withContext
@withStyles(styles)
class App {

  static propTypes = {
    path: PropTypes.string.isRequired
  };

  componentDidMount() {
    window.addEventListener('popstate', this.handlePopState);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.path !== nextProps.path;
  }

  render() {
    let component;
    //console.log(this.props.path);
    var path = this.props.path;
    if(path.indexOf('?') > -1){
        path = path.substr(0,path.indexOf('?'));
        //console.log(path);
    }
    console.log(this.props.path.indexOf('CollegeDetail'))

    switch (path) {
        case '/':
            component = <IndexPage />;
            break;
        case '/about':
        case '/privacy':
            let page = AppStore.getPage(this.props.path);
            component = React.createElement(pages[page.component], page);
            break;
        case '/contact':
            component = <ContactPage />;
            break;
        case '/login':
            component = <LoginPage />;
            break;
        case '/register':
            component = <RegisterPage />;
            break;
        case '/FreeGuide':
            component = <FreeGuide />;
            break;        
        case '/OpenClass':
            component = <OpenClass />;
            break;
        case '/AdvisoryLibrary':
            component = <AdvisoryLibrary />;
            break;
        case '/AdvisoryDetail':
            component = <AdvisoryDetail />;
            break;
        case '/College':
            component = <College />;
            break;
        case '/Jp':
            component = <Jp />;
            break;
        case '/USA':
            component = <USA />;
            break;
        case '/UK':
            component = <UK />;
            break;
        case '/AUS':
            component = <AUS />;
            break;
        default :
            component = <IndexPage />;
            break;
    }
    if(this.props.path == "/"){
        return (
          <div>
            <Loading />
          </div>
        );
    }else if(this.props.path.indexOf('StudySolution') > -1){
        return (
          <div>
            <Header />
            <StudySolution />
            <Footer />
          </div>
        );
    }else if(this.props.path.indexOf('CollegeDetail') > -1){
        return (
          <div>
            <Header />
            <CollegeDetail />
            <Footer />
          </div>
        );
    }else{
        return component ? (
          <div>
            <Header />
            {component}
            <Footer />
          </div>
        ) : <NotFoundPage />;
    }
  }
  componentDidMount(){
       echo.init({
        offset: 100,
        throttle: 250,
        unload: false,
        callback: function (element, op) {
          console.log(element, 'has been', op + 'ed')
        }
      });
    }
  handlePopState(event) {
    AppActions.navigateTo(window.location.pathname, {replace: !!event.state});
  }

}

export default App;

