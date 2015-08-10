# HReact-starter-kit

### 初始化
	npm init

### 使用 npm 安装模块
	npm install <module> -g -save

```
.
├── /build/                     # The folder for compiled output
├── /docs/                      # Documentation files for the project
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /api/                   # REST API / Relay endpoints
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /components/            # React components
│   ├── /constants/             # Constants (action types etc.)
│   ├── /content/               # Static content (plain HTML or Markdown, Jade, you name it)
│   ├── /core/                  # Core components (Flux dispatcher, base classes, utilities)
│   ├── /decorators/            # Higher-order React components
│   ├── /public/                # Static files which are copied into the /build/public folder
│   ├── /stores/                # Stores contain the application state and logic
│   ├── /templates/             # HTML templates for server-side rendering, emails etc.
│   ├── /utils/                 # Utility classes and functions
│   ├── /app.js                 # Client-side startup script
│   └── /server.js              # Server-side startup script
│── gulpfile.babel.js           # Configuration file for automated builds
│── package.json                # The list of 3rd party libraries and utilities
│── preprocessor.js             # ES6 transpiler settings for Jest
└── webpack.config.js           # Webpack configuration for bundling and optimization
```
## Rest API 添加 ##
####  src/api/content.js 
     
	 router.get('/', async (req, res, next) => {
	  try {
	    let path = req.query.path;
	
	    if(path == '/systemuser/getall')
	    {
	      res.status(200).send("Rest API ");
	      return;
	    }
	
	   ......
#### 请求地址
	
	[http://localhost:3000/api/content?path=/systemuser/getall]

####  不足点
		* 服务接口未实现更细化的功能，比如：加密，请求token , 访问记录等...   安全暂时先依靠操作系统防火墙

### 继承
```
 class TestDemo extends React.Component 
```
上一版本如果不集成的话 `componentWillMount` `componentDidMount` 操作不了

## 新加页面
	* components\{page}  创建对应页面文件夹
	* {page}.js 和 pagckage.json 文件不可少
	* {page}.css 可选

### 	{Page}.js 引用 CSS 
```
import styles from './ContentPage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class ContentPage {
```

### 不可少因素
		* Title 
		  static contextTypes = {
		      onSetTitle: PropTypes.func.isRequired
		   };

			render() {
			    this.context.onSetTitle(this.props.title);
			    return (
			      <div className="ContentPage">
			        ....
			      </div>
			    );
			  }
###  React事件生命周期
```
	componentWillMount(){    
	    console.log(1);
	  }
	
	  render() {
	    console.log(2);
	  }
	
	  componentDidMount(){
	    console.log(3);
	  }
```
* 当然不止这些，日常接触到的几乎都能满足我们的业务需求了。。 
* `WillMount` 渲染前 
	不能操作 `state` 

	可以获取 `Props`
	定义变量类型
```
  static propTypes = {
    age : PropTypes.int
  }
```
 *  ![Alt text](./1439135743315.png)  

``` 
componentWillMount(){   
    this.props.age = 10;  //报错
    console.log(this.props.age);
  }
```

 *  一般我们再这事件里面只做初始的工作，比如某些项的初始值绑定，父控件给属性上绑值就行。
 *  `<List DataScource={this.AjaxData.bind(this)}/>`
 *  当然，第三方插件 如jQuery 也是不能操作的
 * `render()` 渲染
### State 与  Props  核心对象










更多资料 https://github.com/enaqx/awesome-react

[![Build](https://travis-ci.org/jaredhanson/locomotive.png)](https://travis-ci.org/jaredhanson/locomotive)
[![Coverage](https://coveralls.io/repos/jaredhanson/locomotive/badge.png)](https://coveralls.io/r/jaredhanson/locomotive)
[![Quality](https://codeclimate.com/github/jaredhanson/locomotive.png)](https://codeclimate.com/github/jaredhanson/locomotive)
[![Dependencies](https://david-dm.org/jaredhanson/locomotive.png)](https://david-dm.org/jaredhanson/locomotive)
[![Tips](http://img.shields.io/gittip/jaredhanson.png)](https://www.gittip.com/jaredhanson/)


[http://locomotivejs.org](http://locomotivejs.org/)

Locomotive is a framework that brings structure and MVC patterns to web
applications using [Node](http://nodejs.org) and [Express](http://expressjs.com/).

## Installation

    $ npm install locomotive

## Quick Start

`lcm`, the command line interface to Locomotive, can be used to generate a
starter application.  To use it, install Locomotive globally.

    $ npm install locomotive -g
    
Next, create an application and install dependencies.

    $ lcm create hello
    $ cd hello
    $ npm install
    
Start the server.

    $ lcm server

The application is available at [localhost:3000](http://localhost:3000).

Start the server with node debug mode

	$ lcm server --debug (node --debug mode)
	$ lcm server --debug-brk (node --debug-brk mode)

Then you can use debug tools like [node-inspector](https://github.com/dannycoates/node-inspector) to debug your application as usual.

## Guide

The [Locomotive Guide](http://locomotivejs.org/guide/) is the official source
for documentation, and is a handy reference to have available when developing
web applications powered by Locomotive.

## Datastore Adapters

<table>
  <thead>
    <tr><th>Adapter</th><th>Description</th><th>Developer</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="https://github.com/jaredhanson/locomotive-mongoose">Mongoose</a></td><td>Mongoose ODM adapter.</td><td></td></tr>
  </tbody>
</table>

## Tests

    $ npm install
    $ make test

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

(The MIT License)

Copyright (c) 2011 Jared Hanson

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
