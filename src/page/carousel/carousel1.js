import React, { Component } from 'react';
import { Carousel } from 'antd';


export default class Carousel1 extends React.Component{
    render(){
        return(
            <div>
                <Carousel vertical autoplay= "true">
                    <div><h3>1</h3> </div>
                    <div><h3>2</h3> </div>
                    <div><h3>3</h3> </div>
                    <div><h3>4</h3> </div>
                </Carousel>
            </div>
        )
    }
}