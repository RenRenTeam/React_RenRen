# Material-UI
## Installation

Material-UI is available as an [npm package](https://www.npmjs.org/package/material-ui).
```sh
npm install material-ui
```
npm安装后,你会发现所有的。jsx / src文件夹和文件的编译版本/ lib文件夹中。

### React-Tap-Event-Plugin
一些组件使用(react-tap-event-plugin)(https://github.com/zilverline/react-tap-event-plugin)
监听触摸事件。这种依赖性是临时的,就会消失一旦v1.0释放反应。在那之前,
确保注入这个插件在你的应用程序的开始。
```js
var injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();
```

### Roboto Font
一定要包括(Roboto)(http://www.google.com/fonts/specimen/Roboto)字体在您的项目。
这里有(一些说明)(http://www.google.com/fonts # UsePlace:使用/托收:Roboto:400300500)如何在您的项目中包

```
@import url(http://fonts.googleapis.com/css?family=Roboto:400,300,500);

font-family: 'Roboto', sans-serif;
```
## Usage

一旦material-ui包含在您的项目,您可以使用组件:
```js
/** MyAwesomeReactComponent.jsx */

var React = require('react'),
  mui = require('material-ui'),
  ThemeManager = new mui.Styles.ThemeManager(),
  RaisedButton = mui.RaisedButton;

var MyAwesomeReactComponent = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return (
        <RaisedButton label="Default" />
    );
  }

});

module.exports = MyAwesomeReactComponent;

```

### Theme

**请注意,v0.8.0以来,您还需要定义一个主题组件开始工作。* *指令实现和使用主题,访问我们的 [documentation](http://material-ui.com/#/customization/themes).    
末端有Demo


## Customization

Material-UI components have their styles defined inline. There are two approaches to overriding these styles:

* Override individual component styles via the `style` prop
* Define a Theme to apply overarching style changes

This allows you to override variables used by components without having to modify material-ui source files directly.

## Examples
有两个项目,你可以看看帮助您入门。
可以发现的第一个项目   [example folder](https://github.com/callemall/material-ui/tree/master/example).
这是一个基本项目,展示了如何使用material-ui组件在您自己的项目。

第二个项目是实际的文档。
这是一个更复杂的项目,但会给每个组件的例子。
[查看](https://github.com/callemall/material-ui/tree/master/docs) 构建指令。

```
let React = require('react');
let mui = require('mui');
let ThemeManager = new mui.Styles.ThemeManager();

class OuterMostParentComponent extends React.Component {
  // Important!
  getChildContext() { 
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }
};

// Important!
OuterMostParentComponent.childContextTypes = {
  muiTheme: React.PropTypes.object
};

module.exports = OuterMostParentComponent;
```
##### 重要的是:
上面的代码使用Material-UI时是必需的。没有它,Material-UI组件将无法获得默认主题,不会呈现结果。请记住,用户负责更新CSS类与主题同步属性,因为Material-UI组件只使用内联样式。

### Overriding Theme Variables
如果你想改变一个特定页面的主题,包括下面的代码在页面说。这个页面上定义的所有组件连同孩子将使用您的主题覆盖。[切换按钮](http://material-ui.com/#/components/menus) 在菜单页面是一个这样的例子。注意这些变化不流血在同级页面等 [Switches page.](http://material-ui.com/#/components/switches)

```
let React = require('react');
let mui = require('mui');
let ThemeManager = new mui.Styles.ThemeManager();

class MenusPage extends React.Component {

  getChildContext() { 
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  componentWillMount() {
    ThemeManager.setComponentThemes({
      toggle: {
        thumbOnColor: String,
        trackOnColor: String,
      }
    });
  }
}

MenusPage.childContextTypes = {
  muiTheme: React.PropTypes.object
};
```

### Giving Custom React Components Access to Theme
如果你只是想创建一个反应组件访问主题,包括下面的代码在你的组件的类定义。这是有效的,因为前面提到的使用代码插入在最外层组件。[CodeExample](https://github.com/callemall/material-ui/blob/master/docs/src/app/components/code-example/code-example.jsx) 使用ThemeManager定制组件的一个例子。
```
CustomReactComponent.contextTypes = {
  muiTheme: React.PropTypes.object
}
```
### Custom Themes

看到一个示例包含所有主题变量,我们light-theme checkout。下面的代码定义了结构需要有一个有效的自定义主题。属性注意,如果没有定义的自定义主题,默认将中定义什么是我们的
[主题](https://github.com/callemall/material-ui/blob/master/src/styles/themes/light-theme.js)

```
let CustomTheme = {
  getPalette() {
    return {
      primary1Color: String,
      primary2Color: String,
      primary3Color: String,
      accent1Color: String,
      accent2Color: String,
      accent3Color: String,
      textColor: String,
      canvasColor: String,
      borderColor: String,
      disabledColor: String
    };
  },
  getComponentThemes(palette) {
    return {
      appBar: {
        color: String,
        textColor: String,
        height: Number
      },
      button: {
        height: Number,
        minWidth: Number,
        iconButtonSize: Number
      },
      checkbox: {
        boxColor: String,
        checkedColor: String,
        requiredColor: String,
        disabledColor: String,
        labelColor: String,
        labelDisabledColor: String
      },
      datePicker: {
        color: String,
        textColor: String,
        calendarTextColor: String,
        selectColor: String,
        selectTextColor: String,
      },
      dropDownMenu: {
        accentColor: String,
      },
      flatButton: {
        color: String,
        textColor: String,
        primaryTextColor: String,
        secondaryTextColor: String,
        disabledColor: String
      },
      floatingActionButton: {
        buttonSize: Number,
        miniSize: Number,
        color: String,
        iconColor: String,
        secondaryColor: String,
        secondaryIconColor: String,
        disabledColor: String,
        disabledTextColor: String
      },
      leftNav: {
        width: Number,
        color: String,
      },
      menu: {
        backgroundColor: String,
        containerBackgroundColor: String,
      },
      menuItem: {
        dataHeight: Number,
        height: Number,
        hoverColor: String,
        padding: Number,
        selectedTextColor: String,
      },
      menuSubheader: {
        padding: Number,
        borderColor: String,
        textColor: String,
      },
      paper: {
        backgroundColor: String,
      },
      radioButton: {
        borderColor: String,
        backgroundColor: String,
        checkedColor: String,
        requiredColor: String,
        disabledColor: String,
        size: Number,
        labelColor: String,
        labelDisabledColor: String
      },
      raisedButton: {
        color: String,
        textColor: String,
        primaryColor: String,
        primaryTextColor: String,
        secondaryColor: String,
        secondaryTextColor: String,
        disabledColor: String,
        disabledTextColor: String
```

# 总结：
*	新建空项目，先把UI 获取下来编译 
	*	 `npm install material-ui`
	*	 `npm install`
	*	 `gulp`
*	 把node_modules\material-ui  拷贝到项目下
```

var React = require('react'),
  mui = require('material-ui'),
  ThemeManager = new mui.Styles.ThemeManager(),
  RaisedButton = mui.RaisedButton;

var MyAwesomeReactComponent = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return (
        <RaisedButton label="Default" />
    );
  }

});

module.exports = MyAwesomeReactComponent;

```