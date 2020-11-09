import React, {Component} from 'react'
// import ReactEcharts from 'echarts-for-react';

class Echarts extends Component {

    option = {
        title : {
            text: '所占市场比例',
            subtext: '共享单车',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['OFO','摩拜单车','哈罗单车','优拜单车','小蓝单车']
        },
        series : [
            {
                name: '所占比例',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:9300, name:'OFO'},
                    {value:7500, name:'摩拜单车'},
                    {value:3800, name:'哈罗单车'},
                    {value:3600, name:'优拜单车'},
                    {value:1200, name:'小蓝单车'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };


    render() {
        return (
            <div>
                {/*<ReactEcharts*/}
                {/*    option={this.option}*/}
                {/*/>*/}
            </div>
        )
    }
}

export default Echarts