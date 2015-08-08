#  人人留学 - node.rrliuxue.com
`npm install`

##事件处理 
```javascript
<div className="login-button" onClick={this.login.bind(this)}><div className="icon">登 录</div></div>`

login(){
  ..... 
}
```

##新增页面
`App.js`
```javascript
import IndexPage from ../IndexPage 
const pages = { IndexPage }
case /AUS:
      component = <AUS />;
      break;
```

##页面跳转
```javascript
import Link from '../../utils/Link';
```

```html
<a href="/AUS" onClick={Link.handleClick}>澳洲</a>
```
如果不加上 `onClick={Link.handleClick}` 则会刷新

##列表 + 分页 + 跳转详情  
##### [https://github.com/RenRenTeam/RenRen_College](https://github.com/RenRenTeam/RenRen_College "Heading link")
