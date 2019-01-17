import React, { Component } from 'react';

import {  Layout, Row, Col, Input, Avatar, Dropdown, Menu, Icon, Tooltip } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

import MyNews from './myNews';
import { SiderComponent } from './sider';

import { BrowserRouter as Router,Route } from 'react-router-dom'
import TabbleIndex from './tabble/tabbleIndex';
import LabelIndex from './tabPane/labelIndex';
import FormIndex from './form/formIndex';
import CarouselIndex from './carousel/carouselIndex';
import ShopIndex from './shop/shopIndex';

const { Header, Footer, Sider, Content  } = Layout;
const menu =(
              <Menu>
                <Menu.Item>
                <a> my blog</a>
                </Menu.Item>
                
                <Menu.Item>
                <a> my github</a>
                </Menu.Item>
                <Menu.Item>
                 <MyNews/>
                 
                </Menu.Item>
              </Menu>);

export default class PageIndex extends Component {
  render() {
    return (
      <div>
        
      <Router>

      
      <Layout>
        <Header style={{color:'#fff',textAlign:'center',fontWeight:'bold'}}>
          <Row>
            <Col span = {10}>
            React + Antd Demo
            </Col>
            <Col span={8}> <Input placeholder="please input what you want" /></Col>
            <Col span ={6}>
                 
                  <Avatar style ={{backgroundColor:'#fff000',marginRight:10} }icon = "user"/>
                  <Dropdown overlay={menu}>
                    <span className="ant-dropdown-link" href="#" style={{color:'#fff',cursor:'pointer'}}>
                      Hi-Li <Icon type ="down"/>
                    </span>
                  </Dropdown>           
            </Col> 
          </Row>
        </Header>
        <Layout>
          <Sider>
            <SiderComponent  />
          </Sider>
         
          <Content style={{marginLeft:'5%',height:'86vh',paddingRight:'2%',overflow:'auto',textAlign:'center'}}>
          
          <div>

<Route path="/tabble" component={TabbleIndex}/>

<Route path="/label" component={LabelIndex}/>
<Route path='/form' component={FormIndex}/>
<Route path='/carousel' component={CarouselIndex}/>
<Route path='/shop_home' component={ShopIndex }/>

    
  </div>

         
       </Content>

        </Layout>
        
        <Footer style={{backgroundColor:'#001529',position:'fixed',bottom:0,width:'100vw',minWidth:'1000px',textAlign:'center',fontWeight:'bold',color:'#fff'}}>
                        2018/05/31  - react + Ant Design - gitHub地址：
                        <a href="https://github.com/Hi-Sen/React-Antd-demo-one" target="_blank">https://github.com/Hi-Sen/React-Antd-demo-one</a>     
                    </Footer>
        
      </Layout>
      </Router>
      
      </div>
    );
  }
}


