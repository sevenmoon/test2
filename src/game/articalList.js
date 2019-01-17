import React, { Component } from 'react';
import { Divider } from 'antd';
import ArticalInfo from './articalInfo';
import eventProxy from './eventProxy';

export default class ArticalList extends React.Component{

    state={
        articalLists:[{
            id:'artical100',
            type1:'jsarticals',
            type2:'gamepage',
            time:"2018-12-26",
            title:'js研究院之被坑了的浮点数值的的',
            writer:'雨松momo',
            pageurl:'gamepage',
            des:'最近被浮点数坑了，所以一定要写篇文章记录下。先看看如下代码最近被浮点数坑了，所以一定要写篇文章记录下。先看看如下代码最近被浮点数坑了，所以一定要写篇文章记录下。先看看如下代码最近被浮点数坑了，所以一定要写篇文章记录下。先看看如下代码',

        },{
            id:'artical101',
            type1:'jsarticals',
            type2:'apppage',
            time:"2018-12-26",
            title:'js研究院之被坑了的浮点数值的的',
            writer:'雨松momo',
            pageurl:'gamepage',
            des:'最近被浮点数坑了，所以一定要写篇文章记录下。先看看如下代码',

        },{
            id:'artical102',
            type1:'jsarticals',
            type2:'apppage',
            time:"2018-12-26",
            title:'js研究院之被坑了的浮点的飞到了半空中',
            writer:'雨松momo',
            pageurl:'apppage',
            des:'最近被浮点数坑了，所以一定要写篇文章记录下。先看看如下代码',

        },{
            id:'artical103',
            type1:'jsarticals',
            type2:'apppage',
            time:"2018-12-26",
            title:'js研究院之被坑了的浮点的飞到了半空中',
            writer:'雨松momo',
            pageurl:'apppage',
            des:'最近被浮点数坑了，所以一定要写篇文章记录下。先看看如下代码',

        },{
            id:'artical104',
            type1:'jsarticals',
            type2:'apppage',
            time:"2018-12-26",
            title:'js研究院之被坑了的浮点的飞到了半空中',
            writer:'雨松momo',
            pageurl:'apppage',
            des:'最近被浮点数坑了，所以一定要写篇文章记录下。先看看如下代码',

        }]
    }
    render(){
        var  pageIndex1 ='j';
        var  pageIndex2 ='j';

        if(this.props.match.params.id){

            var strs = this.props.match.params.id.split('/');
       
            if(strs[0]){
             
                pageIndex1 =   strs[0];
            }
            if(strs[1]){
                pageIndex2 = strs[1];
            
            }
        }
            console.log(this.props)    
        eventProxy.trigger('changePageIndex',pageIndex1,pageIndex2,'j')
        

     const articalLists = this.state.articalLists;
        const data=[];
        for(let item of articalLists){
            if(pageIndex1==item.type1&&pageIndex2=='j'){
                data.push(item);
            }else if(pageIndex2==item.type2){
                data.push(item);
            }else if(pageIndex1=='j'&&pageIndex2=='j'){
              
                data.push(item);
            }
            
        }
        return(
            <div >
                {data.map((item,i)=>{
                  return  <ArticalInfo key={i}
                     info={item}
                     newRow={i%2==0}
                     right={i}                
                     />

                })}
            </div>
        )
    }
}