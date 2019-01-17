import React, { Component } from 'react';
import { Divider, Icon } from 'antd';
import {withRouter} from "react-router-dom";

import { BrowserRouter as Router,Route,Link} from 'react-router-dom'
import PageConfig from './config';

 class ArticalInfo extends React.Component{
    
    
    render(){
    

        const time = this.props.info.time;
        const title=this.props.info.title;
        const writer=this.props.info.writer;
        const type1 = this.props.info.type1;
        const type2 = this.props.info.type2;
        const des = this.props.info.des;
        var newRow;
        newRow='artical-head-info';
        if(this.props.newRow){
            newRow='artical-head-info-t'
        }else{
            if(this.props.right>0)
            newRow= 'artical-head-info-right';
        }
        const page = PageConfig[type2];
        return(
            <div className={newRow}>

                <div style={{backgroundColor:'#fe0',width:'60px',height:'60px',float:'left',textAlign:'center'}}>
                   
                   {time}
                    
                </div >
                <div id={this.props.info.id} onClick={()=>{
                       var div = document.getElementById(this.props.info.id);
                       div.innerHTML='正在修改中';
                       this.props.history.push({pathname:'/artical',query:{info:this.props.info}}); 
                }
                                   }>
               <a>{title}</a> 
                </div>
                <hr/>
                <Icon type='user'/>
                {writer}
                       
                <Icon type='folder-open' style={{marginLeft:'30px'}}/>
                <a> <Link to={'/articalpage/'+type1+"/"+type2}>{page} </Link></a>
                <div style={{clear:'both',marginTop:'10px'}}>
                    {des}
                </div>
                
            </div>
            
        )
    }
}export default withRouter(ArticalInfo);