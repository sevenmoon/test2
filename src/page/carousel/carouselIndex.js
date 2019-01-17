import React, { Component } from 'react';
import Carousel1 from './carousel1';

 export default class CarouselIndex extends React.Component{
     render(){
         return(
            <div style={{width:'800px',margin: 'auto',marginTop:50}}>   
              <Carousel1 />  
             </div>
         )
     }
 }