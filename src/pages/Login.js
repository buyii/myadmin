import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import '../App.less';
import * as Api from '../api/login.js'
// v6版本编程导航使用 useNavigate (以下为引入代码)
import {  useNavigate } from "react-router-dom";
import store from '../store/index'
import { setExpire } from '../store/Action'
function Login(props){
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        let result = await Api.login(values)
        console.log(result)
        if(result.success){
            localStorage.setItem('token',result.data.token)
            navigate(`/`);
            store.dispatch(setExpire())
        }
    }
    const register = async () => {
        let data = form.getFieldsValue()
        let result = await Api.register(data)
        console.log(result)
    }
    useEffect(() => {
        // store.dispatch(setExpire())
    })
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
