import { message } from 'antd';
import React,{Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

  const  messages = [
    {id:1,title:'message001的详情信息'},
    {id:2,title:'message002的详情信息'},
    {id:3,title:'message003的详情信息'},
    {id:4,title:'message004的详情信息'},
];

export default function MessageDetail(props){
    console.log(props);
    const {id} = props.match.params;
    const message = messages.find((m) => m.id===id*1);
    return (
        <ul>
           <li>code: {message.id}</li>
           <li>name: {message.title}</li>
        </ul>
    );
}
