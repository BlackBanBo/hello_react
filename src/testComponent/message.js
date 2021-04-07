import React,{Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

// 引入子组件
import MessageDetail from './message-detail'



class Message extends Component {
    constructor (props){
        super(props);
        this.state = {messages:[]};
    
    }

    // 模拟发送ajax请求，异步获取数据
    componentDidMount() {
        setTimeout(() => {
            const  messages = [
                {id:1,title:'message001'},
                {id:2,title:'message002'},
                {id:3,title:'message003'},
                {id:4,title:'message004'},
            ];
        this.setState({messages})    
        },1000) 
    }

    render () {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((item,index)=>(
                            <li key={index}>
                                <a href={`/home/message/detail/${item.id}`}>{item.title}</a>
                                &nbsp;&nbsp;
                                <button>查看详情</button>
                            </li>
                        ))
                    }
                </ul>
                <Route path="/home/message/detail/:id" component={MessageDetail}/>
            </div> 
        );
    }
}
export default Message;