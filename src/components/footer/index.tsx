import React from 'react'
import './index.scss'
import { Layout } from "antd";

const { Footer } = Layout;

function Footers() {
    return (
        <Footer>
            <div className='footer'>
                Copyright©2015~2019 CreatedBy zghIvan
            </div>
        </Footer>
    )
}

export default Footers