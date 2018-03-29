import React, { Component } from 'react'
import { Card, Icon } from 'antd'

import './avatarSelect.css'

const CardGrid = Card.Grid

class AvatarSelect extends Component{
  constructor(props){
    super(props)
    const value = this.props.value || {}
    const onChange = this.props.onChange
    // console.log(value,onChange) 
    this.state={
      avatar:value
    }
  }
  componentWillReceiveProps(nextProps) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      const value = nextProps.value;
      this.setState({
        avatar:value
      });
    }
  }
  handleChange = v => {
    // console.log(v)
    this.setState({
      avatar:v
    })
    this.props.onChange(v)
  }
  render(){
    const list = ['aliwangwang','apple','coffee','github']
    return (
      <div>
        <Card className="avatar-select">
          {list.map(v=>(
            <CardGrid key={v} className="select-item" onClick={()=>this.handleChange(v)}>
              <Icon type={v} className="avatar"></Icon>
            </CardGrid>
          ))}
          当前头像为：<CardGrid className="show-item"><Icon className="avatar" type={this.state.avatar}></Icon></CardGrid>
        </Card>
      </div>
    )
  }
}

export default AvatarSelect