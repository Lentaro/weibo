import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Route, Switch } from 'react-router-dom'

import Logo from 'component/logo/logo'
import UserInfo from 'component/userInfo/userInfo'

const {Header, Content, Footer, Sider} = Layout
const MenuItem = Menu.Item

function Home (){
  return <h2>Home</h2>
}
// function UserInfo (){
//   return <h2>UserInfo</h2>
// }
function Message (){
  return <h2>Message</h2>
}

class Dashboard extends Component{
  handleJump = (e) => {
    const {item,key,keyPath} = e
    // console.log(keyPath)
    // console.log(this.props.history)
    if(this.props.location.pathname!==key){
      // console.log(1)
      this.props.history.push(key)
    }
  }
  render(){
    const list = [
      {
        path:'/home',
        text:'主页',
        icon:'home',
        component:Home
      },
      {
        path:'/message',
        text:'消息',
        icon:'message',
        component:Message
      },
      {
        path:'/userinfo',
        text:'账号',
        icon:'user',
        component:UserInfo
      },
    ]
    // console.log(list[0].path)
    // console.log(this.props)
    const { pathname } = this.props.location
    const page = list.find(v=>v.path===pathname)
    // console.log(page)
    return page?(
      <Layout style={{minHeight: '100vh'}} >
        <Sider collapsible>
          <Logo></Logo>
          {/*defaultSelectedKeys的值预计为数组*/}
          <Menu
            theme="dark"
            defaultSelectedKeys={[pathname]}
            mode="inline"
            onClick={this.handleJump}
          >
            {list.map(v=>(
              <MenuItem key={v.path}>
                <Icon type={v.icon}></Icon>
                <span>{v.text}</span>
              </MenuItem>
            ))}
          </Menu>
        </Sider>
        <Layout style={{minHeight: '100vh',padding:'0 200px 0 50px'}}>
          <Switch>
            {list.map(v=>(
              <Route key={v.path} path={v.path} component={v.component}></Route>
            ))}
          </Switch>
        </Layout>
      </Layout>
    ):null
  }
}

export default Dashboard