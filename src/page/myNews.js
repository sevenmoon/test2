import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Badge } from 'antd';

export default class MyNews extends React.Component{

    state ={
        visible:false
    }

    showModal =()=>{
        this.setState({visible:true});
    }
    handleCancel =()=>{
        this.setState({visible:false});
    }
    render (){
        return (
            <div>
                <span onClick ={this.showModal}>
                    我的消息<Badge count={2}/>
                </span>
                <Modal visible ={this.state.visible }
                onCancel = {this.handleCancel}
                onOk = {this.handleCancel}>
                    <p>who are you </p>
                    <p>where am i form </p>
                    <p>where we are </p>
                    <p>where we are </p>
                    <p>where we are </p>
                    <p>where we are </p>
                    <p>where we are </p>
                    <p>where we are </p>
                    <p>where we are </p>
                    <p>where we are </p>
                    <p>where we are </p>
                    <p>where we are </p>
                    <p>where we are </p>
                    <p>where we are </p>
                    <p>where we are </p>
                    <p>where we are </p>
                    <p>where we are </p>
                    <p>where we are </p>
                </Modal>
            </div>
        );
    }
}