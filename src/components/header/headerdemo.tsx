import React from 'react';
import './headerdemo.scss'
import { Link } from 'react-router-dom'

function Headerdemo() {
    return (
        <div className='header-demo-wrap clearfix'>
            <div className="header-left fl">
                <span>共享单车后台页面</span>
            </div>
            <div className="header-right fr">
                <span className='username'>
                    Welcome,<strong>zgh</strong>
                </span>
                <span className="logout">
                    <Link to='/common/login'>logout</Link>
                </span>
            </div>
        </div>
    )
}

export default Headerdemo;
