import React, { Component } from 'react'
import { Card, Form, Input, Icon, Checkbox, Button, Alert } from 'antd'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { login, cleanMsg } from 'reduxs/user.redux'
import './login.css'

@connect(
  state=>state.user,
  {login,cleanMsg}
)

class Login extends Component{
  componentWillUnmount(){
    this.props.cleanMsg()
  }
  handleSubmit=(e)=>{
    //取消默认动作
    e.preventDefault()
    this.props.form.validateFields((err,values)=>{
      if (!err) {
        // console.log('获得表单内容: ',values)
        this.props.login(values)
      }
    })
  }
  register=()=>{
    this.props.history.push('/register')
  }
  render(){
    // console.log(this.props.form)
    const FormItem = Form.Item
    const {getFieldDecorator} = this.props.form
    const redirect = this.props.redirectTo
    const msg = this.props.msg
    return (
      <div className="sgin-up-bg">
        {redirect?(<Redirect to={redirect}></Redirect>):null}
        <Card title="登录" className="sgin-up-card">
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('username',{
                rules:[{required:true,message:'请输入用户名'}]
              })(
                <Input
                  prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)'}}/>}
                  placeholder="Username"
                ></Input>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{required:true,message:'请输入密码'}],
              })(
                <Input
                  prefix={<Icon type="lock" style={{color:'rgba(0,0,0,.25)'}}/>}
                  placeholder="Password"
                  type="password"
                ></Input>
              )}
            </FormItem>
            {msg?(<Alert message={msg} type="error" showIcon closable />):null}
            <FormItem>
              {getFieldDecorator('remember',{
                valuePropName:'checked',
                initialValue:true,
              })(
                <Checkbox>记住密码</Checkbox>
              )}
              <a className="login-form-forgot">忘记密码</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登陆
              </Button>
              <Button type="primary" onClick={this.register}id="to-register-button">
                注册
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

//Form.create将表单包装起来，组件会带有this.props.form属性
Login = Form.create({})(Login)

export default Login