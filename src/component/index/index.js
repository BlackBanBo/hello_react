import {Component,Fragment} from 'react'
import EChartsReact from 'echarts-for-react'
import { Divider } from 'antd';
import { Row, Col} from 'antd';
import './mystyle.css';

import ydxx from '../img/ydxx.png'
import sjcj from '../img/sjcj.png'
import sjjh from '../img/sjjh.png'
import zczc from '../img/zczc.png'
import zckf from '../img/zckf.png'
import zcdy from '../img/zcdy.png'


import { MinusOutlined} from '@ant-design/icons';

const style = { background: '#0092ff', padding: '8px 0' };

const iconStyle = {width :'100%',height :'100%',cursor:'pointer'};

class Index extends Component {

  // 折线图1
  getOption1 = () => {
    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }]
    }
    return option;
  }

  // 折线图2
  getOption2 = ()=> {
    const option = {
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      toolbox: {
          feature: {
              saveAsImage: {}
          }
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
          type: 'value'
      },
      series: [
          {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
      ]
  };
  return option;
  }

  // 折线图3
  getOption3 = ()=> {
    const option = {
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {}
      }]
  };
  return option;
  }

  // 折线图4
  getOption4 = ()=> {
    const option = {
      xAxis: {
          type: 'category',
          boundaryGap: false
      },
      yAxis: {
          type: 'value',
          boundaryGap: [0, '30%']
      },
      visualMap: {
          type: 'piecewise',
          show: false,
          dimension: 0,
          seriesIndex: 0,
          pieces: [{
              gt: 1,
              lt: 3,
              color: 'rgba(0, 0, 180, 0.4)'
          }, {
              gt: 5,
              lt: 7,
              color: 'rgba(0, 0, 180, 0.4)'
          }]
      },
      series: [
          {
              type: 'line',
              smooth: 0.6,
              symbol: 'none',
              lineStyle: {
                  color: '#5470C6',
                  width: 5
              },
              markLine: {
                  symbol: ['none', 'none'],
                  label: {show: false},
                  data: [
                      {xAxis: 1},
                      {xAxis: 3},
                      {xAxis: 5},
                      {xAxis: 7}
                  ]
              },
              areaStyle: {},
              data: [
                  ['2019-10-10', 200],
                  ['2019-10-11', 560],
                  ['2019-10-12', 750],
                  ['2019-10-13', 580],
                  ['2019-10-14', 250],
                  ['2019-10-15', 300],
                  ['2019-10-16', 450],
                  ['2019-10-17', 300],
                  ['2019-10-18', 100]
              ]
          }
      ]
  };
  return option;
  }


  render() {
    return (
        <Fragment>
          <Divider/>
          <div className={"body"}>
            {/*六张卡片*/}
            <div className={"row1"}>
              <Row gutter={[20,0]} aligin="middle" justify="space-between">
                <Col className="gutter-row" span={4}>
                  <div>
                    <img src={ydxx} style={iconStyle}></img>
                  </div>
                </Col>
                <Col className="gutter-row" span={4}>
                  <div>
                  <img src={sjcj} style={iconStyle}></img>
                  </div>
                </Col>
                <Col className="gutter-row" span={4}>
                  <div>
                  <img src={sjjh} style={iconStyle}></img>
                  </div>
                </Col>
                <Col className="gutter-row" span={4}>
                  <div>
                  <img src={zczc} style={iconStyle}></img>
                  </div>
                </Col>
                <Col className="gutter-row" span={4}>
                  <div>
                  <img src={zckf} style={iconStyle}></img>
                  </div>
                </Col>
                <Col className="gutter-row" span={4}>
                  <div>
                  <img src={zcdy} style={iconStyle}></img>
                  </div>
                </Col>
              </Row>
            </div>
            {/*四个折线图*/}
            <div className={"row2"}>
              <Row gutter={[20,20]}>
                <Col span={12}>
                  <div className={"row2col"}>
                    <div>
                      <MinusOutlined rotate="90" style={{fontSize:'28px',color:'#7F7F7F'}} />
                      <span className={"chartTitle"}>数据采集趋势</span>
                      <EChartsReact option={this.getOption1()} style={{height:'220px'}}></EChartsReact>
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div className={"row2col"}>
                    <div>
                      <MinusOutlined rotate="90" style={{fontSize:'28px',color:'#7F7F7F'}} />
                      <span className={"chartTitle"}>数据稽核趋势</span>
                      <EChartsReact option={this.getOption2()} style={{height:'218px'}}></EChartsReact>
                    </div>

                  </div>
                </Col>
                <Col span={12}>
                  <div className={"row2col"}>
                    <div>
                      <MinusOutlined rotate="90" style={{fontSize:'28px',color:'#7F7F7F'}} />
                      <span className={"chartTitle"}>数据入湖趋势</span>
                      <EChartsReact option={this.getOption3()} style={{height:'218px'}}></EChartsReact>
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div className={"row2col"}>
                    <div>
                      <MinusOutlined rotate="90" style={{fontSize:'28px',color:'#7F7F7F'}} />
                      <span className={"chartTitle"}>数据开放趋势</span>
                      <EChartsReact option={this.getOption4()} style={{height:'218px'}}></EChartsReact>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

        </Fragment>

    );
  }
}


export default Index;
