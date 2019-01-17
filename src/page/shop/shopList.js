import React, { Component } from 'react';
import { Button } from "antd/lib/radio";
import { Row, Col } from 'antd';

export default class ShopList extends React.Component{
    render(){
        return (
            <div>
                {
                    this.props.storeArr.map((item,index)=>{
                        return <Row
                            key ={index}
                            style={{
                                marginBottom:'10px',
                                backgroundColor:'#fff000',
                                height:'176px'
                            }}>

                             <Col span={6}>
                                <img  style = {{width:'100%'}} src={item.Picture} />
                             </Col>
                             <Col span={12} style={{
                                 textAlign:'left',
                                 paddingLeft:50,
                                 lineHeight:'24px',
                                 marginTop:'30px'
                             }}>
                                <div>{item.Name}</div>
                                <div>原价：{item.OldPointPrice}</div>
                                <div>现价：{item.PointPrice}</div>
                                <div>销量：{item.SoldNum}</div>
                             </Col>
 
                             <Col span={6} style={{marginTop:'130px'}}>
                                <Button onClick={()=>{
                                   // this.props.callback?this.props.callback(item.ID):''
                                }} >查看商品详情</Button>
                             </Col>
                        </Row>
                    })
                }
            </div>
        )
    }
}