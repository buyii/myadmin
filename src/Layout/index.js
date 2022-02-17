import { Layout } from 'antd';
import { Outlet } from "react-router-dom";

import SiderMenu from './SiderMenu'
const { Header, Content, Footer, Sider } = Layout;

function Index(props){
    
  return (
    <Layout className="layout">
        <Sider>
            <div className='logo'></div>
            <SiderMenu/>
        </Sider>
        <Layout>
            <Header style={{ padding: '20px',textAlign: 'center' }}>
            </Header>
            <Content style={{ padding: '50px',textAlign: 'center' }}>
                <Outlet />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    </Layout>
  );
}

export default Index;
