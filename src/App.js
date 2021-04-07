import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'

// 引入组件
import Home from './testComponent/home'
import SourceDataManage from './component/sourceDataManage/index'
import MessageDetail from './testComponent/message-detail'
import News from './testComponent/news'
import Message from './testComponent/message'

export default function App(){
  return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/sourceManage">源端数据管理</Link>
            </li>
          </ul>
          <hr/>
          <Switch>
            <Route exact path="/home">
              <Home/>
            </Route>
            <Route path="/sourceManage">
              <SourceDataManage/>
            </Route>
            <Route path="/home/news">
              <News/>
            </Route>
            <Route path="/home/message">
              <Message/>
            </Route> 
            <Redirect to="/home"/>
          </Switch>
        </div>
      </Router>
  );
}



