import React, { Component } from 'react';
import { Table } from 'antd';


export default class Tabble2 extends React.Component{
    render(){
        const data =[{
            key:'1',
            name:'alice',
            address:'hall world',
            age:'14'
        },{
            key:'2',
            name:'yif',
            address:'hall world',
            age:'14'
        },{
            key:'3',
            name:'yvaine',
            address:'hall world',
            age:'14'
        }];
        
        const colums=[{
            title:'Name',
            dataIndex:'name',
            key:'name',
        },{
            title:'Address',
            dataIndex:'address',
            key:'address',
        },{
            title:'Age',
            dataIndex:'age',
            key:'age',
        }];
        
        return (
            <div>
                <Table columns={colums} dataSource={data}></Table>
            </div>
        );
    }
}