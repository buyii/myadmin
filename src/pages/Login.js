import React from 'react';
import { Form, Input, Button } from 'antd';
import '../App.less';
import axios from 'axios';
import * as Api from '../api/login.js'
// v6版本编程导航使用 useNavigate (以下为引入代码)
import {  useNavigate } from "react-router-dom";
function Login(props){
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        let result = await Api.login(values)
        console.log(result)
        if(result.code===0){
            localStorage.setItem('token',result.data.token)
            navigate(`/`);
        }
    }
    const register = async () => {
        let result = await Api.queryTaskList()
        console.log(result)
        console.log(1)
        // axios.get('http://192.168.19.39:8088/api/queryTaskList')
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    }
  return (
    <div className='login-warp'>
        <div className='login-title'>登录</div>
        <Form
            name="normal_login"
            className="login-form"
            form={form}
            initialValues={{
                username: '',
                password:''
            }}
            onFinish={onFinish}
            >
            <Form.Item name="username"  >
                <Input placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item name="password"  >
                <Input type="password" placeholder="请输入密码" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                <Button type="primary" htmlType="button" onClick={register} className="login-form-button">注册</Button>
            </Form.Item>
        </Form>
    </div>
  );
}

export default Login;