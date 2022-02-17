import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from "react-router-dom";
import {
    HomeOutlined,
    UserOutlined
  } from '@ant-design/icons';
// const { SubMenu } = Menu;
function SiderMenu(){
    let { pathname } = useLocation()
    let selectedKeys = [pathname]
  return (
    <Menu
        selectedKeys={selectedKeys}
        mode="inline"
        // theme="dark"
        inlineCollapsed={true}
    >
        <Menu.Item key="/" icon={<HomeOutlined />}>
            <Link to="/">首页</Link>  
        </Menu.Item>
        <Menu.Item key="/about" icon={<UserOutlined />}>
            <Link to="/about">About</Link>  
        </Menu.Item>
    </Menu>
  );
}

export default SiderMenu;
