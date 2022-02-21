import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from 'react-redux'
import './App.less';
import Layout from './Layout/index'
import {adminRouter,mainRouter} from './router'
import { useNavigate } from "react-router-dom";
function App(props){
  let navigate = useNavigate();
  console.log(props,new Date())
  if(props.path){
    navigate(props.path)
  }

  // RequireAuth 组件相当于一个拦截器，是否返回被拦截的组件要听他的
  function RequireAuth({ children }) {
    const authed = localStorage.getItem('token')

    return authed ? ( // 判断 localstorage 中是否有token
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
  return { path: state.userReducer.path }
}
export default connect(mapStateToProps)(App);
