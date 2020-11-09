import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Img from './6.jpg'
import './index.scss'

class NotMatch extends Component {

    render() {
        return (
            <div className='notmatch'>
                <div className='info'>
                    你的页面走丢了，哈哈哈哈。。。
                </div>
                <div className='desc'>
                    <ul>
                        <li>
                            <Link to='/layout/home'>回首页找找</Link>
                        </li>
                        <li>
                            <Link to='/layout/home'>不找了，爱咋滴咋滴</Link>
                        </li>
                    </ul>
                </div>
                <img src={Img} className='img-info' alt="" />

            </div>
        )
    }
}
export default NotMatch