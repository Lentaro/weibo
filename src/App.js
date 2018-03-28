import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import '@/App.css'
import reducers from '@/reducer'
import Login from 'container/login/login'
import Register from 'container/register/register'
import AuthRoute from 'component/authRoute/authRoute'
import Dashboard from 'component/dashboard/dashboard'

const store = createStore(reducers, 
  compose(
    applyMiddleware(thunk),
    //chrome监控redux的调试工具
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))
  
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div id="app-box">
            <AuthRoute></AuthRoute>
            {/* 验证路由 */}
            <Switch>
              <Route path='/login' component={Login}></Route>
              <Route path='/register' component={Register}></Route>
              <Route component={Dashboard}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
