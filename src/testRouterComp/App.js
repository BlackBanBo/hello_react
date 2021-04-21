import React from 'react'

import Home from './home'
import Setting from './setting'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

function App(){
    return (
        <div>
            <Link to="/index">首页</Link> &nbsp;&nbsp;
            <Link to="/setting">设置</Link>
        </div>
    );
}

const route = (
    <Router>
        <Route path="/" component={App}/>
        <Route path="/index" exact component={Home}/>
        <Route path="/setting" exact component={Setting}/>
    </Router>
)

export default route

