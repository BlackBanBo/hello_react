export const increment = (number) => ({type: 'INCREMENT',data: number})
export const decrement = (number) => ({type: 'DECREMENT',data: number})
export const incrementAsync = (number) => {
    return dispatch => {
        // 异步的代码
        setTimeout(() => {
            // 1s之后才去分发一个增加的action
            dispatch(increment(number))
        },1000)
    }
}