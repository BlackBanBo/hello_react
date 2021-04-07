import {React,Component} from 'react'
import {Tabs} from 'antd';
import { render } from '@testing-library/react';


// 引入子组件
import Message from './message'
import News from './news'

const {TabPane} = Tabs;
class Home extends Component {

    render () {
        return (
            <div>
                <a href="/home/news">
                    News
                </a>
                &nbsp;&nbsp;
                <a href="/home/message">
                  message
                </a>
            </div>
        );
    }

}





export default Home;

