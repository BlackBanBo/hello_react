import {createStore,applyMiddleware} from 'redux'
import * as reducer from  './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


// 生成一个store
const store = createStore(reducer.couter,composeWithDevTools(applyMiddleware(thunk)))
// 打印输出store 看一下
console.log('store()',store)

export default store