import React, { Component } from 'react';
import { Form, Input, Checkbox, Button, Icon } from 'antd';

class Form1 extends React.Component{

    handleSubmit=(e)=>{
        console.log(e);
    }
    render(){
        const {getFieldDecorator} = this.props.form;
        return(
            <div>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Item>
                        {
                            getFieldDecorator('userName',{rules:[{required:true,message:'please input your name '}]})
                            (
                                <Input prefix={<Icon type='user'/>} placeholder='userName'/>
                            )
                        }
                    </Form.Item>
                    <Form.Item>
                        {
                            getFieldDecorator('password',{rules:[{required:true,message:'please input password'}]})
                            (
                                <Input placeholder='password'/>
                            )
                        }
                    </Form.Item>
                    <Form.Item>
                        {
                            getFieldDecorator('remember',{valuePropName:'checked',initalValue:true,})
                            (
                                <Checkbox>remember me</Checkbox>
                            )
                        }
                        <a style={{float:"right"}}>forget password</a>
                        <Button style={{width:'100%'}}>
                            log in
                        </Button>
                         <a>register now!</a>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}(Form.create()(Form1));
export default Form.create()(Form1);        