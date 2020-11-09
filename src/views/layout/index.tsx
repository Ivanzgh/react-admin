import React from 'react';
import Sider from '../../components/Sider/index'
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import { Layout, Breadcrumb } from 'antd'
import './index.scss'
import { Link } from "react-router-dom";

const { Content } = Layout;

function Layouts(props: { children: object }) {
    const { children } = props

    return (
        <section className="home-main">
            <Layout>
                <Sider />
                <Layout>
                    <Header />
                    <Content>
                        <Breadcrumb>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <Link to='/index'>Application Center</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <Link to='/table'>Application List</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>An Application</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className='content-wrap'>
                            <div className='content'>
                                {children}
                            </div>
                        </div>
                    </Content>
                    <Footer />
                </Layout>
            </Layout>
        </section>
    );
}

export default Layouts;
