import React, { Component } from 'react'
import { Layout, Menu } from 'antd'

import Logo from 'component/logo/logo'

const {Header, Content, Footer, Sider} = Layout
const MenuItem = Menu.Item

class IndexSider extends Component{
  render(){
    return(
      <Layout style={{ minHeight: '100vh',maxWidth:'200px' }}>
        <Sider collapsible>
          <Logo></Logo>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <MenuItem>
              Home
            </MenuItem>
            <MenuItem>
              
            </MenuItem>
          </Menu>
        </Sider>
      </Layout>
    )
  }
}

export default IndexSider