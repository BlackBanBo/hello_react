import React,{Component} from 'react'
import {PropTypes} from 'prop-types'



export default class Counter extends Component{


    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        incrementAsync: PropTypes.func.isRequired
    }

    // 执行加操作
    increment = ()=> {
        const option_value = this.select.value * 1;  
        /**
         * 使用redux管理状态的方式
         */
        this.props.increment(option_value);
    }

    // 执行减操作
    decrement = ()=> {
        const option_value = this.select.value * 1;
        this.props.decrement(option_value);
    }

    // 奇数则更新状态
    incrementOdd = ()=> {
        const option_value = this.select.value * 1;
        const {count} = this.props;
        if(count % 2 === 1){
            this.props.increment(option_value);
        }
    }

    // 偶数则更新状态
    incrementAsyn = () => {
        const option_value = this.select.value * 1;

        // 改为异步执行增加操作
        this.props.incrementAsync(option_value);
    }


    render (){
        const {count} = this.props;
        return (
            <div>
                <h2>click {count} times</h2>
                <select ref={select => this.select = select}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                &nbsp;
                <button onClick={this.increment}>+</button>
                &nbsp;
                <button onClick={this.decrement}>-</button>
                &nbsp;
                <button onClick={this.incrementOdd}>increment if odd</button>
                &nbsp;
                <button onClick={this.incrementAsyn}>increment async</button>
            </div>
        );
    }
}
