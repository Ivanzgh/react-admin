import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import { useSelector, useDispatch } from 'react-redux'
import { Layout, Avatar, Dropdown, Menu } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, DownOutlined, PoweroffOutlined } from '@ant-design/icons';

const { Header } = Layout;

const menu = (
    <Menu>
        <Menu.Item>
            <Link to='/layout/login'>个人中心</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <Link to='/layout/login'><PoweroffOutlined />退出</Link>
        </Menu.Item>
    </Menu>
);

interface RootState {
    collapsed: boolean;
}

function Headers() {
    const [name, setName] = useState('zgh')
    const [time, setTime] = useState('')
    const collapsed = useSelector((state: RootState) => state.collapsed)
    console.log(collapsed);
    
    const dispatch = useDispatch()

    const formatDate = (unix: number) => {
        const fixedZero = (num: number) => {
            return num >= 10 ? ('' + num) : ('0' + num)
        }
        const date = new Date(unix);
        const year = date.getFullYear();
        const month = fixedZero(date.getMonth() + 1);
        const day = fixedZero(date.getDate());
        const hour = fixedZero(date.getHours());
        const minute = fixedZero(date.getMinutes());
        const second = fixedZero(date.getSeconds());
        return `${year}-${month}-${day} ${hour}:${minute}:${second}`
    }

    const getTime = () => {
        let unixDate = new Date().getTime();
        const timeStr = formatDate(unixDate)
        setTime(timeStr)
    }

    const toggle = () => dispatch({type: 'COLLAPSED_TOGGLE'});

    useEffect(() => {

        const timeId = setInterval(() => getTime(), 1000)

        return () => clearInterval(timeId)
    })

    return (
        <Header>
            <div className='header-wrap'>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: toggle,
                })}
                <ul className='header-right'>
                    <li>{time}</li>
                    <li className='user-detail'>
                        <Dropdown overlay={menu} placement="bottomRight" arrow>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <Avatar icon={<UserOutlined />} />
                                <strong className='username'>{name}</strong>
                                <DownOutlined />
                            </a>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        </Header>
    )
}

export default Headers
