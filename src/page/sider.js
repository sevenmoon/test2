import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { browserHistory,  Link } from 'react-router-dom'  //引入路由函数

export class SiderComponent extends React.Component{
    state = {
        key:1
    }
    handleClick=()=>{

    }
    render(){
        return (
            <div>
                <Menu 
                style={{ width: 256,height:'90vh',overflow: 'auto',minWidth:256}}
 
                onChange = {this.getValue}
                    mode="inline"
                    onClick ={this.handleClick}>
                    <SubMenu title ="ui组件">
                       <Menu.Item key='1'><Link to='/tabble'>表格</Link> </Menu.Item>
                        <Menu.Item key='2'><Link to ='/label'> 标签页 </Link></Menu.Item>
                        <SubMenu title ="表单 and 轮播">
                            <Menu.Item key='3'><Link to ='/form'>表单</Link> </Menu.Item>
                            <Menu.Item key='4'><Link to='/carousel'>轮播</Link> </Menu.Item>
                        </SubMenu>
                        <SubMenu title='网络操作请求'>
                             <Menu.Item key='5'><Link to='shop_home'> 获取商品</Link></Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}