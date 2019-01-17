import React, { Component } from 'react';
import { Tabs } from 'antd';

export default class Label1 extends React.Component{
    render(){
        return(
            <Tabs>
                <Tabs.TabPane tab='tab1' key ='1'>
                    i have a dream,a fream of you ,i said i love you .
                </Tabs.TabPane>
                <Tabs.TabPane tab='tab2' key ='2'>
                    i have a dream,a fream of you ,i said i love you .
                </Tabs.TabPane>
                <Tabs.TabPane tab='tab3' key ='3'>
                    i have a dream,a fream of you ,i said i love you .
                </Tabs.TabPane>
                
            </Tabs>
        );
    }
}