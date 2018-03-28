import React, { Component } from 'react'
import  { Layout, Card, } from 'antd'
import { connect } from 'react-redux'

@connect(
  state=>state.user
)

class UserInfo extends Component{
  render(){
    console.log(this.props)
    return(
      <Layout>
        <Card title="个人信息" style={{minHeight:'100vh'}} bordered={false}>
          111
        </Card>
      </Layout>
    )
  }
}

export default UserInfo