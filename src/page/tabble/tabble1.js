import React, { Component } from 'react';
import { Divider, Table, Icon } from 'antd';

export default class Tabble1 extends React.Component{
    render(){
        const data =[{
            key:'1',
            name:'girl yif',
            address:'hall world',
            age:'14'
        },{
            key:'2',
            name:'girl yif',
            address:'hall world',
            age:'14'
        },{
            key:'3',
            name:'girl yvaine',
            address:'hall world',
            age:'14'
        }];

        const colums=[{
            title:'Name',
            key:'name',
            dataIndex:'name',
            render:text=> <a href="javascript:;">{text}</a>,
        },{
            title:'Age',
            key:'age',
            dataIndex:'age',
        },{
            title:'Address',
            key:'address',
            dataIndex:'address'
        },{
            title:'Action',
            key:'action',
            dataIndex:'action',
            render:(text,record)=>(
                <span>
                    <a href="javascript:;">Action--{record.name}</a>
                    <Divider type="vertical" />
                    <a href="javascript:;"> more actions<Icon type="down" /></a>
                </span>
            )
        }];



        return(
            <div>
                <Table columns={colums} dataSource={data}/>
            </div>
        )
    }
}