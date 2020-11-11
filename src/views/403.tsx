import React from 'react'
import { Link } from 'react-router-dom'
import { Result, Button } from 'antd';

const NoAuthorized: React.FC<{}> = () => (
    <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
            <Button type="primary">
                <Link to='/index'>Back Home</Link>
            </Button>
        }
    />
);

export default NoAuthorized