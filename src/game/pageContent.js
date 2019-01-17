import React, { Component } from 'react';
import { Icon,Menu } from 'antd';
import ArticalInfo from './articalInfo';
import ArticalList from './articalList';
import ConnectMe from './connectme';


import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import SubMenu from 'antd/lib/menu/SubMenu';
import RightContent from './rightContent';
import eventProxy from './eventProxy';

export default class PageContent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            pageUrl1:'',
            pageUrl2:'',
            pageUrl3:'',
            visible:'',
            visible1:'none',
            visible2:'none',
            visible3:'none',
            
            
        }
    }
    
    
    render(){
        const pUrl1=this.state.pageUrl1;
        const pUrl2=this.state.pageUrl2;
        const pUrl3=this.state.pageUrl3;
        const v1=this.state.visible1;
        const v2=this.state.visible2;
        const v3=this.state.visible3;
        const ve=this.state.visible;
        const page={"allarticals":'文章归档',
        "jsarticals":'js频道',
        "gamepage":'游戏开发',
        "apppage":'应用开发',
        "mybook":'我的书',
        "connectme":'联系站长',
        
                   };

    
                   eventProxy.on('changePageIndex',(page1,page2,page3)=>{
                            var cvisible='none';
                            var cvisible1='none';
                            var cvisible2='none';
                            var cvisible3='none';
                            if(page1!='j'&&page2!='j'&&page3!='j'){
                                cvisible3='';
                            }else if(page1!='j'&&page2!='j'){
                                cvisible2='';
                            }else if(page1!='j'){
                                cvisible1='';
                            }else{
                                cvisible='';
                            }

                            this.setState({visible:cvisible,
                                visible1:cvisible1,
                                visible2:cvisible2,
                                visible3:cvisible3,
                                pageUrl1:page1,
                                pageUrl2:page2,
                                pageUrl3:page3,
                            })
                        
                        });
        return(
            

            <div>
    
                <div style={{textAlign:'left',background: 'rgb(190, 200, 200)'}}>
                

                <Menu mode="horizontal" theme='dark'>
                    
                     <SubMenu title={<Link to='/'>  首页</Link>}>
                      <Menu.Item key='setting:1'>文章归档</Menu.Item>
                      </SubMenu>
                      <SubMenu title={<Link to={'/articalpage/'+'jsarticals'}>  js频道</Link>}>
                      
                      <Menu.Item key='setting:2'><Link to={'/articalpage/'+'jsarticals&gamepage'}> 游戏开发</Link></Menu.Item>
                      <Menu.Item key='setting:3'><Link to={'/articalpage/'+'jsarticals&apppage'}> 应用开发</Link></Menu.Item>
                      </SubMenu>
                      
                      <Menu.Item key='setting:4'><Link to='/mybook'> 我的书</Link></Menu.Item>
                      <Menu.Item key='setting:5'><Link to='/connectme'> 联系站长</Link></Menu.Item>
                      
                
                </Menu>
                
                </div>
                
                <div style={{textAlign:'left'}}>
                        <Icon type='home'/>

                        <span style={{display:v3}}> 首页 
                             <Link to={{path:'/jspage',query:{pageindex1:pUrl1,pageindex2:'j'}}}>{' <'+page[pUrl1]}</Link>
                             <Link to={{path:'/jspage',query:{pageindex1:pUrl1,pageindex1:pUrl2}}}>{' <'+page[pUrl2]}</Link>
                             {' <'+pUrl3}
                         </span>
                        <span style={{display:v2}}> 首页  
                             <Link to={{path:'/jspage',query:{pageindex1:pUrl1,pageindex2:'j'}}}>{' <'+page[pUrl1]}</Link>
                             {' <'+page[pUrl2]}
                        </span>
                        <span style={{display:v1}}> 首页  {' <'+page[pUrl1]}</span>
                        <span style={{display:ve}}> 首页  </span>
                    </div>
                

                <RightContent/>
                    
                

            </div>
          
        )
    }
}