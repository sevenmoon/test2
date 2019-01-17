import React, { Component } from 'react';

import Tabble2 from './tabble2';
import Tabble1 from './tabble1';
import Tabble3 from './tabble3';

export default class TabbleIndex extends React.Component{
    constructor (props) {
        super(props)
    }
    
    render(){
        return (
            <div style={{width:'800px',margin: 'auto',marginTop:50}}>  
            <Tabble3/> 
            <hr />
                <Tabble2/>
                <hr/>
                <Tabble3 />
            </div>
        );
    }
}