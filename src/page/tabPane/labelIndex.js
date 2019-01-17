import React, { Component } from 'react';
import Label1 from './label1';

export default class LabelIndex extends React.Component{
    constructor (props) {
        super(props)
    }
    render(){
        return(
            <div  style={{width:'800px',margin: 'auto',marginTop:50}}>
                <Label1/>
            </div>
        );
    }
}