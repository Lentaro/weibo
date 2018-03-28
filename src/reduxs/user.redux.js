import axios from 'axios'

import { getRedirectPath } from '@/util'

const ERROR_MSG = 'ERROR_MSG'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const LOAD_DATA = 'LOAD_DATA'

const initState={
  //是否完成登陆
  redirectTo:'',
  username:'',
  nickname:'',
  _id:'',
  avatar:'',
  desc:''
}

export function user(state=initState,action){
  switch(action.type){
    case LOAD_DATA:
      return {...state,...action.payload}
        case AUTH_SUCCESS:
          return {...state,msg:'',...action.payload,redirectTo:getRedirectPath(action.payload)}
        case ERROR_MSG:
          return {...state,msg:action.msg}
        default:
          return state
    }
}

function authSuccess(data){
  console.log(data)
  return {type:AUTH_SUCCESS,payload:data}
}

function errorMsg(msg){
  return {msg,type:ERROR_MSG}
}

//将获取到的用户信息放入redux
export function loadData (userInfo){
  return {type:LOAD_DATA,payload:userInfo}
}

export function login ({username,password}){
  return async(dispatch)=>{
    // console.log(username,password)
    const res = await axios.post(
      '/user/login',
      {username,password}
    )
    if(res.status===200&&res.data.code===0){
      const data = res.data.data
      dispatch(
        authSuccess({username,nickname:data.nickname,id:data._id})
      )
    }else {
      dispatch(errorMsg(res.data.msg))
    }
  }
}

export function register({username,password,nickname}){
  return async(dispatch)=>{
    // console.log(username,password,nickname)
    const res = await axios.post(
      '/user/register',
      {username,password,nickname}
    )
    if(res.status===200&&res.data.code===0){
      dispatch(
        authSuccess({username,nickname:res.data.nickname,id:res.data._id})
      )
    }else {
      dispatch(errorMsg(res.data.msg))
    }
  }
}