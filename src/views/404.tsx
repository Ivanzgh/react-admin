import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Result } from 'antd';

const NoFoundPage: React.FC<{}> = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary">
        <Link to='/index'>Back Home</Link>
      </Button>
    }
  />
);

export default NoFoundPage