/**
 * 包含N个reducer函数的模块
 */

export function couter (state = 0,action){
    console.log('counter()',state,action);
    switch(action.type){
        case 'INCREMENT':
            return  state + action.data
        case 'DECREMENT':
            return state - action.data
        default:
            return state
    }
}