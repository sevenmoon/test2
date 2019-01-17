import React, { Component } from 'react';
import { Button, Table, Input, Icon } from 'antd';


const data =[{
    key:'1',
    name:'zhuyilong',
    age:30,
    address:'moon'
},{
    key:'2',
    name:'zhuyilong2',
    age:29,
    address:'moon'
},{
    key:'3',
    name:'zyl1',
    age:27,
    address:'moon'
},{
    key:'4',
    name:'zyl2',
    age:28,
    address:'moon'
}];


export default class Tabble3 extends React.Component{
   state={
       searchText:''
   }

   getSearchProps=(dataIndex)=>({
       filterDropdown:({ setSelectedKeys,selectedKeys,confirm,clearFilters })=>(
           <div>
               <Input 
                    ref={node=>{this.input = node;}}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          
                    />
               <Button 
                    type='primary'
                    icon='search'
                    onClick={()=>this.handleSearch(selectedKeys,confirm)}
                >
                    search</Button>
               <Button>reset</Button>

           </div>
       ),
       filterIcon:<Icon type='search'/>,
       onFilter:(value,record)=>record.name.includes(value),
       onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => this.input.select());
        }
      }
   })
   
   handleSearch=(selectedKeys, confirm)=>{
       confirm();
       this.setState({searchText:selectedKeys[0]})
   }
    render(){
        let {filteredInfo ,sortInfo}= this.state;
        filteredInfo= filteredInfo || {};
         sortInfo = sortInfo || {};
        const columns=[{
            title:'Name',
            dataIndex:'name',
            key:'name',
            ...this.getSearchProps('name')
        },{
            title:'Age',
            dataIndex:'age',
            key:'age',
       
        },{
            title:'Address',
            dataIndex:'address',
            key:'address',
        }];

        return( 
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}