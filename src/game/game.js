import React, { Component } from 'react';
import { Layout, Row, Col, Input, Button, Carousel, Icon, Dropdown, Menu, Switch } from 'antd';
import headpng from '../image/head.png';
import emailpng from '../image/email.png';

import messagepng from '../image/message.png';
import weibopng from '../image/weibo.png';
import zhifubaopng from '../image/zhifubao.png';
import './page.css';

import { BrowserRouter as Router,Route } from 'react-router-dom'
import ArticalList from './articalList';
import ArticalInfo from './articalInfo';
import ConnectMe from './connectme';
import PageContent from './pageContent';
import ArticalPage from './articalPage';

const { Header, Footer, Sider, Content  } = Layout;
export default class BlogPage extends React.Component
{
    
    

    render(){
 
        return(
            <Router >
                <div>
                <Layout>
                    <Header style={{backgroundColor:'#fff',height:"190px"}} theme='light'>
                        <Row style={{marginTop:'20px'}}>
                            <Col span={10}>  
                            
                                <img  style={{width:'283px',height:'64px'}} src={headpng}/>
                                <i style ={{color:"#e5e"}}>    专注移动互联网，专注js开发 </i>
                                <div style={{marginTop:'10px'}}>

                                <div className="head-icon">
                                    
                                    <img  style={{width:'70%'}} src={emailpng}/>
                                    <div className="head-icon-font">
                                     联系我 
                                    </div>
                                </div> 
                                <div className="head-icon">
                                <img  style={{width:'70%'}} src={messagepng}/>
                                <div className="head-icon-font">
                                 关于本站  
                                </div>
                                                              
                                </div>

                                <div className="head-icon">
                                <img  style={{width:'70%'}} src={weibopng}/>
                                <div  className="head-icon-font">

                                 我的微博
                                </div>
                                </div>
                                <div className="head-icon">
                                <img  style={{width:'70%'}} src={zhifubaopng}/>
                               <div  className="head-icon-font">
                                打赏本站  
                               </div>
                                </div>

                                </div>
                            </Col>
                            <Col span={14}  style={{textAlign:'right'}}> 
                            
                            <Input  style ={{width:'200px'}} placeholder='please input what you want' />   
                  
                      
                            <Button style={{textAlign:'right'}}> search </Button>
                             
                        <div>
                            <Carousel vertical autoplay= "true">
                                <div>
                                    <Icon type='notification' theme="twoTone" />写博客不易<a>点击查看详情</a>
                                </div>
                                
                                <div>
                                    <Icon type='notification'/>如果夏天不来，那么还有秋天，有冬天，一定会等到的。
                                </div>
                            </Carousel>
                        </div>
                            </Col>
                        </Row>
                    </Header>

                    <Layout>
                    <Content style={{marginLeft:'3%',paddingRight:'3%'}} >
                    
                    <PageContent />
                                
<Route path="/" exact component={ArticalList}/>
<Route path="/articalpage/:id&id2" component={ArticalList}/>

<Route path="/mybook" component={ArticalInfo}/>
<Route path='/connnectme' component={ConnectMe}/>
<Route path='/artical' component={ArticalPage}/>
                       

                    </Content>
                    </Layout>
                </Layout>
                
                  
            </div>
            </Router>

        )
    }
}