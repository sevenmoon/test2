import React, { Component } from 'react';
import ArticalConfig from './articalConfig';
import { Icon } from 'antd';

import {Link } from 'react-router-dom'
import PageConfig from './config';
export default class ArticalPage extends React.Component{
    render(){
        var info=this.props.location.query.info;
        const page = PageConfig[info.type2];
        return(
            <div style={{width:'80%',marginTop:'20px'}}>

                <div>

                {info.title}
                </div>
                <Icon style={{clear:'both'}} type='user'/>
                {info.writer}
                       
                <Icon type='folder-open' style={{marginLeft:'30px'}}/>
                <a> <Link to={'/articalpage/'+info.type1+"/"+info.type2}>{page} </Link></a>
                
                <hr/>
                <div>
                    {ArticalConfig[info.id]}
                </div>   
            </div>
        )
    }
} 