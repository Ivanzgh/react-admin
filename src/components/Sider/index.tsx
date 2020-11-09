import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import { Menu, Layout } from 'antd'
import { HomeOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux'

const { Sider } = Layout;

const menuOptions = [
    { key: 'index', name: '首页', icon: <HomeOutlined />, path: '/index' },
    { key: 'table', name: '表格', icon: <AppstoreOutlined />, path: '/table' },
    { key: 'form', name: '表单', icon: <AppstoreOutlined />, path: '/form' },
    { key: 'todos', name: 'Todos', icon: <AppstoreOutlined />, path: '/todos' },
    {
        key: 'sub1', name: '图例', icon: <SettingOutlined />, children: [
            { key: 'bar', name: '条形图', path: '/echarts/bar' },
            { key: 'pie', name: '饼状图', path: '/echarts/pie' }
        ]
    }
];

interface RootState {
    collapsed: boolean;
}

function Nav() {
    const collapsed = useSelector((state: RootState) => state.collapsed)
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className='nav-wrap'>
                {/*onClick={this.clickMenuItem}*/}
                <div className="logo">React</div>
                <Menu mode="inline" theme='dark' defaultSelectedKeys={['1']}>
                    {
                        menuOptions.map(item => {
                            if (item.children) {
                                return (
                                    <Menu.SubMenu key={item.key} icon={item.icon} title={item.name}>
                                        {
                                            item.children.map(i => {
                                                return (
                                                    <Menu.Item key={i.key}>
                                                        <Link to={i.path}>{i.name}</Link>
                                                    </Menu.Item>
                                                )
                                            })
                                        }
                                    </Menu.SubMenu>
                                )
                            }
                            return (
                                <Menu.Item key={item.key} icon={item.icon}>
                                    <Link to={item.path}>{item.name}</Link>
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </div>
        </Sider>
    )
}

export default Nav