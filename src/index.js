import React from 'react';
import ReactDOM from 'react-dom';
import Index from './component/index/index'
import Demo from './containers/demo'
import {Provider} from 'react-redux'

import store from './component/redux/store'




ReactDOM.render(
    (
    <Provider store={store}>
        <Demo />
    </Provider>
    ),
    document.getElementById('root')
 );