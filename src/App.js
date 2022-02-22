import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from 'react-redux'
import './App.less';
import Layout from './Layout/index'
import {adminRouter,mainRouter} from './router'
function App(props){
  console.log(props,new Date())
  // RequireAuth 组件相当于一个拦截器，是否返回被拦截的组件要听他的
  function RequireAuth({ children }) {
    const authed = localStorage.getItem('token')
    const expire = !props.expire
    return authed&&expire ? ( // 判断 localstorage 中是否有token
      children
    ) : (
      <Navigate to="/login" replace={true} /> // 跳转到登录
    );
  }

  return (
      <Routes>
        <Route path="/" element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
          }>
        {
          adminRouter.map((item, index) => {
            if(index === 0){
              return <Route exact key={index} index element={<item.component />} />
            }else{
              return <Route exact key={index} path={item.path} element={<item.component />} />
            }
          })
        }
        </Route>
        {
          mainRouter.map((item, index) => {
            return <Route exact key={index} path={item.path} element={<item.component />} />
          })
        }
      </Routes>
  );
}
function mapStateToProps(state) {
  return { expire: state.userReducer.expire }
}
export default connect(mapStateToProps)(App);
