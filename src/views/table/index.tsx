import React, { useState, useEffect, useCallback } from 'react'
import './index.scss'
import { Button, Card, Table, message, Modal, Space } from 'antd';
import axios from '../../utils/axios'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Order from './order'
import { Pagination, RowSelection, SelectedItem, EndItem, Loading, Column } from './types/index'
import { ColumnsType } from 'antd/es/table';

function OrderList() {
    const [listData, setListData] = useState<Column[]>([])
    const [pageSize, setPageSize] = useState(10)
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState<Loading>({
        spinning: true,
        tip: '数据正在拼命加载中',
        size: 'large'
    })
    const [selectedIndex, setSelectedIndex] = useState<string[] | number[]>([])
    const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null)
    const [endItem, setEndItem] = useState<EndItem>()
    const [visible, setVisible] = useState<boolean>(false)

    const columnsData: ColumnsType<Column> = [
        {
            title: '订单编号',
            dataIndex: 'order_sn',
            key: 'order_sn',
        }, {
            title: '车辆编号',
            dataIndex: 'bike_sn',
            key: 'bike_sn',
        }, {
            title: '用户名',
            dataIndex: 'user_name',
            key: 'user_name',
        }, {
            title: '手机号',
            dataIndex: 'mobile',
            key: 'mobile',
        }, {
            title: '里程',
            dataIndex: 'distance',
            key: 'distance',
        }, {
            title: '行驶时长',
            dataIndex: 'total_time',
            key: 'total_time',
        }, {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            render: (text: number) => <span>{text === 1 ? '进行中' : '已结束'}</span>
        }, {
            title: '开始时间',
            dataIndex: 'start_time',
            key: 'start_time',
        }, {
            title: '结束时间',
            dataIndex: 'end_time',
            key: 'end_time',
        }, {
            title: '订单金额',
            dataIndex: 'total_fee',
            key: 'total_fee',
        }, {
            title: '实付金额',
            dataIndex: 'user_pay',
            key: 'user_pay',
        }, {
            title: '操作',
            render: (value: any, record: Column) => (
                <>
                    <Space size="middle">
                        <Button type="link" onClick={() => onEdit(record)}><EditOutlined />编辑</Button>
                        <Button type="link" onClick={() => onDelete(record)}><DeleteOutlined />删除</Button>
                    </Space>
                </>
            )
        }
    ]
    const [columns, setColumns] = useState(columnsData)


    // 表格分页功能的配置
    const pagination: Pagination = {
        current: 1,
        pageSize: 10,
        total: total,
        onChange: (page, pageSize) => {
            pagination.current = page;
            getTableData()
        }
    };
    // 表格选择功能的配置
    const rowSelection: RowSelection = {
        type: 'radio',
        selectedRowKeys: selectedIndex,
        onChange: (selectedRowKeys, selectedRows) => {
            setSelectedItem(selectedRows)
            setSelectedIndex(selectedRowKeys)
        }
    };


    //获取表格数据
    const getTableData = () => {
        axios.get('/order/list', pagination.current).then((res: any) => {
            if (res.code === 200) {
                const listData = res.data.list.map((item: any, index: number) => {
                    item.key = index;
                    return item
                })
                setListData(listData)
                setTotal(res.data.total)
                setLoading({
                    ...loading,
                    spinning: false
                })
            }
        })
    }

    useEffect(() => {
        getTableData()
    }, [])

    // 结束订单弹出框
    const handleDone = () => {
        if (selectedItem) {
            axios.get('/order/ebike_info', { id: selectedItem[0].id }).then((res: any) => {
                if (res.code === 200) {
                    setEndItem(res.data)
                    setVisible(true)
                }
            })
        } else {
            message.info('请先选择一项订单')
        }
    };
    //用户确认结束订单
    const handleOk = () => {
        setVisible(false)
        if (selectedItem) {
            axios.post('/order/finish_order', { id: selectedItem[0].id }).then((res: any) => {
                if (res.code === 200) {
                    message.success(res.data);
                    getTableData()
                }
            })
        }
    };

    //用户取消结束订单
    const handleCancel = () => {
        setVisible(false)
    };

    //查看订单详情
    const handleDetail = () => {
        if (!selectedItem) {
            message.info('请选择一项订单！')
        } else {
            window.open(`/order/detail/${selectedItem[0].id}`, '_blank')
        }
    };

    //编辑
    const onEdit = (record: Column) => {
        console.log(record)
    };
    // 删除
    const onDelete = (record: Column) => {
        console.log(record)
    };

    return (
        <div>
            <Card>
                <Order />
            </Card>
            <Card>
                <Button type='primary' className='btn-mr20' onClick={handleDetail}>订单详情</Button>
                <Button type='dashed' onClick={handleDone}>结束订单</Button>
            </Card>
            <Card>
                <Table columns={columns}
                    dataSource={listData}
                    pagination={pagination}
                    loading={loading}
                    rowSelection={rowSelection}
                />
            </Card>
            <Modal title='Modal' visible={visible}
                onOk={handleOk} onCancel={handleCancel}
            >
                <ul className='ul-data'>
                    <li>
                        <span className='car-num li-title'>车辆编号：</span>
                        {endItem?.bike_sn}
                    </li>
                    <li>
                        <span className='car-num li-title'>剩余电量：</span>
                        {endItem?.battery}
                    </li>
                    <li>
                        <span className='car-num li-title'>行程开始时间：</span>
                        {endItem?.start_time}
                    </li>
                    <li>
                        <span className='car-num li-title'>当前位置：</span>
                        {endItem?.location}
                    </li>
                </ul>
            </Modal>
        </div>
    )
}


export default OrderList