import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { loadData } from 'reduxs/user.redux'
import { connect } from 'react-redux'
@withRouter
@connect(
  null,
  {loadData}
)
class AuthRoute extends Component{
  componentDidMount(){
    const publicUrl = ['/login','/register']
    // console.log(this.props) 
    const path = this.props.location.pathname
    // 在publicUrl中寻找符合path的项，若找到第一个，返回其索引，若找不到返回-1
    if(publicUrl.indexOf(path)>-1){
        return null
    }
    const auth = (async () => {
      const res = await axios.get('/user/info')
      if(res.status===200){
        if(res.data.code===0){
          // console.log(res.data)
          this.props.loadData(res.data.doc)
        }else{
          this.props.history.push('/login')
        }
      }
    })()
    // console.log(this.props)
  }
  render(){
    // console.log(this.props.history)
    return null
  }
}

export default AuthRoute