import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import './App.less';
import Layout from './Layout/index'
import {adminRouter,mainRouter} from './router'
function App(){
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

export default App;
