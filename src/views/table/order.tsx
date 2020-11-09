import React from 'react'
import { Form, Button, Select, Input, DatePicker } from 'antd';

const { RangePicker } = DatePicker;

function Order() {
    const [form] = Form.useForm();

    const cityData = [
        { label: '北京', id: 0 },
        { label: '上海', id: 1 },
        { label: '杭州', id: 2 }
    ];
    const orderData = [
        { label: '全部', id: 0 },
        { label: '进行中', id: 1 },
        { label: '已结束', id: 2 }
    ];

    const onFinish = (values: string) => {
        console.log('Success:', values);
    };

    const handleSearch = () => {
        console.log('this.props');
    };

    const onReset = () => {
        form.resetFields()
    };

    const onFill = () => {
        form.setFieldsValue({
            city: '北京',
            order_id: '123456',
            order_date: '',
            order_status: '全部'
        })
    }

    return (
        <Form layout='inline' form={form} onFinish={onFinish}>
            <Form.Item label='城市' name='city' rules={[{ required: true, message: 'Please choose your city!' }]}>
                <Select style={{ width: 180 }} placeholder="city">
                    {
                        cityData.map(item =>
                            <Select.Option value={item.id} key={item.id}>{item.label}</Select.Option>
                        )
                    }
                </Select>
            </Form.Item>
            <Form.Item label='订单编号' name='order_id'>
                <Input />
            </Form.Item>
            <Form.Item label='订单日期' name="order_date" rules={[{ required: true, message: 'Please choose your date!' }]}>
                <RangePicker />
            </Form.Item>
            <Form.Item label='订单状态' name="order_status">
                <Select style={{ width: 100 }} placeholder="orderStatus" allowClear>
                    {
                        orderData.map(item =>
                            <Select.Option value={item.id} key={item.id}>{item.label}</Select.Option>
                        )
                    }
                </Select>
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType="submit" className='btn-mr20' onClick={handleSearch}>查询</Button>
                <Button htmlType="button" onClick={onReset}>重置</Button>
                <Button type="link" htmlType="button" onClick={onFill}>Fill form</Button>
            </Form.Item>
        </Form>
    )
}

export default Order