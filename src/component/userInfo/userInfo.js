import React, { Component } from 'react'
import  { Layout, Card, List, Form, Input, Icon, Button, DatePicker, Radio } from 'antd'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
 
import AvatarSelect from 'component/avatarSelect/avatarSelect'
import {update} from 'reduxs/user.redux'

const ListItem = List.Item
const CardGrid = CardGrid
const {TextArea} = Input
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

@connect(
  state=>state,
  {update}
)

class UserInfo extends Component{
  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.form.validateFields((err,values)=>{
      if (!err) {
        // console.log('获得表单内容: ',values)
        this.props.update(values)
      }
    });
  }
  render(){
    // console.log(this.props)
    // console.log(this.props.user)
    // this.props.user
    // console.log(data)
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { 
          span: 4
         },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { 
          span: 5,
          offset: 1
         },
      },
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 18,
          offset: 5,
        },
      },
    }
    const gridStyle = {
      width: '25%',
      textAlign: 'center',
    }
    // console.log(this.props)
    const FormItem = Form.Item
    const {getFieldDecorator} = this.props.form
    let data = []
    const {nickname,birthday,desc,sex,avatar} = this.props.user
    // console.log(avatar)
    const redirect = this.props.user.redirectTo
    // console.log(this.props.user)
    return(
      <Layout>
        {redirect?(<Redirect to={redirect}></Redirect>):null}
        <Card title="个人信息" style={{minHeight:'100vh'}} bordered={false}>
          <Form onSubmit={this.handleSubmit}>
            <FormItem {...formItemLayout} label="头像">
              {getFieldDecorator('avatar',{
                rules:[{required:true,message:'请选择头像'}],
                initialValue:avatar
              })(
                <AvatarSelect></AvatarSelect>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="昵称">
              {getFieldDecorator('nickname',{
                rules:[{required:true,message:'请输入昵称'}],
                initialValue:nickname
              })(
                <Input></Input>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="个人简介">
              {getFieldDecorator('desc',{
                rules:[{required:false,message:'请输入简介'}],
                initialValue:desc
              })(
                <TextArea style={{width:'400px',height:'150px'}}></TextArea>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="性别">
              {getFieldDecorator('sex',{
                rules:[{required:true,message:'请选择性别'}],
                initialValue:sex
              })(
                <RadioGroup>
                  <RadioButton value="1">男</RadioButton>
                  <RadioButton value="2">女</RadioButton>
                  <RadioButton value="0">保密</RadioButton>
                </RadioGroup>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="生日">
              {getFieldDecorator('birthday',{
                rules:[{required:true,message:'请选择生日'}],
                initialValue:moment(birthday)
              })(
                <DatePicker></DatePicker>
              )}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                修改
              </Button>
            </FormItem>
          </Form>
        </Card>
      </Layout>
    )
  }
}

UserInfo = Form.create({})(UserInfo)

export default UserInfo