import { Button,Modal } from 'antd';
import TestForm from '../src/component/form/testForm'
import React, { useState } from 'react';


class Demo extends React.Component{

    constructor(){
        super();
        this.state = {show:false};
    }
    handleOk = () => {
        this.setState({show: false});
    }

    handleCancel = () => {
        this.setState({show: false});
    }

    render(){
        return ( 
            <>
                <Button type="primary" onClick={()=>this.setState({show:true})}>新增</Button>
                <Modal title="源端数据配置" visible={this.state.show} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <TestForm/>
                </Modal>
            </>
        );
    }
}
export default Demo;