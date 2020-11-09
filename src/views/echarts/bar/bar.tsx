import React, {Component} from 'react'
// import ReactEcharts from 'echarts-for-react';

class Echarts extends Component {

    getOption = {
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['周一', '周二', '周三', '周四', '周四', '周五', '周六','周日'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'骑行人次',
                type:'bar',
                barWidth: '60%',
                data:[18000, 15000, 12000, 14000, 16000, 19000, 22000,17000]
            }
        ]
    };

    render() {
        return (
            <div className='echarts-bar'>
                {/*<ReactEcharts*/}
                {/*    option={this.getOption}*/}
                {/*/>*/}
            </div>
        )
    }
}

export default Echarts