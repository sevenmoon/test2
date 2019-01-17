import React, { Component } from 'react';
import { Carousel, Spin } from "antd";
import ShopList from "./shopList";

export default class ShopIndex extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            bannerArr : [],
            shopArr: [],
            content: ''
        }
    }

    render(){
        return(
            <div style={{width:'700px',margin: 'auto',marginTop:50}}>
                <Carousel autoplay>
                {
                    this.state.bannerArr.map((item,index)=>{
                        console.log(item.Picture);
                        return  <div>
                            <img stype={{width:'100%'}} src={item.Picture} />
                        </div>
                    })
                }
                </Carousel>
                <div style={{lineHeight:5}}>
                    <Spin/>&nbsp;&nbsp;&nbsp; <Spin />&nbsp;&nbsp;&nbsp; <Spin />
                </div>

                <div>
                    {
                        this.state.shopArr.map((item,index)=>{
                            return <ShopList 
                                         key={index}
                                         storeArr={this.state.shopArr}
                                         callback={
                                             (id)=>{document.localtion.hash='#/shop_home_detail?id'+id}
                                         }/>
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount () {
        
        window.Axios.get(window.ApiName.ApiGetHomePage,'').then( res => {
        
            this.setState({
               bannerArr : res.Data.BannerList,
               shopArr:res.Data.HotList
            })
            
        }).catch( err => {
            console.log(`${err}`)
        })
    }
}