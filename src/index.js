import React from 'react';
import ReactDOM from 'react-dom';
import Index from './component/index/index'
import Demo from './containers/demo'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import store from './component/redux/store'

import route from '../src/testRouterComp/App'



// ReactDOM.render(
//     (
//     <Provider store={store}>
//         <Demo />
//     </Provider>
//     ),
//     document.getElementById('root')
//  );

render(
    route,document.getElementById('root')
);