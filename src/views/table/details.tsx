import React, { useState, useEffect } from 'react'
import Headerdemo from '../../components/header/headerdemo'
import './details.scss'
import { Card } from 'antd'
import axios from '../../utils/axios'
import { OrderInfo } from './types/index'

function Details() {
    const [orderInfo, setOrderInfo] = useState<OrderInfo>()
    const [map, setMap] = useState<any>()

    useEffect(() => {
        getDetailInfo()
    }, [])

    const getDetailInfo = () => {
        // const id = this.props.match.params.id;
        const id = 123
        axios.get(`/order/detail`, { id: id }).then((res: any) => {
            if (res.code === 200) {
                initMap(res.data);
                setOrderInfo(res.data)
            }
        })
    };

    const initMap = (result: any) => {
        // 创建地图实例
        const vmap = new (window as any).BMap.Map("map-container");
        setMap(vmap)
        //添加控件
        addMapControl();
        //绘制折线图
        drawPolyline(result.position_list);
        //绘制服务区
        drawServiceArea(result.area)
    };
    //添加控件
    const addMapControl = () => {
        //添加缩放和导航控件
        map.addControl(new (window as any).BMap.NavigationControl({ anchor: (window as any).BMAP_ANCHOR_TOP_RIGHT }));
        //添加比例尺控件
        map.addControl(new (window as any).BMap.ScaleControl({ anchor: (window as any).BMAP_ANCHOR_TOP_RIGHT }));
    };
    //绘制折线图
    const drawPolyline = (position_list: any) => {
        const BMap = (window as any).BMap;
        const startPoint = position_list[0];
        const endPoint = position_list[position_list.length - 1];
        //生成起始坐标点
        const startMapPoint = new (window as any).BMap.Point(startPoint.lon, startPoint.lat);
        //定义标注图标
        const startIcon = new BMap.Icon("/imgs/start_point.png", new BMap.Size(36, 42), {
            imageSize: new BMap.Size(36, 42)
        });
        // 生成结束坐标点
        const endMapPoint = new (window as any).BMap.Point(endPoint.lon, endPoint.lat);
        const endIcon = new BMap.Icon("/imgs/end_point.png", new BMap.Size(36, 42), {
            imageSize: new BMap.Size(36, 42)
        });
        // 创建标注
        const startMarker = new (window as any).BMap.Marker(startMapPoint, { icon: startIcon });
        const endMarker = new (window as any).BMap.Marker(endMapPoint, { icon: endIcon });
        // 将标注添加到地图中
        map.addOverlay(startMarker);
        map.addOverlay(endMarker);
        // 初始化地图，设置中心点坐标和地图级别
        map.centerAndZoom(startMapPoint, 10);
        //开启鼠标滚轮缩放
        map.enableScrollWheelZoom(true);

        //生成折线图
        let polylineArr = position_list.map((point: {lon: number, lat: number}) => {
            return new BMap.Point(point.lon, point.lat)
        });
        let polyline = new BMap.Polyline(polylineArr,
            { strokeColor: "#1869AD", strokeWeight: 3, strokeOpacity: 1 }
        );
        map.addOverlay(polyline);
    };
    //绘制服务区
    const drawServiceArea = (area: any) => {
        const BMap = (window as any).BMap;

        let serviceArr = area.map((point: {lon: number, lat: number}) => {
            return new BMap.Point(point.lon, point.lat)
        });
        let polygon = new BMap.Polygon(serviceArr, {
            strokeColor: '#ff0000',
            strokeWeight: 3,
            fillColor: '#ff6700',
            fillOpacity: 0.5
        });
        map.addOverlay(polygon)
    };

    return (
        <div className='order-detail'>
            <Headerdemo />
            <Card>
                <div className="map-wrap" id="map-container"></div>
                <div className="detail-info">
                    <div className="item-title">基础信息</div>
                    <ul>
                        <li>
                            <span className="info-left">用车模式</span>
                            <span className="info-right">{orderInfo?.mode === 1 ? '服务区' : '停车点'}</span>
                        </li>
                        <li>
                            <span className="info-left">订单编号</span>
                            <span className="info-right">{orderInfo?.order_sn}</span>
                        </li>
                        <li>
                            <span className="info-left">车辆编号</span>
                            <span className="info-right">{orderInfo?.bike_sn}</span>
                        </li>
                        <li>
                            <span className="info-left">用户姓名</span>
                            <span className="info-right">{orderInfo?.user_name}</span>
                        </li>
                        <li>
                            <span className="info-left">手机号码</span>
                            <span className="info-right">{orderInfo?.mobile}</span>
                        </li>
                    </ul>
                </div>
                <div className="detail-info">
                    <div className="item-title">行驶轨迹</div>
                    <ul className='info-wrap'>
                        <li>
                            <span className="info-left">行程起点</span>
                            <span className="info-right">{orderInfo?.start_location}</span>
                        </li>
                        <li>
                            <span className="info-left">行程终点</span>
                            <span className="info-right">{orderInfo?.end_location}</span>
                        </li>
                        <li>
                            <span className="info-left">行驶里程</span>
                            <span className="info-right">{orderInfo?.distance + 'KM'}</span>
                        </li>
                    </ul>
                </div>
            </Card>
        </div>
    )
}

export default Details